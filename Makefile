
build:
	origami-build-tools build --js=./src/js/main.js --sass=./src/sass/main.scss --buildFolder=./public;

watch: build
	origami-build-tools build --watch


run:
	nodemon ./server/app.js

deploy:
	git push heroku master

