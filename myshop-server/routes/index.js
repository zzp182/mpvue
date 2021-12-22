const router = require('koa-router')({
    prefix:'/zzp'
})

const controllers = require('../controllers')

// 首页相关的接口
router.get('/index/index', controllers.home.index)

// 搜索相关的接口
router.get('/search/indexaction', controllers.search.index.indexAction)
router.post('/search/addhistoryaction', controllers.search.index.addHistoryAction)
router.post('/search/clearhistoryAction', controllers.search.index.clearHistoryAction) // 清除搜索
router.get('/search/helperaction', controllers.search.index.helperAction)

module.exports = router