# This Makefile is provided as a convenience.
# GNU Make is not a hard requirement.

start install:
	@npm $@

start: install

clean:
	@rm -r node_modules

.PHONY: start
