#!/bin/bash
source .env

curl $RENDER_PUSH_URL
render logs -o text --tail -r $RENDER_SERVICE
