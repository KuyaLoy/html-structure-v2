# my-frontend-structure

bootstrap ready


type on terminal

to install independecies
- npm install

run gulp to minify js
- gulp

im using live server plugins in vs code for my browsersync

im using live sass compiler by gleen marks with json setting bellow

"liveSassCompile.settings.formats": [
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "/assets/css"
    }
],
"liveSassCompile.settings.excludeList": [
    "/**/node_modules/**",
    "/.vscode/**"
],
"liveSassCompile.settings.generateMap": false,
//autoprefix, will auto add perfix like -webkit- -moz-..
"liveSassCompile.settings.autoprefix": [
    "> 1%",
    "last 2 versions"
],


 NOTE:
 IF YOU RUN GULP PLEASE ADD YOU JS INSIDE THE "assets/all-js/" create any file and it will added automatically in the main js file as minified
 
 also if you don't know how to use sass please add you own css in he css folder and add the links below the sass link
