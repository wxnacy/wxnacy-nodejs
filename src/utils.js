var uglifyjs = require('uglify-js');

var res = uglifyjs.minify('function add(first, second) { return first + second;  }');
console.log(res);

var code = {
        "file1.js": "function add(first, second) { return first + second;  }",
        "file2.js": "console.log(add(1 + 2, 3 + 4));"

};
res = uglifyjs.minify(code);
console.log(res);
