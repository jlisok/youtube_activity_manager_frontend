#!/usr/bin/env sh

set -xe

DIR=$(pwd)
cd /usr/share/nginx/html

envsubst < environment.js.template > environment.js
rm environment.js.template

cd "${DIR}"
exec "nginx" "-g" "daemon off;"