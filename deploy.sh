#!/bin/bash
rm -r ./dist
rm -r ./docs
mkdir ./docs
npm run build
cp -R ./dist/* ./docs
git add .
