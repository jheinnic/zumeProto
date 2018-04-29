#!/bin/sh

ng serve --target development --environment dev --sourcemaps true --vendor-chunk true --common-chunk true --base-href http://portfolio.dev.jchein.name:8888/ --deploy-url http://portfolio.dev.jchein.name:8888/ --verbose true --progress true --named-chunks true --port 8888 --host portfolio.dev.jchein.name --live-reload true --public-host http://portfolio.dev.jchein.name:8888/ --disable-host-check false --hmr false

