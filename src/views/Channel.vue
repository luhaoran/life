<template>
  <div id="channel">
    <div class="prism-player" id="player-con"></div>
    <div class="back" @click="$router.go(-1)">
      <i class="iconfont icon-fanhui text-yellow"></i>
    </div>
    <div class="banner">
      <van-image :src="data.image" width="100%"></van-image>
    </div>
    <div class="text m-2">
      <h3 class="title my-0">{{data.title}}</h3>
      <p class="number mb-0 mt-1 font-size-14">已更新{{data.number}}个直播</p>
    </div>
    <div class="divider"></div>
    <div class="info m-2">
      <h4 class="my-0">栏目简介</h4>
      <div class="content mt-2 font-size-14">{{data.info}}</div>
    </div>
    <div class="divider"></div>
    <div class="list m-2">
      <h4 class="my-0">话题列表</h4>
    </div>
    <van-list
      v-model="loadingTopic"
      :finished="finishedTopic"
      finished-text="没有更多了"
      @load="getTopic"
      class="mt-3 mx-2"
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
          <span class="d-block mt-1 font-size-12">{{item.type}} | {{item.time}}</span>
          <i class="d-block mt-1 font-size-12">{{item.views}}万人次观看</i>
        </div>
        <div class="share">
          <i class="iconfont icon-moreinfo-copy font-size-14 mr-1"></i>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import Aliplayer from "Aliplayer";
export default {
  name: "Channel",
  data() {
    return {
      id: 0,
      data: {
        image: require("./../assets/banner2.jpeg"),
        title: "健康厨房",
        number: 123,
        info:
          "这是一段健康厨房的简介，这是一段健康厨房的简介，这是一段健康厨房的简介，这是一段健康厨房的简介，这是一段健康厨房的简介，这是一段健康厨房的简介"
      },
      topics: [
        {
          image: require("./../assets/topic.jpg"),
          title: "健身厨房第123期：滋阴补阳润肺止咳--苦瓜酿肉",
          type: "直播",
          time: "2020-07-03 08:30:00",
          id: 123,
          views: 14.84
        },
        {
          image: require("./../assets/topic.jpg"),
          title: "正清医话第706期：特殊部位的痘千万不能乱动",
          type: "语音",
          time: "2020-07-04 08:30:00",
          id: 456,
          views: 13.84
        }
      ],
      loadingTopic: false,
      finishedTopic: true
    };
  },
  mounted() {
    const { id } = this.$route.query;
    this.id = parseInt(id);

    //按照16:9计算屏幕宽高度
    const winWidh = document.body.clientWidth;
    const winHeight = (winWidh * 9) / 16 + "px";

    //直播视频的配置
    new Aliplayer(
      {
        id: "player-con",
        source:
          "https://live.pinge.pro/test1/test2.m3u8?auth_key=1594187149-0-0-8ede6e7ecdd2fc86015509743fd7be9a",
        width: "100%",
        height: winHeight,
        autoplay: true,
        isLive: true,
        rePlay: false,
        playsinline: true,
        preload: true,
        controlBarVisibility: "click",
        useH5Prism: true,
        skinLayout: [
          {
            name: "bigPlayButton",
            align: "blabs",
            x: 30,
            y: 80
          },
          {
            name: "H5Loading",
            align: "cc"
          },
          {
            name: "errorDisplay",
            align: "tlabs",
            x: 0,
            y: 0
          },
          {
            name: "infoDisplay"
          },
          {
            name: "tooltip",
            align: "blabs",
            x: 0,
            y: 56
          },
          {
            name: "thumbnail"
          },
          {
            name: "controlBar",
            align: "blabs",
            x: 0,
            y: 0,
            children: [
              {
                name: "playButton",
                align: "tl",
                x: 15,
                y: 12
              },
              {
                name: "timeDisplay",
                align: "tl",
                x: 10,
                y: 7
              },
              {
                name: "fullScreenButton",
                align: "tr",
                x: 10,
                y: 12
              },
              {
                name: "volume",
                align: "tr",
                x: 5,
                y: 10
              }
            ]
          }
        ]
      },
      function(player) {
        console.log(player);
      }
    );
  },
  methods: {
    getTopic() {}
  },
  computed: {}
};
</script>

<style scoped lang="less">
.text {
  .number {
    color: #aaa;
  }
}
.content {
  color: #666;
}

.topic-item {
  .img {
    width: 36%;
    overflow: hidden;
  }
  .text {
    width: 50%;
    text-align: left;
    .title {
      font-weight: bold;
      font-size: 14px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    span {
      color: #888;
    }
    i {
      color: #777;
      font-style: normal;
    }
  }
  .share {
    .iconfont {
      font-size: 22px !important;
    }
  }
}
</style>