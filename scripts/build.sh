#!/bin/bash

DIR=$(pwd);
FIRSTARG=${1:-"nonverbose"}; # npm run build verbose
# Helper
smartecho() {
  if [ $FIRSTARG = "verbose" ]; then
     echo $1;
  fi
}


##################### Init ###################
smartecho "🔬 Initialize build..."
# Ennsure existence of lib folder
mkdir -p $DIR/lib;
# Mirror directories
cp -r $DIR/src/* $DIR/lib;

##################### Minifying ###################

smartecho "🔬 Minifying Javascript..."

JSFILES=$(find $DIR/src -name "*.js"); # In MacOS it works
for file in $JSFILES;
do
  outputPath=$(sed "s/src/lib/g" <<< $file);
  smartecho "\t$outputPath";

  ./node_modules/uglify-es/bin/uglifyjs $file \
     --compress \
     --mangle \
     -o $outputPath;
done

##################### Clean up ###################

smartecho "🔬 Clean up..."

find $DIR/lib -name "*.spec.js"  -delete;
rm $DIR/lib/setupTests.js;

smartecho "Done 🎉. The package is ready to be published"
