<template>
  <div id="signin">
    <div class="week px-1 py-3 px-2">
      <div
        class="d-flex align-items-center justify-content-around py-2"
        style="border-bottom:1px solid rgba(239,239,239,.1)"
      >
        <span
          class="font-size-12 text-center text-white"
          v-for="item in weeks"
          :key="JSON.stringify(item)"
        >{{item.week}}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between py-2">
        <div class="text-center week-item" v-for="item in weeks" :key="JSON.stringify(item)">
          <i :class="item.active ? 'active':''">{{item.date}}</i>
          <span class="iconfont icon-gou font-size-12"></span>
        </div>
      </div>
    </div>
    <div style="background:#fac16e" class="px-3 pb-5">
      <div
        class="d-flex align-items-center justify-content-between px-3 py-3"
        style="background:#fff;border-radius:0 0 8px 8px"
      >
        <div class="d-flex align-items-center">
          <van-image width="50" :src="require('./../assets/icon/g13.png')" />
          <div class="text">
            <h4 class="number my-0 ml-2 font-size-14">
              你已累计签到
              <span class="font-size-16 text-yellow">1天</span>
            </h4>
          </div>
        </div>
        <van-button
          color="linear-gradient(to right, #f9bd3f, #f77151)"
          size="small"
          round
          class="px-4"
        >签到</van-button>
      </div>
      <div class="mt-4 mx-4">
        <van-button
          color="linear-gradient(to right, #f8a32b, #f7573b)"
          size="small"
          block
          style="padding:1.2rem 0"
        >签到排行</van-button>
      </div>
      <div class="rank mt-3">
        <div class="rank-item my-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <van-image width="30" :src="require('./../assets/icon/top1.png')" class="mr-2" />
            <van-image
              width="40"
              height="40"
              round
              :src="require('./../assets/banner2.jpeg')"
              style="border:2px solid #fff"
            />
            <div class="text ml-2">
              <p class="my-0 font-size-14 text-white">王文澜</p>
              <p class="my-0 font-size-12 text-white">签到</p>
            </div>
          </div>
          <div class="font-size-14 text-white">
            已签到
            <span class="font-size-16 mx-1 hasSigninDay">171</span>天
          </div>
        </div>
        <div class="rank-item my-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <van-image width="30" :src="require('./../assets/icon/top2.png')" class="mr-2" />
            <van-image
              width="40"
              height="40"
              round
              :src="require('./../assets/banner2.jpeg')"
              style="border:2px solid #fff"
            />
            <div class="text ml-2">
              <p class="my-0 font-size-14 text-white">王文澜</p>
              <p class="my-0 font-size-12 text-white">签到</p>
            </div>
          </div>
          <div class="font-size-14 text-white">
            已签到
            <span class="font-size-16 mx-1 hasSigninDay">171</span>天
          </div>
        </div>
        <div class="rank-item my-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <van-image width="30" :src="require('./../assets/icon/top3.png')" class="mr-2" />
            <van-image
              width="40"
              height="40"
              round
              :src="require('./../assets/banner2.jpeg')"
              style="border:2px solid #fff"
            />
            <div class="text ml-2">
              <p class="my-0 font-size-14 text-white">王文澜</p>
              <p class="my-0 font-size-12 text-white">签到</p>
            </div>
          </div>
          <div class="font-size-14 text-white">
            已签到
            <span class="font-size-16 mx-1 hasSigninDay">171</span>天
          </div>
        </div>
        <div class="rank-item my-3 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <van-image width="30" :src="require('./../assets/icon/top4.png')" class="mr-2" />
            <van-image
              width="40"
              height="40"
              round
              :src="require('./../assets/banner2.jpeg')"
              style="border:2px solid #fff"
            />
            <div class="text ml-2">
              <p class="my-0 font-size-14 text-white">王文澜</p>
              <p class="my-0 font-size-12 text-white">签到</p>
            </div>
          </div>
          <div class="font-size-14 text-white">
            已签到
            <span class="font-size-16 mx-1 hasSigninDay">171</span>天
          </div>
        </div>
      </div>
      <div class="mx-5 mt-5">
        <van-button
          color="linear-gradient(to right, #f8a32b, #f7573b)"
          size="small"
          block
          style="padding:1.2rem 0"
          @click="$router.go(-1)"
        >返回</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      weeks: []
    };
  },
  mounted() {
    this.calcWeek();
  },
  methods: {
    calcWeek() {
      const now = new Date();
      const date = now.getDate();
      const day = now.getDay();
      const weekName = ["日", "一", "二", "三", "四", "五", "六"];
      let weeks = [];
      for (let i = 0; i < 7; i++) {
        let obj = {};
        obj.date = date + i - day;
        obj.day = i;
        obj.week = weekName[i];
        obj.active = day == i ? true : false;
        weeks.push(obj);
      }
      this.weeks = weeks;
    }
  }
};
</script>

<style scoped lang="less">
.signin {
  .text {
    .number {
    }
  }
}
.week {
  background: linear-gradient(to bottom, #f8a32b, #f7573b);
  box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 10;
  .week-item {
    width: 14%;
    color: #fff;
    position: relative;
    .iconfont {
      position: absolute;
      color: #f8cd4a;
      bottom: -2px;
      right: 15px;
    }
  }
  i {
    font-style: normal;
    font-size: 15px;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  i.active {
    background: rgba(255, 255, 255, 0.2);
  }
}
.hasSigninDay {
  color: #f7573b;
}
</style>