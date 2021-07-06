
const Koa = require('koa')
const config = require('./config')
const app = new Koa()

const router = require('./routes')

app.use(router.routes());
// 设置服务器端口
app.listen(config.port,()=>{
    console.log(`server is started at port  ${config.port}`)
})
 