
build: clean cp-resources webpack mk-package

dev: clean cp-resources webpack-dev mk-package

webpack-dev: src/**/* src/*
	npx webpack --mode=development

webpack: src/**/* src/*
	npx webpack --mode=production

cp-resources: images
	cp -R images build/

mk-package:
	cd build && zip -r package.zip * -x package.zip && ls *.zip
	echo "Done packaging."

.PHONY: test clean

clean:
	-rm -rf build
	-mkdir build

test:	build
	npm test
