#!/bin/bash

old_string="211-se"
new_string="0.8.63"

replace_string_in_file() {
    file=$1
    sed -i '' "s/$old_string/$new_string/g" $file
}

files=("./xpwa.js" "./package.json" "./readme.md")

for file in "${files[@]}"; do
    if [ -e "$file" ]; then
        replace_string_in_file "$file"
        echo "Заменено в файле: $file"
    else
        echo "Файл не найден: $file"
    fi
done

npx webpack;

sleep 5;

# Раскомментировать сроку стилей

file="./xpwa/DOM/DOM.js"
line_number=1
sed -i '' -e "${line_number}s/\(.*\)/\/\/\1/" "$file"
echo "Строка в файле $file с номером $line_number была закомментирована."
