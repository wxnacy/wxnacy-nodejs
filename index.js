const Koa = require('koa');
const kbp = require('koa-bodyparser');
const cors = require('koa-cors');
const app = new Koa();
const router = require('koa-router')();
const Q = require('q');
const uglifyjs = require('uglify-js');

router.post('yasuo-js','/api/js/compress',(ctx,next) => {
    ctx.response.header['Content-Type']= 'application/json;charset=utf8';
    // ctx.response.body = ctx.request.query;
    let args = ctx.request.body;
    let content = args.content;
    let res = uglifyjs.minify(content);
    ctx.response.body = {
        "data": res.code,
        "status": 200
    }
});
router.get('test','/test',(ctx,next) => {
    ctx.response.header['Content-Type']= 'application/json;charset=utf8';
    // ctx.response.body = ctx.request.query;
    ctx.response.body = {
        query: ctx.request.query,
        bodys: ctx.request.body
    }
});
router.get('index','/api',(ctx,next) => {
    ctx.response.header['Content-Type']= 'application/json;charset=utf8';
    // ctx.response.body = ctx.request.query;
    ctx.response.body = {
        query: ctx.request.query,
        bodys: ctx.request.body
    }
});

app
    .use(kbp())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(5000,() => {
    console.log('listen to 0.0.0.0:5000');
});

