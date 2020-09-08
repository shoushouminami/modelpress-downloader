# Default build for local testing with dev
build: clean cp-resources webpack-dev

# Build for production release with package.zip
release: clean cp-resources webpack mk-package

source: src/**/* src/* config/*

# test mode build using test webpack config file, which has unit test mocks on inject.js
webpack-test: source
	npx webpack --mode=development --env.NODE_ENV=dev --config test/webpack.config.test.js

# dev mode build, using dev config
webpack-dev: source
	npx webpack --mode=development --env.NODE_ENV=dev

# release build, using prod config
webpack: source
	npx webpack --mode=development

# dev mode with watch flag
watch: clean cp-resources source
	npx webpack --mode=development --watch --env.NODE_ENV=dev

# test mode with watch fag
test-watch: clean cp-resources source
	npx webpack --mode=development --watch --env.NODE_ENV=dev --config test/webpack.config.test.js

cp-resources: images
	cp -R images build/

# Build package.zip
mk-package:
	cd build && zip -r package.zip * -x package.zip && ls *.zip
	echo "Done packaging."

.PHONY: test clean

clean:
	-rm -rf build
	-mkdir build

test: clean cp-resources webpack-test
	npm test
