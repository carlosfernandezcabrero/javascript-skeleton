#!/bin/sh
# file: install.sh

echo Removing .git directory
echo
rm -rf .git/

echo Installing NPM packages ...
echo

npm install

npm run config

