#!/usr/bin/env bash

set -xe

pushd /usr/share/nginx/html

envsubst < environment.js.template > environment.js
if grep -Fxq "$" environment.js
then
  echo "Failed to substitute all environment variables in 'environment.js.template'"
  echo "Substitution result:"
  cat environment.js
  return 1
fi

rm environment.js.template

popd

nginx -g daemon off;