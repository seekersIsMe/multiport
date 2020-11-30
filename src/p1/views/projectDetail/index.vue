<template>
  <div class="detail-wrap">
    <el-scrollbar :native="false" wrapStyle="" wrapClass="scrollbar-wrap" viewClass="scrollbar-view">
      <div class="imgWrap">
        <el-image v-for="url in detail.imgurl" :key="url" :src="url" :style="drawer ? imgWidht : ''">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
    </el-scrollbar>
    <div class="fixed-title" ref="fixed-title" @click="openDrawer">{{ detail.name }}</div>
    <div class="drawer" ref="drawer">
      <div class="drawer-title">
        <!-- <span>{{detail.name}}</span> -->
        <i class="el-icon-close" @click="close" />
      </div>
      <el-scrollbar :native="false" wrapStyle="" viewStyle="" style="height: 100vh">
        <div class="abc"></div>
        <div class="abc"></div>
        <div class="abc"></div>
        <div class="abc"></div>
        <div class="abc"></div>
        <div class="abc"></div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgWidht: {
        width: '70vw'
      },
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
  created() {
    this.init()
    this.$bus.$on('close', (res) => {
      if (this.drawer) {
        this.close()
      }
    })
  },
  methods: {
    init() {
      let id = this.$route.query.id || ''
      this.id = id
      this.drawer = false
      this.getDetail()
    },
    getDetail() {},
    openDrawer() {
      this.drawer = true
      this.$Velocity(
        this.$refs['fixed-title'],
        {
          bottom: function () {
            return document.body.clientHeight - 30
          },
          right: '30px'
        },
        {
          duration: 450
        }
      )
      this.$Velocity(
        this.$refs['drawer'],
        'fadeIn',
        {
          display: 'block'
        },
        {
          duration: 450
        }
      )
    },
    close() {
      this.drawer = false
      this.$Velocity(this.$refs['fixed-title'], 'reverse', {
        duration: 500
      })
      this.$Velocity(this.$refs['drawer'], 'reverse', {
        duration: 500
      })
    }
  },
  watch: {
    $route(to, from) {
      console.log(this)
      this.init()
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="less" scoped>
.detail-wrap {
  // height: 100vh;
  // overflow: hidden;
  /deep/ .el-scrollbar__thumb {
    background-color: red;
  }

  .el-scrollbar {
    height: 100vh;
    overflow-x: hidden;
    .scrollbar-wrap {
    }
  }
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  /deep/ .scrollbar-view {
    display: flex;
  }

  .imgWrap {
    flex: 1;
    font-size: 0;
    /deep/ .el-image {
      width: 100%;
    }
  }
  .imgWrap img {
    width: 100vw;
  }
  .fixed-title {
    position: fixed;
    right: 0;
    left: 70%;
    bottom: 100px;
    height: 30px;
    line-height: 30px;
    color: black;
    font-weight: bold;
    z-index: 3;
  }
  .drawer {
    height: 100vh;
    position: fixed;
    right: 0;
    left: 70%;
    top: 0;
    bottom: 0;
    display: none;
    // overflow-x:hidden;
    // overflow-y:auto;
  }
  .abc {
    height: 300px;
    width: 100%;
    margin-bottom: 10px;
    background: saddlebrown;
  }
  .drawer-title {
    text-align: right;
    i {
      display: inline;
    }
  }
}
</style>
