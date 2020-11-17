<template>
  <div class="detail-wrap">
     <el-scrollbar :native="false" wrapStyle="" wrapClass="scrollbar-wrap"  viewStyle="" >
        <div class="imgWrap">
            <el-image v-for="url in detail.imgurl" :key="url" :src="url">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
        </div>
      </el-scrollbar>
      <!-- TODO -->
      <div class="fixed-title" @click="openDrawer">{{detail.name}}</div>
      <el-drawer
        :visible.sync="drawer"
        :with-header="false"
        size="300"
        >
        <span>{{detail.name}}</span>
        <i class="el-icon-close" @click="close"/>
      </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      detail: {
        id: '', // 项目id
        name: '出版项目1', // 项目名称
        describe: '这是一个牛逼的项目',
        imgurl: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
        videos: []
      },
      drawer: false
    }
  },
  created(){
    let id = this.$route.query.id || ''
    this.id = id
    this.getDetail()
  },
  methods: {
    getDetail() {

    },
    openDrawer() {
      this.drawer = true
    },
    close() {
      this.drawer = false
    }
  }
}
</script>

<style lang="less" scoped>
.detail-wrap{
  // height: 100vh;
  // overflow: hidden;
  /deep/ .el-scrollbar__thumb{
      background-color: red;
    }
  .el-scrollbar{
    height: 100vh;
    .scrollbar-wrap{
      overflow-x: hidden;
    }
  }
  
  .imgWrap{
    font-size: 0;
    /deep/ .el-image{
      width: 100%;
    }
  }
  .imgWrap img{
    width: 100vw;
  }
  .fixed-title{
      position: fixed;
      right: 100px;
      bottom: 100px;
    }
}


</style>