<template>
  <div id="app">
    <div class="logo">
     我是logo
    </div>
    <div class="nav">
      <div class="menuIcon" :class="isShowSup?'fadeRight':'fadeLeft'" @click="showSup">
      </div>
      <transition name="slide-fade">
        <div class="supmenu" v-show="isShowSup" >
          <div class="supmenuItem" :class="index === activeIndex ? 'active' : ''" v-for="(item,index) in nav" :key="item.id" @click="selectSupMenu(index)">
              <div class="suppermenuName">
                {{item.suppermenuName}}
              </div>
            </div>
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="submenu" v-show="isShowSub">
          <div class="submenuItem" v-for="item in submenu" :key="item.id">
            <div class="projectType">{{item.typeName}}</div>
            <div v-for="it in item.projectLit" :key="it.id" @click="gotoProjectDetail(it)">
                {{it.name}}
            </div>
          </div>
        </div>
      </transition>
    </div>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isShowSub: false,
      isShowSup: false,
      activeIndex: 0,
      submenu: [],
      nav: [
        {
          suppermenuName: '出版项目',
          id: '1',
          submenu: [
            {
              typeName: '出版项目类型1',
              projectLit: [
                {
                  id: '1',
                  name: '出版项目类型1_1'
                },
                {
                  id: '2',
                  name: '出版项目类型1_2'
                },
                {
                  id: '3',
                  name: '出版项目类型1_3'
                }
              ]
            },
             {
              typeName: '出版项目类型2',
              projectLit: [
                {
                  id: '1',
                  name: '出版项目类型2_1'
                },
                 {
                  id: '2',
                  name: '出版项目类型2_2'
                },
                 {
                  id: '3',
                  name: '出版项目类型2_3'
                }
              ]
            },
             {
              typeName: '出版项目类型3',
              projectLit: [
                 {
                  id: '1',
                  name: '出版项目类型3_1'
                },
                 {
                  id: '2',
                  name: '出版项目类型3_2'
                },
                 {
                  id: '3',
                  name: '出版项目类型3_3'
                }
              ]
            }
          ]
        },
        {
          suppermenuName: '设计项目',
          id: '2',
          submenu: [
            {
              typeName: '设计项目类型1',
              projectLit: [
                {
                  id: '1',
                  name: '设计项目类型1_1'
                },
                {
                  id: '2',
                  name: '设计项目类型1_2'
                },
                {
                  id: '3',
                  name: '设计项目类型1_3'
                }
              ]
            },
             {
              typeName: '设计项目类型2',
              projectLit: [
                {
                  id: '1',
                  name: '设计项目类型2_1'
                },
                 {
                  id: '2',
                  name: '设计项目类型2_2'
                },
                 {
                  id: '3',
                  name: '设计项目类型2_3'
                }
              ]
            },
             {
              typeName: '设计项目类型3',
              projectLit: [
                 {
                  id: '1',
                  name: '设计项目类型3_1'
                },
                 {
                  id: '2',
                  name: '设计项目类型3_2'
                },
                 {
                  id: '3',
                  name: '设计项目类型3_3'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    showSup() {
      this.isShowSup = !this.isShowSup
      this.isShowSub = false
    },
    selectSupMenu(index) {
      this.activeIndex = index;
      this.submenu = this.nav[index].submenu
      this.isShowSub = true
      this.isShowSup = false
    },
    gotoProjectDetail(item) {
      this.isShowSup = false
      this.isShowSub = false
      this.$router.push({
        path: '/projectDetail',
        query: {
          id: item.id || '',
          name: item.name || ''
        }
      })
    }
  }
}

</script>

<style lang="less">
#app{
  position: relative;
  .logo{
    width: 200px;
    height: 30px;
    background: sandybrown;
    position: fixed;
    top: 10px;
    left: 10px;
    color: white;
    line-height: 30px;
    text-align: center;
    z-index: 10;
  }
  .nav{
    z-index: 2;
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 30px;
    display: flex;
    .menuIcon{
      height: 30px;
      width: 30px;
      background: sandybrown;
      cursor: pointer;
    }
    .fadeRight{
       transform: translateX(15px);
       transition: transform 2s;
    }
    .fadeLeft{
       transform: translateX(-15px);
       transition: transform 2s;
    }
    .supmenu{
      margin-left: 20px;
      line-height: 30px;
      color: #666;
      display: flex;
      cursor: pointer;
      .supmenuItem{
        margin-left: 15px;
      }
    }
    .active{
      color: #999;
    }
    .slide-fade-enter-active {
      transition: all .8s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
      // transform: translateX(10px);
      opacity: 0;
    }
    .submenu{
      position: fixed;
      top: 0;
      bottom: 40px;
      left: 0;
      right: 0;
      display: flex;
      background: white;
      padding: 100px 50px;
      .submenuItem{
        margin-right: 30px;
        .projectType{
          line-height: 30px;
        }
      }
      .submenuItem:last-child{
        margin-right: 0;
      }
    }
  }
}
</style>