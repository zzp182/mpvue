
const Koa = require('koa')
const config = require('./config')
const app = new Koa()

const bodyParser = require('koa-bodyparser');
// 解析请求体
app.use(bodyParser());

const router = require('./routes')
app.use(router.routes());
// 设置服务器端口
app.listen(config.port,()=>{
    console.log(`server is started at port  ${config.port}`)
})
 