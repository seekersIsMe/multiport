<template>
  <div id="app">
    <div class="logo">我是logo</div>
    <div class="nav">
      <div class="menuIcon" :class="isShowSup ? 'fadeLeft' : 'fadeRight'" @click="showSup"></div>
      <transition name="slide-fade">
        <div class="supmenu" v-show="isShowSup">
          <div
            class="supmenuItem"
            :class="index === activeIndex ? 'active' : ''"
            v-for="(item, index) in nav"
            :key="item.id"
            @click="selectSupMenu(index)"
          >
            <div class="suppermenuName">
              {{ isCH ? item.suppermenuName : item.e_suppermenuName }}
            </div>
          </div>
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="submenu" v-show="isShowSub">
          <scroll
            v-for="item in submenu"
            :key="item.id"
            :data="item.projectLit"
            :listenScroll="true"
            :probeType="3"
            class="submenuItem listView"
            ref="listView"
            @scroll="onListViewMove(item)"
          >
            <div>
              <div class="projectType">
                {{ isCH ? item.typeName : item.e_typeName }}
              </div>
              <div v-for="it in item.projectLit" :key="it.id" @click="gotoProjectDetail(it)">
                {{ it.name }}
              </div>
            </div>
          </scroll>
        </div>
      </transition>
    </div>
    <div class="search-lang-wrap">
      <div class="searchicon" @click="openSearchInput">
        <i class="el-icon-search"></i>
      </div>
      <div class="lang">
        <el-dropdown placement="top" trigger="click" @command="selectLang">
          <span class="el-dropdown-link"> {{ langText }}<i class="el-icon-arrow-down el-icon--right"></i> </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="ch">中</el-dropdown-item>
            <el-dropdown-item command="en">en</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="search-input-wrap" v-show="isShowSearch">
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          :placeholder="$t('placeholder')"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
    </transition>
    <router-view />
  </div>
</template>

<script>
import scroll from '@/components/scroll'
const LANG = {
  ch: '中',
  en: 'en'
}
export default {
  name: 'App',
  components: {
    scroll
  },
  data() {
    return {
      isShowSub: false,
      isShowSup: false,
      activeIndex: 0,
      submenu: [],
      nav: [
        {
          suppermenuName: '项目',
          e_suppermenuName: 'PROJECTS',
          id: '1',
          submenu: [
            {
              typeName: '建筑',
              e_typeName: 'ARCHITECTURE',
              projectLit: []
            },
            {
              typeName: '改造',
              e_typeName: 'RENOVATION',
              projectLit: []
            },
            {
              typeName: '城乡研究',
              e_typeName: 'Urban & rural research',
              projectLit: []
            }
          ]
        },
        {
          suppermenuName: '展览&演讲',
          e_suppermenuName: 'EXHIBITION&LECTURE',
          id: '2',
          submenu: [
            {
              typeName: '展览',
              e_typeName: 'exhibition',
              projectLit: []
            },
            {
              typeName: '演讲',
              e_typeName: 'lecture',
              projectLit: []
            }
          ]
        },
        {
          suppermenuName: '出版',
          e_suppermenuName: 'PUBLICATION',
          id: '3',
          submenu: [
            {
              typeName: '书籍出版',
              e_typeName: 'book',
              projectLit: []
            },
            {
              typeName: '国内刊物',
              e_typeName: 'domestic',
              projectLit: []
            },
            {
              typeName: '国际刊物',
              e_typeName: 'international',
              projectLit: []
            }
          ]
        },
        {
          suppermenuName: '关于我们',
          isAbout: true,
          id: '4'
        }
      ],
      restaurants: [],
      state: '',
      timeout: null,
      isShowSearch: false,
      langText: '中',
      isCH: true
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
  },
  methods: {
    onListViewMove() {
      // debugger
    },
    showSup() {
      this.isShowSup = !this.isShowSup
      this.isShowSub = false
    },
    selectSupMenu(index) {
      this.activeIndex = index
      let item = this.nav[index]
      if (!item.isAbout) {
        this.submenu = this.nav[index].submenu
        this.submenu = this.nav[index].submenu
        this.isShowSub = true
      } else {
        this.$router.push({
          path: '/aboutUs'
        })
      }
      this.isShowSup = false
      this.isShowSearch = false
    },
    gotoProjectDetail(item) {
      this.isShowSup = false
      this.isShowSub = false
      this.isShowSearch = false
      this.$router.replace({
        path: '/projectDetail',
        query: {
          id: item.id || '',
          name: item.name || ''
        }
      })
    },
    selectLang(e) {
      console.log(e)
      this.langText = LANG[e]
      this.isCH = e === 'ch'
      this.$bus.$emit('changeLang', e)
      localStorage.setItem('langType', e)
      this.$i18n.locale = e
    },
    openSearchInput() {
      this.isShowSearch = !this.isShowSearch
    },
    loadAll() {
      return [
        {value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号'},
        {
          value: 'Hot honey 首尔炸鸡（仙霞路）',
          address: '上海市长宁区淞虹路661号'
        },
        {
          value: '新旺角茶餐厅',
          address: '上海市普陀区真北路988号创邑金沙谷6号楼113'
        },
        {value: '泷千家(天山西路店)', address: '天山西路438号'},
        {
          value: '胖仙女纸杯蛋糕（上海凌空店）',
          address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'
        },
        {value: '贡茶', address: '上海市长宁区金钟路633号'},
        {
          value: '豪大大香鸡排超级奶爸',
          address: '上海市嘉定区曹安公路曹安路1685号'
        },
        {
          value: '茶芝兰（奶茶，手抓饼）',
          address: '上海市普陀区同普路1435号'
        },
        {value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107'},
        {value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号'},
        {value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号'},
        {value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄55号'},
        {
          value: 'Monica摩托主题咖啡店',
          address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F'
        },
        {
          value: '浮生若茶（凌空soho店）',
          address: '上海长宁区金钟路968号9号楼地下一层'
        },
        {value: 'NONO JUICE  鲜榨果汁', address: '上海市长宁区天山西路119号'},
        {value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路'},
        {
          value: '快乐柠檬（神州智慧店）',
          address: '上海市长宁区天山西路567号1层R117号店铺'
        },
        {
          value: 'Merci Paul cafe',
          address: '上海市普陀区光复西路丹巴路28弄6号楼819'
        },
        {
          value: '猫山王（西郊百联店）',
          address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306'
        },
        {value: '枪会山', address: '上海市普陀区棕榈路'},
        {value: '纵食', address: '元丰天山花园(东门) 双流路267号'},
        {value: '钱记', address: '上海市长宁区天山西路'},
        {value: '壹杯加', address: '上海市长宁区通协路'},
        {
          value: '唦哇嘀咖',
          address: '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元'
        },
        {value: '爱茜茜里(西郊百联)', address: '长宁区仙霞西路88号1305室'},
        {
          value: '爱茜茜里(近铁广场)',
          address: '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺'
        },
        {
          value: '鲜果榨汁（金沙江路和美广店）',
          address: '普陀区金沙江路2239号金沙和美广场B1-10-6'
        },
        {
          value: '开心丽果（缤谷店）',
          address: '上海市长宁区威宁路天山路341号'
        },
        {value: '超级鸡车（丰庄路店）', address: '上海市嘉定区丰庄路240号'},
        {value: '妙生活果园（北新泾店）', address: '长宁区新渔路144号'},
        {value: '香宜度麻辣香锅', address: '长宁区淞虹路148号'},
        {
          value: '凡仔汉堡（老真北路店）',
          address: '上海市普陀区老真北路160号'
        },
        {value: '港式小铺', address: '上海市长宁区金钟路968号15楼15-105室'},
        {value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1'},
        {value: '北京饺子馆', address: '长宁区北新泾街道天山西路490-1号'},
        {
          value: '饭典*新简餐（凌空SOHO店）',
          address: '上海市长宁区金钟路968号9号楼地下一层9-83室'
        },
        {
          value: '焦耳·川式快餐（金钟路店）',
          address: '上海市金钟路633号地下一层甲部'
        },
        {value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B'},
        {value: '浏阳蒸菜', address: '天山西路430号'},
        {value: '四海游龙（天山西路店）', address: '上海市长宁区天山西路'},
        {
          value: '樱花食堂（凌空店）',
          address: '上海市长宁区金钟路968号15楼15-105室'
        },
        {value: '壹分米客家传统调制米粉(天山店)', address: '天山西路428号'},
        {
          value: '福荣祥烧腊（平溪路店）',
          address: '上海市长宁区协和路福泉路255弄57-73号'
        },
        {
          value: '速记黄焖鸡米饭',
          address: '上海市长宁区北新泾街道金钟路180号1层01号摊位'
        },
        {value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号'},
        {
          value: '(小杨生煎)西郊百联餐厅',
          address: '长宁区仙霞西路88号百联2楼'
        },
        {value: '阳阳麻辣烫', address: '天山西路389号'},
        {
          value: '南拳妈妈龙虾盖浇饭',
          address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
        }
      ]
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter(queryString) {
      return (state) => {
        return state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      }
    },
    handleSelect(item) {
      console.log(item)
    }
  },
  watch: {
    isShowSup(newVal, oldVal) {
      if (newVal) {
        this.$bus.$emit('close', true)
      }
    },
    isShowSub(newVal, oldVal) {
      if (newVal) {
        this.$bus.$emit('close', true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  position: relative;
  .logo {
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
  .nav {
    z-index: 9;
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 60px;
    height: 30px;
    display: flex;
    .menuIcon {
      height: 30px;
      width: 30px;
      background: sandybrown;
      cursor: pointer;
    }
    .fadeRight {
      transform: translateX(15px);
      transition: transform 2s;
    }
    .fadeLeft {
      transform: translateX(-15px);
      transition: transform 2s;
    }
    .supmenu {
      margin-left: 20px;
      line-height: 30px;
      color: #666;
      display: flex;
      cursor: pointer;
      .supmenuItem {
        margin-left: 15px;
      }
    }
    .active {
      color: #999;
    }
    .slide-fade-enter-active {
      transition: all 0.8s ease;
    }
    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
      // transform: translateX(10px);
      opacity: 0;
    }
    .submenu {
      position: fixed;
      top: 0;
      bottom: 40px;
      left: 0;
      right: 0;
      display: flex;
      background: white;
      padding: 100px 50px;
      .submenuItem {
        margin-right: 30px;
        .projectType {
          line-height: 30px;
        }
      }
      .submenuItem:last-child {
        margin-right: 0;
      }
    }
  }
  .search-lang-wrap {
    display: flex;
    z-index: 9;
    position: fixed;
    bottom: 10px;
    right: 0;
    height: 30px;
    width: 80px;
    align-items: center;
    line-height: 30px;
    justify-content: space-between;
    padding: 0 10px;
    cursor: pointer;
    .searchicon {
      padding: 5px;
    }
  }
  .search-input-wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
  }
  .listView {
    height: calc(100vh - 240px);
  }
}
</style>
