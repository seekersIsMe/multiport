<template>
  <div class="aboutUS-wrap">
    <div class="left">
      <div class="img-text">
        <el-image :src="currentImgUrl">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div class="aboutus-text" v-show="currentIndex === 0">
          <div class="title">
            {{ detail.name }}
          </div>
          {{ detail.describe }}
        </div>
        <!-- TODO -->
        <div class="members-wrap" v-show="currentIndex === 1">
          <div class="introduce-text">
            {{ personText }}
          </div>
          <div class="members-text">
            <div class="members-item" v-for="(item, index) in members" :key="index">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="person-item" v-for="(it, i) in item.list" :key="i" @click="selectPerson(it)">
                {{ it.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="aboutus-img-wrap">
        <el-image v-for="(url, index) in detail.imgurl.slice(0, 3)" :key="url" :src="url" @click="selectImg(url, index)">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="aboutus-info-wrap">
        <div class="address">
          {{ detail.address }}
        </div>
        <div class="zipCode">
          {{ detail.zipCode }}
        </div>
        <div class="tel">
          {{ detail.tel }}
        </div>
        <div class="phoneNum">
          {{ detail.phoneNum }}
        </div>
        <div class="email">
          {{ detail.email }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {
        name: '源计划', // 公司名称
        describe: '源计划简介', // 公司的描述
        address: '广州荔湾区', // 地址
        zipCode: '231323', // 邮编，
        tel: '15232232', // 电话
        phoneNum: '15232232332', // 手机号码
        email: '15232232@qq.com', // 邮箱
        imgurl: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        ]
      },
      members: [
        {
          title: '合伙人',
          list: [
            {
              name: '中国合伙人1',
              introduce: '这是一个牛逼的合伙人'
            },
            {
              name: '中国合伙人2',
              introduce: '这是一个牛逼的合伙人'
            }
          ]
        },
        {
          title: '高级设计师',
          list: [
            {
              name: '高级设计师1',
              introduce: '这是一个牛逼的高级设计师'
            },
            {
              name: '高级设计师2',
              introduce: '这是一个牛逼的高级设计师'
            }
          ]
        }
      ],
      currentImgUrl: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      currentIndex: 0,
      personText: ''
    }
  },
  methods: {
    selectImg(url, index) {
      this.currentImgUrl = url
      this.currentIndex = index
    },
    selectPerson(item) {
      this.personText = item.introduce
    }
  }
}
</script>

<style lang="less" scoped>
.aboutUS-wrap {
  padding: 100px 40px 40px 0;
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  .el-image {
    width: 100%;
  }
  .left {
    flex: 0 0 80%;
    .img-text {
      position: relative;
      font-size: 0;
      .aboutus-text {
        position: absolute;
        bottom: 20px;
        padding: 0 20px;
        font-size: 14px;
        .title {
          font-size: 16px;
        }
      }
      .members-wrap {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        .introduce-text {
          font-size: 14px;
        }
        .members-text {
          flex: 0 0 200px;
          .members-item {
            margin-bottom: 10px;
            .title {
              color: #333;
              font-size: 14px;
            }
            .person-item {
              color: #666;
              font-size: 12px;
            }
          }
        }
        .introduce-text {
          flex: 1;
        }
      }
    }
  }
  .right {
    flex: 1;
    margin-left: 20px;
  }
}
</style>
