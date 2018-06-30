# JQuery plugin development template 
It's simple JQuery plugin development template using [Gulp](https://gulpjs.com/)  toolkit along with [gulp-webserver](https://github.com/schickling/gulp-webserver) for development server. 
It also uses [Livereload](http://livereload.com/) for ... online livereload during development. 

I also added Visual Studio Code configuration:
* **task.json** - containing configuration for lauching *gulp* tasks from VS Code IDE
* **launch.json** - containing Chrome debug configuration

Those files can be found under **.vscode** folder in root directory
## Use
You'll need [NPM](https://www.npmjs.com/) to install all dependencies listed in **package.json**.
Just run:

```
$ npm install
```

Which will install the necessary development dependencies.

## Starting development web server
Commands below will start development server at ***localhost:8000*** looking for ***index.html*** file.
File ***test.js*** contains template for JQuery plugin.

### from console
To start development server run gulp task:
```
$ gulp webserver
```

### from VS Code IDE
//TODO Add proper image

## Building
Run 
```
$ npm run build
```
or 
```
$ gulp compress
```
to build minified, unglified file.

## Contributing

Feel free to post any pull request.

## Licence 

```
MIT. © Rafal Woloszyn
```
Please see ***LICENSE*** file in ***master*** branch.
