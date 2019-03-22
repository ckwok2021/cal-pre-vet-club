#!/bin/bash

set -e

git pull

# added 2019-03-04 by cooperc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm use 10

npm install
npm run build
cp -R build/* ~/public_html/
