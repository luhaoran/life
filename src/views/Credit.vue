<template>
  <div id="credit" class="mx-3 py-3">
    <div class="info d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <van-image :src="require('./../assets/banner2.jpeg')" round width="60" height="60" />
        <div class="text ml-2 font-size-14">
          <p class="nickName my-0">这是个昵称</p>
          <p class="stars mb-0 mt-1 d-flex align-items-center">
            <van-image :src="require('./../assets/icon/star.png')" round width="25" height="25" />
            <span class="ml-1 font-size-16">* 25</span>
          </p>
        </div>
      </div>
      <van-button size="small" color="linear-gradient(to right, #f8a32b, #f7573b)">学分兑换</van-button>
    </div>
    <div class="mt-3 border p-3">
      <h5 class="my-0">基本任务</h5>
      <div class="credit-item my-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <div class="icon">
            <i class="iconfont icon-ziliao-miaobian"></i>
          </div>
          <div class="text ml-3">
            <p class="my-0 font-size-14">完善资料</p>
            <p class="my-0 font-size-12 text-gray">+500学分</p>
          </div>
        </div>
        <van-button
          color="linear-gradient(to right, #f8a32b, #f7573b)"
          size="mini"
          class="px-3"
          round
        >去完成</van-button>
      </div>
      <h5 class="mt-4">日常任务</h5>
      <div class="credit-item my-3 d-flex align-items-center justify-content-between" v-for="item in dayMissions" :key="JSON.stringify(item)">
        <div class="d-flex align-items-center">
          <div class="icon">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <div class="text ml-3">
            <p class="my-0 font-size-14">{{item.name}}</p>
            <p class="my-0 font-size-12 text-gray">+{{item.credit}}学分</p>
          </div>
        </div>
        <van-button
          color="linear-gradient(to right, #f8a32b, #f7573b)"
          size="mini"
          class="px-3"
          round
          v-if="!item.has"
        >去完成</van-button>
        <van-button
          color="linear-gradient(to right, #dedede, #999999)"
          size="mini"
          class="px-3"
          round
          v-else
        >已领取</van-button>
      </div>
    </div>
    <div class="mt-3 border p-3">
        <div class="credit-item my-3 d-flex align-items-center justify-content-between" v-for="item in colunmMissions" :key="JSON.stringify(item)">
        <div class="d-flex align-items-center">
          <div class="icon">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <div class="text ml-3">
            <p class="my-0 font-size-14">{{item.name}}</p>
            <p class="my-0 font-size-12 text-gray">+{{item.credit}}学分</p>
          </div>
        </div>
        <van-button
          color="linear-gradient(to right, #f8a32b, #f7573b)"
          size="mini"
          class="px-3"
          round
          v-if="!item.has"
        >去完成</van-button>
        <van-button
          color="linear-gradient(to right, #f8a32b, #ffffff)"
          size="mini"
          class="px-3"
          round
          v-else
        >已领取</van-button>
      </div>
    </div>
    <div class="mt-4 mx-5  d-flex justify-content-center">
        <van-button class="w-75" block color="linear-gradient(to right, #f8a32b, #f7573b)" @click="$router.go(-1)">返回</van-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Credit",
  data() {
    return {
      dayMissions: [
        {
          name: "介绍伙伴",
          credit: 50,
          icon: "icon-duoren",
          url: "",
          other: "( 0 / 10)",
          has:false
        },
        {
          name: "分享栏目",
          credit: 10,
          icon: "icon-fenxiang1",
          url: "",
          has:false
        },
        {
          name: "提交心得",
          credit: 10,
          icon: "icon-dengji",
          url: "",
          has:false
        },
        {
          name: "预定产品",
          credit: 200,
          icon: "icon-gouwuche",
          url: "",
          has:false
        },
        {
          name: "分享产品",
          credit: 10,
          icon: "icon-icon-test",
          url: "",
          has:false
        },
        {
          name: "签到",
          credit: 5,
          icon: "icon-qiandao",
          url: "",
          has:true
        }
      ],
      colunmMissions:[{
          name: "收听正清医话",
          credit: 5,
          icon: "icon-yisheng",
          url: ""
        },{
          name: "收听好学乐活",
          credit: 5,
          icon: "icon-xiaolian",
          url: ""
        },{
          name: "收看健康厨房",
          credit: 5,
          icon: "icon-chufang",
          url: "",
          has:false
        },{
          name: "收看为老发声",
          credit: 5,
          icon: "icon-laoniankangfu",
          url: "",
          has:false
        }]
    };
  }
};
</script>

<style scoped lang="less">
.credit-item {
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(to right, #f8a32b, #f7573b);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 6px #f7573b;
    .iconfont {
      font-size: 22px !important;
      color: #fff;
    }
  }
}
.border {
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>