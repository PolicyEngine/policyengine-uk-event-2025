#!/bin/bash

# Remove subjective adjectives/adverbs from report content
# PolicyEngine writing style: avoid adjectives unless backed by numbers

echo "Removing subjective language from report files..."

find slides/slideshows -name "report.md" -type f | while read file; do
    echo "Processing $file"
    
    sed -i '' \
        -e 's/innovative approach/approach/g' \
        -e 's/an innovative /a /g' \
        -e 's/transformative //' \
        -e 's/groundbreaking //' \
        -e 's/cutting-edge //' \
        -e 's/sophisticated //' \
        -e 's/, sophisticated//' \
        -e 's/advanced //' \
        -e 's/comprehensive //' \
        -e 's/extensive //' \
        -e 's/a critical /a /g' \
        -e 's/crucial //' \
        -e 's/vital //' \
        -e 's/essential //' \
        -e 's/flagship //' \
        -e 's/pioneering //' \
        -e 's/ambitious //' \
        -e 's/stark //' \
        -e 's/candidly //' \
        -e 's/real-world //' \
        -e 's/established institutions/institutions/g' \
        "$file"
done

echo "✅ Subjective language removal complete!"
