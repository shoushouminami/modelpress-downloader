# Build for local testing
build: clean cp-resources webpack-test

# Build for production release with package.zip
release: clean cp-resources webpack mk-package

source: src/**/* src/* config/*

webpack-test: source
	npx webpack --mode=development --env.NODE_ENV=test

webpack: source
	npx webpack --mode=development

watch: clean cp-resources source
	npx webpack --mode=development --watch --env.NODE_ENV=test

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

test: build
	npm test
