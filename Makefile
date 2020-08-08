build: clean cp-resources webpack mk-package

webpack-test: src/**/* src/*
	npx webpack --mode=development --env.NODE_ENV=test

webpack: src/**/* src/*
	npx webpack --mode=development

watch: clean cp-resources src/**/* src/*
	npx webpack --mode=development --watch --env.NODE_ENV=test

cp-resources: images
	cp -R images build/

mk-package:
	cd build && zip -r package.zip * -x package.zip && ls *.zip
	echo "Done packaging."

.PHONY: test clean

clean:
	-rm -rf build
	-mkdir build

test: clean cp-resources webpack-test
	npm test
