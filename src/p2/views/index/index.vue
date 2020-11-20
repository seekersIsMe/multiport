<template>
  <div class="index-wrap">
    <scroll :data="imgList" :listenScroll="true" :probeType="3" class="listView" ref="listView" @scroll="onListViewMove">
      <div class="imgWrap">
          <el-image v-for="url in imgList" :key="url" :src="url">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
      </div>
      </scroll>
  </div>
</template>

<script>
import scroll from '@/components/scroll'
export default {
  data() {
    return {
      imgList: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    }
  },
  components: {
    scroll
  },
   mounted() { 
    },
  methods: {
    onListViewMove (e) {
      this.imgList.push('https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'+ '?t=' + new Date().getTime())
    }
  }
}
</script>

<style scoped lang="less">
.index-wrap{
  height: 100vh;
  .listView{
    height: 100vh;
    overflow: hidden;
  }
}
.el-image{
  width: 100%;
  /* display: block; */
}
.imgWrap{
  font-size: 0;
}
.imgWrap img{
  width: 100vw;
  /* display: block; */
}
</style>