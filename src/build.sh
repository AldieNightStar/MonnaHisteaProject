#!/bin/bash
markdown-folder-to-html .

cp -r ../_src/* ../
rm ../build.sh
rm ../template.html
rm ../contents.json
rm -rf ../_src/