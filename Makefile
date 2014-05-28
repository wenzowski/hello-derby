# This Makefile is provided as a convenience.
# GNU Make is not a hard requirement.

start install:
	@npm $@

link: public/css/bootstrap.min.css

start: install link

clean:
	@rm -r node_modules public

.PHONY: start

public/css:
	@mkdir -p public/css

public/css/bootstrap.min.css: public/css
	@cp node_modules/bootstrap/dist/css/bootstrap.min.css public/css/bootstrap.min.css
