<template>
  <div id="app">
    <div class="logo">我是logo</div>
    <div class="lang">
      <el-dropdown placement="top" trigger="click" @command="selectLang">
        <span class="el-dropdown-link"> {{ langText }}<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="ch">中</el-dropdown-item>
          <el-dropdown-item command="en">en</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="aboutUs-icon" @click="gotoAboutus">
      <i class="el-icon-help"></i>
    </div>
    <router-view />
  </div>
</template>

<script>
const LANG = {
  ch: '中',
  en: 'en'
}
export default {
  name: 'App',
  data() {
    return {
      langText: '中'
    }
  },
  methods: {
    selectLang(e) {
      console.log(e)
      this.langText = LANG[e]
      this.$bus.$emit('changeLang', e)
      localStorage.setItem('langType', e)
      this.$i18n.locale = e
    },
    gotoAboutus() {
      if (this.$route.path !== '/aboutUs') {
        this.$router.push({
          path: '/aboutUs'
        })
      }
    }
  }
}
</script>

<style lang="less">
#app {
  .logo {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
  }
  .lang {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 9;
  }
  .aboutUs-icon {
    position: fixed;
    left: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    z-index: 9;
  }
}
</style>
