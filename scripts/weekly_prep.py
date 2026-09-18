#!/usr/bin/env python3
"""
티움 위클리 초안 준비 스크립트
─────────────────────────────────────────────
지난 한 주(월~금)의 데일리 브리핑 아카이브를 읽어
  1) 기사 목록(제목·매체·URL·국내/해외·하루 한 줄)을 JSON으로 정리하고
  2) 일별 국내/해외 건수 도표(SVG)를 만들고
  3) 주제 분류가 주어지면 주제별 분포 도표(SVG)까지 만든다.
글(흐름 세 가지·사무국장의 생각)은 이 스크립트가 쓰지 않는다 — 사람이(또는 Claude가) 쓴다.

사용:
  python3 scripts/weekly_prep.py                 # 오늘 기준 지난 월~금
  python3 scripts/weekly_prep.py 2026-09-18      # 해당 날짜가 속한 주의 월~금
  python3 scripts/weekly_prep.py --themes themes.json   # 주제 분류 반영해 두 번째 도표 생성

출력(스크래치 폴더 또는 --out 지정):
  week.json, chart_daily.svg, chart_theme.svg(주제 있을 때), summary.txt
"""
import sys, re, html, json, datetime, pathlib, argparse
from collections import Counter

ARCHIVE = pathlib.Path.home() / 'agents' / 'briefing' / 'archive'
NAVY, AMBER, TXT = '#1B4F8A', '#F5A623', '#4a5568'
DOW = ['월', '화', '수', '목', '금', '토', '일']


def default_anchor(today: datetime.date) -> datetime.date:
    """날짜를 지정하지 않았을 때의 기준 주.
    금~일이면 이번 주, 월~목이면 지난주 — 예약 작업이 금요일에 못 돌고
    월요일에 늦게 실행돼도 '지난주' 리포트를 만들도록 한다."""
    return today if today.weekday() >= 4 else today - datetime.timedelta(days=7)


def week_days(anchor: datetime.date):
    """anchor가 속한 주의 월~금 날짜 목록."""
    mon = anchor - datetime.timedelta(days=anchor.weekday())
    return [mon + datetime.timedelta(days=i) for i in range(5)]


def parse_briefing(path: pathlib.Path):
    t = path.read_text(encoding='utf-8', errors='ignore')
    one = re.search(r'오늘의 한 줄.*?<[^>]*>\s*([^<]{10,})', t, re.S)
    items = []
    for m in re.finditer(r'(\d{1,2})\.\s*(.+?)\s*\(([^()]+?)\)\s*<', t, re.S):
        num = int(m.group(1))
        title = html.unescape(re.sub(r'<[^>]+>', '', m.group(2))).strip()
        src = m.group(3).strip()
        if len(title) < 8 or len(title) > 160:
            continue
        seg = t[m.end(): m.end() + 3000]
        u = re.search(r'href="(https?://[^"]+)"', seg)
        core = re.search(r'핵심:\s*(.+?)\s*<', seg)
        items.append({'n': num, 'title': title, 'src': src,
                      'url': u.group(1) if u else '',
                      'core': html.unescape(core.group(1)).strip() if core else ''})
    seen, uniq = set(), []
    for it in items:
        if it['n'] not in seen:
            seen.add(it['n']); uniq.append(it)
    pos_g = t.find('해외 뉴스')
    for it in uniq:
        idx = t.find(it['title'][:20])
        it['scope'] = '해외' if (pos_g != -1 and idx > pos_g) else '국내'
    return {'one_liner': html.unescape(one.group(1)).strip() if one else '', 'items': uniq}


def svg_daily(rows):
    """rows: [(label, dom, glo), ...]"""
    w, rowh, left, top = 640, 34, 78, 14
    h = top + rowh * len(rows) + 40
    mx = max((d + g) for _, d, g in rows) or 1
    scale = (w - left - 70) / mx
    s = [f'<svg viewBox="0 0 {w} {h}" width="100%" role="img" aria-label="이번 주 일별 국내·해외 기사 수" '
         f'xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">',
         f'<style>.lb{{font-size:13px;fill:{TXT}}}.nm{{font-size:12px;fill:#fff;font-weight:700}}.lg{{font-size:12px;fill:{TXT}}}</style>']
    for i, (lab, d, g) in enumerate(rows):
        y = top + i * rowh
        s.append(f'<text class="lb" x="{left-10}" y="{y+21}" text-anchor="end">{lab}</text>')
        s.append(f'<rect x="{left}" y="{y+6}" width="{d*scale:.1f}" height="22" rx="4" fill="{NAVY}"/>')
        if d: s.append(f'<text class="nm" x="{left+d*scale/2:.1f}" y="{y+21}" text-anchor="middle">{d}</text>')
        s.append(f'<rect x="{left+d*scale:.1f}" y="{y+6}" width="{g*scale:.1f}" height="22" rx="4" fill="{AMBER}"/>')
        if g: s.append(f'<text class="nm" x="{left+d*scale+g*scale/2:.1f}" y="{y+21}" text-anchor="middle">{g}</text>')
        s.append(f'<text class="lb" x="{left+(d+g)*scale+10:.1f}" y="{y+21}">{d+g}건</text>')
    ly = top + rowh * len(rows) + 22
    s.append(f'<rect x="{left}" y="{ly-10}" width="12" height="12" rx="2" fill="{NAVY}"/><text class="lg" x="{left+18}" y="{ly}">국내</text>')
    s.append(f'<rect x="{left+70}" y="{ly-10}" width="12" height="12" rx="2" fill="{AMBER}"/><text class="lg" x="{left+88}" y="{ly}">해외</text>')
    s.append('</svg>')
    return '\n'.join(s)


def svg_theme(counter: Counter):
    items = counter.most_common()
    if not items:
        return ''
    mx = items[0][1]
    w, rowh, left, top = 640, 30, 150, 10
    h = top + rowh * len(items) + 10
    scale = (w - left - 60) / mx
    s = [f'<svg viewBox="0 0 {w} {h}" width="100%" role="img" aria-label="이번 주 기사 주제별 분포" '
         f'xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;max-width:640px;display:block;">',
         f'<style>.lb{{font-size:13px;fill:{TXT}}}.ct{{font-size:13px;fill:#1a1a2e;font-weight:700}}</style>']
    for i, (name, v) in enumerate(items):
        y = top + i * rowh
        s.append(f'<text class="lb" x="{left-10}" y="{y+19}" text-anchor="end">{name}</text>')
        s.append(f'<rect x="{left}" y="{y+5}" width="{v*scale:.1f}" height="20" rx="4" fill="{NAVY if i < 3 else "#7a9cc6"}"/>')
        s.append(f'<text class="ct" x="{left+v*scale+8:.1f}" y="{y+19}">{v}</text>')
    s.append('</svg>')
    return '\n'.join(s)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('date', nargs='?', help='기준 날짜 YYYY-MM-DD (기본: 오늘)')
    ap.add_argument('--themes', help='주제 분류 JSON: {"MM-DD": ["A","B",...(기사 순서대로 주제명)]}')
    ap.add_argument('--out', help='출력 폴더 (기본: 스크래치)')
    a = ap.parse_args()

    anchor = datetime.date.fromisoformat(a.date) if a.date else default_anchor(datetime.date.today())
    days = week_days(anchor)
    if not a.date:
        print(f'기준 주 자동 선택: {days[0]} ~ {days[-1]} (오늘 {datetime.date.today()} {DOW[datetime.date.today().weekday()]})')
    out = pathlib.Path(a.out) if a.out else pathlib.Path('/tmp') / f'tieum-weekly-{days[0]}'
    out.mkdir(parents=True, exist_ok=True)

    week, rows, missing = {}, [], []
    for d in days:
        f = ARCHIVE / f'{d.isoformat()}-briefing.html'
        key = d.strftime('%m-%d')
        if not f.exists():
            missing.append(d.isoformat()); continue
        week[key] = parse_briefing(f)
        dom = sum(1 for i in week[key]['items'] if i['scope'] == '국내')
        rows.append((f'{d.month}/{d.day}({DOW[d.weekday()]})', dom, len(week[key]['items']) - dom))

    theme_cnt = Counter()
    if a.themes:
        themes = json.load(open(a.themes, encoding='utf-8'))
        for key, names in themes.items():
            items = week.get(key, {}).get('items', [])
            if len(names) != len(items):
                sys.exit(f'주제 수 불일치 {key}: 주제 {len(names)} vs 기사 {len(items)}')
            for it, nm in zip(items, names):
                it['theme'] = nm; theme_cnt[nm] += 1

    (out / 'week.json').write_text(json.dumps(week, ensure_ascii=False, indent=1), encoding='utf-8')
    if rows:
        (out / 'chart_daily.svg').write_text(svg_daily(rows), encoding='utf-8')
    if theme_cnt:
        (out / 'chart_theme.svg').write_text(svg_theme(theme_cnt), encoding='utf-8')

    total = sum(len(v['items']) for v in week.values())
    dom = sum(1 for v in week.values() for i in v['items'] if i['scope'] == '국내')
    lines = [f'기간: {days[0]} ~ {days[-1]}  |  ISO 주차: {days[0].isocalendar()[1]}',
             f'브리핑 {len(week)}일치, 기사 {total}건 (국내 {dom} / 해외 {total-dom})']
    if missing: lines.append('⚠ 아카이브 없음: ' + ', '.join(missing))
    for key, v in week.items():
        lines.append(f'\n[{key}] {v["one_liner"]}')
        for it in v['items']:
            lines.append(f'  {it["n"]:2d}. [{it["scope"]}] {it["title"]} ({it["src"]})' + (f' → {it["theme"]}' if it.get('theme') else ''))
            if it['core']: lines.append(f'      핵심: {it["core"]}')
    if theme_cnt:
        lines.append('\n주제별: ' + ' · '.join(f'{k} {v}' for k, v in theme_cnt.most_common()))
    (out / 'summary.txt').write_text('\n'.join(lines), encoding='utf-8')
    print('\n'.join(lines[:2])); print('출력 폴더:', out)


if __name__ == '__main__':
    main()
