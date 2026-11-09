#!/usr/bin/env bash
set -euo pipefail

src=${1:?usage: optimise-media.sh <source-dir> <output-dir>}
out=${2:?usage: optimise-media.sh <source-dir> <output-dir>}
quality=${QUALITY:-80}
convert_bin=$(command -v magick || command -v convert)

box_for() {
  case "$(basename "$1")" in
    logo.*) echo 640x640 ;;
    banner.*) echo 1600x1600 ;;
    *) echo 600x600 ;;
  esac
}

find "$src" -type f \( -iname '*.webp' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 |
  while IFS= read -r -d '' file; do
    key=${file#"$src"/}
    target="$out/${key%.*}.webp"
    mkdir -p "$(dirname "$target")"
    "$convert_bin" "$file" -auto-orient -strip -resize "$(box_for "$file")>" -quality "$quality" "$target"
    printf '%8d -> %8d  %s\n' "$(stat -c %s "$file")" "$(stat -c %s "$target")" "$key"
  done
