
build:	src/* src/**/* images/* package.sh
	./package.sh

.PHONY: test

test:	build
	-cd test && npm test
