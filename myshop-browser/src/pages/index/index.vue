<template>
  <div class="index">
    <!-- 头部搜索 -->
    <div class="search">
       <div @click="toMappage">{{cityName}}</div>
       <div>
         <input type="text" placeholder="搜索商品" />
         <span class="icon"></span>
       </div>
    </div>
    <!-- 轮播图区域 -->
    <div class="swiper">
       <swiper class="swiper_container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
          <block v-for="(item , index) in banner" :key="index">
            <swiper-item class="swiper-item">
               <image class="slide-image" :src="item.image_url"  />
            </swiper-item>
          </block>
       </swiper>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js'
import { mapState , mapMutations} from 'vuex' 
import{ get } from '../../utils'
  export default {
    data(){
      return {
         banner: [],
      }
    },
    computed: {
      ...mapState(['cityName'])
    },
    methods: {
      ...mapMutations(['update']),
      toMappage(){
        let _this = this
        wx.getSetting({
          success: (res) => {
            console.log(res)
             if(!res.authSetting['scope.userLocation']){
                wx.openSetting({
                  success: res => {
                    _this.getCityNmae()
                  } 
                })
             }else{
               wx.navigateTo({
                 url: '/pages/mappage/main',
               });
              //  _this.getCityNmae()
             } 
          },
          fail: (err) => {
            console.log(err)
          },
          complete:() => {}
        })
      },
      getCityNmae(){
        let _this = this
        var myAmapFun = new amapFile.AMapWX({key:'071ccea5550154f72ed8b323421ad462'});
        myAmapFun.getRegeo({
          success: function(data){
             console.log(data)
          },
          fail: function(info){
            // console.log(info)
            // _this.cityName = '北京'
            _this.update({cityName : '北京'})
          } 
        })
      },
      async getData(){
         const data = await get('/index/index')
         console.log(data)
      }
    }
  }
</script>
<style lang="less" scoped>
@import "./style.less";
</style>