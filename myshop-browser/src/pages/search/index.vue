<template>
    <div class="search">
      <div class="head">
          <div>
              <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"/>
              <input type="text" confirm-type="search" focus="true" v-model="words" @focus="inputFocus">
              <img @click="clearInput" class="del" src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png" />
          </div>
          <div @click="cancel">取消</div>
      </div>
      <div class="searchtips" v-if="words">
          <div>
               牙刷
          </div>
          <div class="nogoods">
              数据库暂无此类商品
          </div>
      </div>
      <div class="history">
          <div class="t">
              <div>历史记录</div>
              <div @click="clearHistory"></div>
              
          </div>
          <div class="cont">
                  <div>日式</div>
          </div>
      </div>
      <div class="history hotsearch">
          <div class="t">
              <div>热门搜索</div> 
          </div>
          <div class="cont">
                <div class="active">日式</div>
                <div>韩式</div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            words:'',
        }
    },
    methods:{
        clearInput(){
            this.words = '';
        },
        cancel(){},
        clearHistory() {},

    }
}
</script>
<style lang="less" scoped>
@import url('./style');
</style>