const configs = require('./config')

var knex = require('knex')({
    client:'mysql',
    connection: {
        host: configs.mysql.host,
        port: configs.mysql.port,
        user: configs.mysql.user,
        password: configs.mysql.pass,
        database: configs.mysql.db,
    }
})
//将基础配置和SDK.configs合并 导出初始化完成的SDK
module.exports = {mysql : knex}