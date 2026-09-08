#!/bin/bash
# Rebuild assets/app.css without the full webpack pipeline.
# Mirrors _src/index.scss import order: normalize.css + tobii + _scss/default.
# Run after editing _scss/_default.scss:  bash config/build-css.sh
set -e
cd "$(dirname "$0")/.."

OUT=assets/app.css
TMP=$(mktemp -d)

# 1) normalize.css (plain CSS, inlined by webpack; we concatenate the raw file)
cat node_modules/normalize.css/normalize.css > "$TMP/normalize.css"

# 2) tobii lightbox styles
npx sass node_modules/@midzer/tobii/src/scss/tobii.scss "$TMP/tobii.css" \
  --style=compressed --no-source-map --quiet 2>/dev/null

# 3) our site styles
npx sass _scss/_default.scss "$TMP/default.css" \
  --style=compressed --no-source-map --quiet 2>/dev/null

cat "$TMP/normalize.css" "$TMP/tobii.css" "$TMP/default.css" > "$OUT"
rm -rf "$TMP"
echo "Wrote $OUT ($(wc -c < "$OUT") bytes)"
