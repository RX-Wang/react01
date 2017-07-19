#!/bin/sh
PATH=$(pwd)
git pull
npm i
pm2 delete react01
pm2 start $PATH/server.js -name react01