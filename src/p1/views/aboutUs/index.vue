<template>
  <div class="aboutus-wrap">
      <el-image :src="detail.imgurl[0]">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
      </el-image>
      <div class="aboutus-info-wrap">
        <div class="name">
          {{detail.name}}
        </div>
        <div class="address">
          {{detail.address}}
        </div>
        <div class="zipCode">
          {{detail.zipCode}}
        </div>
        <div class="tel">
          {{detail.tel}}
        </div>
        <div class="email">
          {{detail.phoneNum}}
        </div>
         <div class="email">
          {{detail.phoneNum}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      detail: {
        name: "源计划", // 公司名称
        describe: "源计划简介", // 公司的描述
        address: "广州荔湾区", // 地址
        zipCode: "231323", // 邮编，
        tel: "15232232", // 电话
        phoneNum: "15232232332", // 手机号码
        email: "15232232@qq.com", // 邮箱
        imgurl: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
          ]
      }
    };
  },
}
</script>

<style lang="less" scoped>
.aboutus-wrap{
  .el-image{
    width: 100vw;
  }
  .aboutus-info-wrap{
    margin-top: 20 px;
  }
}
</style>