const router = require('koa-router')({
    prefix:'/zzp'
})

const controllers = require('../controllers')

router.get('/index/index', controllers.home.index)

module.exports = router