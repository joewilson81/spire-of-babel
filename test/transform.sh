#!/bin/bash

for file in test/fixture/original/*.js; do
    if [[ ! "${file}" =~ .bundle|sourcemap. ]]; then
        ./bin/spire-of-babel "${file}" --output ./test/fixture/transformed/"$(basename "$file")"
    fi
done

./bin/spire-of-babel test/fixture/original/bundle.js --bundle --output ./test/fixture/transformed/bundle.js
./bin/spire-of-babel test/fixture/original/sourcemap.js --sourcemap --output ./test/fixture/transformed/sourcemap.js
./bin/spire-of-babel test/fixture/original/sourcemap_inline.js --sourcemap > ./test/fixture/transformed/sourcemap_inline.js
