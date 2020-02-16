build: clean cp-resources webpack mk-package

webpack: src/**/* src/*
	npx webpack --mode=development

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
