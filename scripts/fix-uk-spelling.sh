#!/bin/bash

# Fix American spellings to UK spellings in all report.md and slide .tsx files

# Function to apply spelling fixes
fix_spelling() {
    local file=$1
    sed -i '' \
        -e 's/organization/organisation/g' \
        -e 's/Organization/Organisation/g' \
        -e 's/modeling/modelling/g' \
        -e 's/Modeling/Modelling/g' \
        -e 's/behavior/behaviour/g' \
        -e 's/Behavior/Behaviour/g' \
        -e 's/behavioral/behavioural/g' \
        -e 's/Behavioral/Behavioural/g' \
        -e 's/optimize/optimise/g' \
        -e 's/Optimize/Optimise/g' \
        -e 's/optimization/optimisation/g' \
        -e 's/Optimization/Optimisation/g' \
        -e 's/\blabor\b/labour/g' \
        -e 's/\bLabor\b/Labour/g' \
        -e 's/recognize/recognise/g' \
        -e 's/Recognize/Recognise/g' \
        -e 's/democratizing/democratising/g' \
        -e 's/Democratizing/Democratising/g' \
        -e 's/democratize/democratise/g' \
        -e 's/Democratize/Democratise/g' \
        -e 's/democratizes/democratises/g' \
        -e 's/visualization/visualisation/g' \
        -e 's/Visualization/Visualisation/g' \
        -e 's/visualizations/visualisations/g' \
        -e 's/Visualizations/Visualisations/g' \
        -e 's/customizing/customising/g' \
        -e 's/Customizing/Customising/g' \
        -e 's/customizable/customisable/g' \
        -e 's/Customizable/Customisable/g' \
        -e 's/rigor/rigour/g' \
        -e 's/Rigor/Rigour/g' \
        -e 's/synthesize/synthesise/g' \
        -e 's/Synthesize/Synthesise/g' \
        "$file"
}

# Fix report.md files
echo "Fixing spelling in report.md files..."
find slides/slideshows -name "report.md" -type f | while read file; do
    echo "  $file"
    fix_spelling "$file"
done

# Fix .tsx slide files (exclude node_modules)
echo "Fixing spelling in .tsx slide files..."
find slides/slideshows -name "*.tsx" -type f | grep -v node_modules | while read file; do
    echo "  $file"
    fix_spelling "$file"
done

echo "✅ UK spelling corrections complete!"
