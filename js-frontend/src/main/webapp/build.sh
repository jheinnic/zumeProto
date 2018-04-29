#!/bin/sh

ng build --target development --environment dev --sourcemaps true --vendor-chunk true --common-chunk true --base-href http://portfolio.dev.jchein.name:8888/ --verbose true --progress true --named-chunks true --stats-json true
