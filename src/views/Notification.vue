<template>
  <div id="notification">
    <div class="back" @click="$router.go(-1)">
      <i class="iconfont icon-fanhui text-yellow"></i>
    </div>
    <van-empty description="没有新的通知" />
    <div class="noti-list">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="这是一条最新的新闻" name="1">
            <div>
                <p class="my-0">这是一条最新的新闻</p>
                <p class="my-0">这是一条最新的新闻</p>
            </div>
        </van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  data(){
      return{
          activeNames: ['1'],
      }
  }
};
</script>

<style scoped lang="less">
.back {
  .iconfont {
    color: #aaa !important;
  }
}
</style>