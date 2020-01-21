
build:	src/* src/**/* images/* package.sh clean
	./package.sh

.PHONY: test clean

clean:
	-rm -rf build

test:	build
	-cd test && npm test
