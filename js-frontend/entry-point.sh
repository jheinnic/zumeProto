#!/bin/sh

if [ "x$NODE_ENV" == "xdevelopment" -o "x$NODE_ENV" == "x" ] 
then
	$HOME/.yarn/bin/yarn install --pure-lockfile
fi

exec "$@"
