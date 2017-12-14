var UglifyJS = require("uglify-js");
var fs = require('fs');

var code = fs.readFileSync("/Users/wxnacy/WebstormProjects/wxnacy-nodejs/tests/example.js", "utf8");

var res = UglifyJS.minify(code);
console.log(res.code);
