#!/usr/bin/env bash

mkdir -p build
cp -R src/* images build/
cd build
zip -r package.zip * -x package.zip
ls *.zip
echo "Done."