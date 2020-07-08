<template>
  <div id="write" class="m-2">
    <van-field
      v-model="text"
      type="textarea"
      rows="5"
      placeholder="请输入想说的话"
      show-word-limit
      :maxlength="200"
      clearable
      autofocus
    />
    <van-field name="uploader">
      <template #input>
        <van-uploader
          v-model="fileList"
          multiple
          :after-read="afterRead"
          :max-count="3"
          :max-size="3 * 1024 * 1024"
        />
      </template>
    </van-field>
    <div class="mx-5 mt-4">
        <van-button color="#f8cd4a" size="small" block class="btn" >发布</van-button>
        <van-button plain color="#f8cd4a" size="small" block class="mt-3 btn" @click="$router.go(-1)">返回</van-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Write",
  data() {
    return {
      text: "",
      fileList: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg",
          //   status: "uploading",
          status: "failed",
          message: "上传中..."
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          status: "failed",
          message: "上传失败"
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          status: "done",
          message: "上传失败"
        }
      ]
    };
  },
  methods: {
    afterRead(file) {
      console.log(file);
      file.status = "uploading";
      file.message = "上传中...";

      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
      }, 1000);
    }
  }
};
</script>

<style scoped lang="less">
.btn{
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
}
</style>