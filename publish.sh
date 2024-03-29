#!/bin/bash

old_string="0.8.83-1"
new_string="0.8.83-2"

replace_string_in_file() {
    file=$1
    sed -i '' "s/$old_string/$new_string/g" $file
}

files=("./xpwa.js" "./package.json" "./readme.md" "./webpack.config.js")

for file in "${files[@]}"; do
    if [ -e "$file" ]; then
        replace_string_in_file "$file"
        echo "Заменено в файле: $file"
    else
        echo "Файл не найден: $file"
    fi
done

file="./xpwa/DOM/DOM.js"
line_number=1

sed -i '' -e "${line_number}s/^\/\/\(.*\)/\1/" "$file"
echo "Строка в файле $file с номером $line_number была раскомментирована."

npx webpack;

sed -i '' -e "${line_number}s/\(.*\)/\/\/\1/" "$file"
echo "Строка в файле $file с номером $line_number была закомментирована."
