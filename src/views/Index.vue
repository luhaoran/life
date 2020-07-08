<template>
  <div class="index mx-2">
    <div class="d-flex py-2 justify-content-between">
      <div class="d-flex align-items-center">
        <i class="iconfont icon-dingwei text-yellow mr-1 font-size-18"></i>
        <span class="font-size-14">蚌埠市怀远县</span>
      </div>
      <div class="d-flex align-items-center" @click="$router.push('/notification')">
        <i class="iconfont icon-tongzhi text-yellow mr-1 font-size-18"></i>
        <span class="font-size-14">通知</span>
      </div>
    </div>
    <div class="banner rounded" style="overflow:hidden">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :height="200">
        <van-swipe-item v-for="item in banner" :key="JSON.stringify(item)">
          <img :src="item.img" class="w-100" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav d-flex justify-content-between mt-2">
      <div class="nav-item" v-for="item in nav" :key="JSON.stringify(item)" @click="$router.push(item.url)">
        <img :src="item.icon" class="w-100" alt />
        <span class="dot" v-if="item.redDot"></span>
      </div>
    </div>
    <van-tabs v-model="activeIndex" animated :line-width="110">
      <van-tab title="话题" :title-style="{fontSize:'16px'}">
        <div class="mt-3" v-if="showSkeleton">
          <van-skeleton title :row="3" />
        </div>
        <van-list
          v-model="loadingTopic"
          :finished="finishedTopic"
          finished-text="没有更多了"
          @load="getTopic"
          class="mt-3"
          v-else
        >
          <div
            class="topic-item my-2 d-flex align-items-center justify-content-between"
            v-for="item in topics"
            :key="JSON.stringify(item)"
          >
            <div class="img rounded">
              <img :src="item.image" class="w-100" alt />
            </div>
            <div class="text">
              <p class="title my-0">{{item.title}}</p>
              <span class="d-block mt-2 font-size-12">{{item.type}} | {{item.time}}</span>
            </div>
            <div
              class="share d-flex align-items-center py-1 px-2"
              @click="$router.push(`/share?id=${item.id}`)"
            >
              <i class="iconfont icon-fenxiang font-size-16 mr-1"></i>
              <span class="font-size-12">分享</span>
            </div>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="频道" :title-style="{fontSize:'16px'}">
        <div
          class="channel-item d-flex align-items-center"
          v-for="item in channels"
          :key="JSON.stringify(item)"
          @click="$router.push(`/channel?id=${item.id}`)"
        >
          <div class="img rounded mr-3">
            <img :src="item.image" class="w-100" alt />
          </div>
          <div class="text">
            <h3 class="title my-0 font-size-16">{{item.title}}</h3>
            <p class="number mt-2 font-size-12">已更新至{{item.number}}期</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      banner: [
        {
          img: require("./../assets/banner.jpeg")
        },
        {
          img: require("./../assets/banner2.jpeg")
        }
      ],
      nav: [
        {
          icon: require("./../assets/icon/index-icon-1.png"),
          redDot: 0,
          url:'/write'
        },
        {
          icon: require("./../assets/icon/index-icon-2.png"),
          redDot: 1,
          url:'/credit'
        },
        {
          icon: require("./../assets/icon/index-icon-3.png"),
          redDot: 2,
          url:'/signin'
        }
      ],
      activeIndex: 0,
      topics: [],
      loadingTopic: false,
      finishedTopic: true,
      channels: [
        {
          image: require("./../assets/topic.jpg"),
          title: "益寿堂·健康厨房",
          number: 123,
          id:1
        },
        {
          image: require("./../assets/topic.jpg"),
          title: "益寿堂·正清医话",
          number: 456,
          id:2
        }
      ],
      showSkeleton: true
    };
  },
  mounted() {
    const topics = [
      {
        image: require("./../assets/topic.jpg"),
        title: "健身厨房第123期：滋阴补阳润肺止咳--苦瓜酿肉",
        type: "直播",
        time: "2020-07-03 08:30:00",
        id: 123
      },
      {
        image: require("./../assets/topic.jpg"),
        title: "正清医话第706期：特殊部位的痘千万不能乱动",
        type: "语音",
        time: "2020-07-04 08:30:00",
        id: 456
      }
    ];
    setTimeout(() => {
      this.topics = topics;
      this.showSkeleton = false;
    }, 1000);
  },
  methods: {
    getTopic() {}
  }
};
</script>

<style scoped lang="less">
.nav-item {
  width: 32.6%;
  position: relative;
  .dot {
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #da2525;
    right: -2px;
    top: -3px;
  }
}

.tabClass {
  font-size: 18px;
}

.topic-item {
  .img {
    width: 32%;
    overflow: hidden;
  }
  .text {
    width: 45%;
    text-align: left;
    .title {
      font-weight: bold;
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    span {
      color: #888;
      font-size: 12px;
    }
  }
  .share {
    display: inline-block;
    background: #f8cd4a;
    color: #fff;
    border-radius: 30px;
  }
}

.channel-item {
  .img {
    width: 35%;
    overflow: hidden;
  }
  .text {
    text-align: left;
    .title {
      font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .number {
      color: #888;
    }
  }
}
</style>