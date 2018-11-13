#!/bin/sh

USER=root
SERVER=piotrmacha.pl
DIR=/var/www/piotrmacha.pl

webpack

ssh $USER@$SERVER "mkdir -p $DIR"
scp -r ./{dist,index.html} $USER@$SERVER:$DIR

ssh $USER@$SERVER "mkdir -p $DIR/node_modules/react/umd"
scp node_modules/react/umd/react.development.js $USER@$SERVER:$DIR/node_modules/react/umd/react.development.js

ssh $USER@$SERVER "mkdir -p $DIR/node_modules/react-dom/umd"
scp node_modules/react-dom/umd/react-dom.development.js $USER@$SERVER:$DIR/node_modules/react-dom/umd/react-dom.development.js