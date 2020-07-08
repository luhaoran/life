<template>
  <div id="share">
    <div class="back" @click="$router.go(-1)"><i class="iconfont icon-fanhui text-yellow"></i></div>
    <div class="image">
      <img :src="data.image" class="w-100" alt />
    </div>
    <div class="text mt-2 mx-2">
      <p class="title my-0 font-size-18">{{data.title}}</p>
      <p class="type my-1 font-size-14">{{data.type}}</p>
      <p class="time my-1 font-size-12">{{data.time}}</p>
    </div>
    <div class="divider"></div>
    <div class="share-title mx-2">栏目简介</div>
    <div class="info m-2">{{data.info}}</div>
    <div class="text-center mt-5">
      <van-button color="#f8cd4a" class="px-5" round @click="showShare=true">立即分享</van-button>
    </div>
    <van-overlay :show="showShare" @click="showShare = false" z-index="999">
      <div class="share-wrapper" @click.stop>
        <img src="./../assets/icon/share-arrow.png" class="icon" alt="">
        <img src="./../assets/icon/share-img.png" class="img" alt="">
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "share",
  data() {
    return {
      data: {
        image: require("./../assets/banner2.jpeg"),
        title: "滋阴润肺 补血强身--苦瓜酿肉",
        type: "健康厨房·134期",
        time: "2020-07-03 08:30:00",
        info:
          "滋阴润肺 补血强身--苦瓜酿肉健康厨房·134期滋阴润肺 补血强身--苦瓜酿肉健康厨房·134期滋阴润肺 补血强身--苦瓜酿肉健康厨房·134期"
      },
      showShare:false
    };
  }
};
</script>

<style scoped lang="less">
#share {
  .text {
    .title {
      font-weight: bold;
    }
    .type {
      color: #999;
    }
    .time {
      color: #aaa;
    }
  }
}
.share-wrapper{
    position: relative;
    .icon{
        position: absolute;
        width: 80px;
        right: 10%;
        top:10px
    }
    .img{
        position: absolute;
        width: 80%;
        top: 100px;
        right: 10%;
    }
}
</style>