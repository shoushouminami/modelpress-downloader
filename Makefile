
build:	src/*
	./package.sh

.PHONY: test

test:	build
	-cd test && npm test
