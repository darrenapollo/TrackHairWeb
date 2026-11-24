"""Writes the Norwood and Ludwig stage diagrams (top-down head view, front at top). Run: python3 config/make-scale-diagrams.py _images"""
import os, sys

SKIN, HAIR, LINE, TEXT = "#EBC7A8", "#3B2A20", "#8A6A55", "#1F2937"
TOP = "L182 0 L18 0 Z"  # closes a front bald area along the front of the head

# Each stage: (label, short description, list of (path_or_ellipse, opacity))
NORWOOD = [
    ("I", "full hairline with little or no recession",
     [("M20 70 C50 52, 150 52, 180 70 " + TOP, 1)]),
    ("II", "slight, even recession at both temples",
     [("M20 72 C35 84, 55 86, 66 74 C80 62, 120 62, 134 74 C145 86, 165 84, 180 72 " + TOP, 1)]),
    ("III", "deeper temple recession in an M, U or V shape",
     [("M20 75 C35 102, 55 110, 68 94 C82 72, 118 72, 132 94 C145 110, 165 102, 180 75 " + TOP, 1)]),
    ("IV", "further temple recession and a bald crown, with a band of hair between them",
     [("M20 80 C35 112, 55 120, 70 106 C85 88, 115 88, 130 106 C145 120, 165 112, 180 80 " + TOP, 1),
      (("ellipse", 100, 172, 20, 18), 1)]),
    ("V", "the band between front and crown becomes narrow and sparse",
     [("M20 85 C40 126, 60 126, 100 120 C140 126, 160 126, 180 85 " + TOP, 1),
      (("ellipse", 100, 170, 31, 27), 1),
      (("ellipse", 100, 140, 34, 14), 0.6)]),
    ("VI", "front and crown join into one bald area, with hair at the sides and back",
     [("M18 72 C42 100, 46 150, 62 180 C76 196, 124 196, 138 180 C154 150, 158 100, 182 72 " + TOP, 1)]),
    ("VII", "only a narrow horseshoe of hair remains around the sides and back",
     [("M18 85 C34 115, 36 170, 60 202 C76 216, 124 216, 140 202 C164 170, 166 115, 182 85 " + TOP, 1)]),
]

LUDWIG = [
    ("I", "mild thinning on the crown and top, with the front hairline kept",
     [(("ellipse", 100, 116, 22, 48), 0.35)]),
    ("II", "more visible thinning and a wider part over the top of the scalp",
     [(("ellipse", 100, 122, 34, 54), 0.6)]),
    ("III", "extensive thinning across the top, with the front hairline still in place",
     [(("ellipse", 100, 128, 46, 60), 0.75)]),
]
LUDWIG_FRONT = "M20 66 C50 50, 150 50, 180 66 " + TOP


def shape(s, opacity):
    op = "" if opacity == 1 else f' fill-opacity="{opacity}"'
    if isinstance(s, tuple):
        _, cx, cy, rx, ry = s
        return f'<ellipse cx="{cx}" cy="{cy}" rx="{rx}" ry="{ry}" fill="{SKIN}"{op}/>'
    return f'<path d="{s}" fill="{SKIN}"{op}/>'


def head(uid, shapes, label, part_line=False):
    parts = [
        f'<clipPath id="h{uid}"><ellipse cx="100" cy="130" rx="78" ry="100"/></clipPath>',
        f'<ellipse cx="22" cy="135" rx="7" ry="16" fill="{SKIN}" stroke="{LINE}" stroke-width="2"/>',
        f'<ellipse cx="178" cy="135" rx="7" ry="16" fill="{SKIN}" stroke="{LINE}" stroke-width="2"/>',
        f'<path d="M92 33 L100 20 L108 33 Z" fill="{SKIN}" stroke="{LINE}" stroke-width="2" stroke-linejoin="round"/>',
        f'<g clip-path="url(#h{uid})"><rect width="200" height="250" fill="{HAIR}"/>',
    ]
    if part_line:
        parts.append(f'<path d="M100 64 L100 175" stroke="{SKIN}" stroke-width="3"/>')
    parts += [shape(s, o) for s, o in shapes]
    parts += [
        "</g>",
        f'<ellipse cx="100" cy="130" rx="78" ry="100" fill="none" stroke="{LINE}" stroke-width="2.5"/>',
        f'<text x="100" y="12" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="{LINE}">Front</text>',
        f'<text x="100" y="250" text-anchor="middle" font-family="system-ui, sans-serif" font-size="17" font-weight="600" fill="{TEXT}">{label}</text>',
    ]
    return "".join(parts)


def svg(w, h, title, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">'
            f"<title>{title}</title>{body}</svg>\n")


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(text)


def build(root, scale, stages, extra=None, part_line=False):
    name = scale.lower()
    row = []
    for i, (num, desc, shapes) in enumerate(stages, 1):
        shapes = ([(extra, 1)] if extra else []) + shapes
        label = f"{'Type' if scale == 'Ludwig' else 'Stage'} {num}"
        body = head(f"{name}{i}", shapes, label, part_line)
        write(f"{root}/{name}/{name}-{'type' if scale == 'Ludwig' else 'stage'}-{i}.svg",
              svg(200, 260, f"{scale} {label}: {desc}, seen from above", body))
        row.append(f'<g transform="translate({(i - 1) * 200} 0)">{body}</g>')
    write(f"{root}/{name}/{name}-scale-chart.svg",
          svg(200 * len(stages), 260, f"{scale} scale chart: all {len(stages)} {'types' if scale == 'Ludwig' else 'stages'} seen from above", "".join(row)))


if __name__ == "__main__":
    root = sys.argv[1]
    build(root, "Norwood", NORWOOD)
    build(root, "Ludwig", LUDWIG, extra=LUDWIG_FRONT, part_line=True)
    assert len(os.listdir(f"{root}/norwood")) == 8 and len(os.listdir(f"{root}/ludwig")) == 4
    print("ok")
