#!/usr/bin/env bash

rm -rf build
mkdir -p build
cp -R src/* images build/
cd build
zip -r package.zip *
ls *.zip
echo "Done."