#!/bin/bash

DIR=$(pwd);
##################### Init ###################
echo "Initialize build..."
# Ennsure existence of lib folder
mkdir -p $DIR/lib;
# Mirror directories
cp -r $DIR/src/* $DIR/lib;

##################### Minifying ###################

echo "Minifying Javascript..."
JSFILES=$(find $DIR/src -name "*.js"); # In MacOS it works
for file in $JSFILES;
do
  outputPath=$(sed "s/src/lib/g" <<< $file);
  echo $(sed "s/src/lib/g" <<< $file);
  ./node_modules/uglify-es/bin/uglifyjs $file \
     --compress \
     --mangle \
     -o $outputPath;
done

##################### Clean up ###################

echo "Build Clean up..."
find $DIR/lib -name "*.spec.js"  -delete;
