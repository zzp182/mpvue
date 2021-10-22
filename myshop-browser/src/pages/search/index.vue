<template>
    <div class="search">
      <div class="head">
          <div>
              <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"/>
              <input type="text" confirm-type="search" focus="true">
              <img @click="clearInput" class="del" src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" />
          </div>
          <div @click="cancel">取消</div>
      </div>
      <div class="searchtips">
          <div>
               牙刷
          </div>
          <div class="nogoods">
              数据库暂无此类商品
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
<style lang="less" scoped>
@import url('./style');
</style>