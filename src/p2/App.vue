<template>
  <div id="app">
    <div class="logo"></div>
    <div class="nav">
      <div class="menuIcon">
      </div>
      <div class="supmenu">
        <div class="supmenuItem" v-for="item in nav" :key="item.id">
            <div class="suppermenuName">
              {{item.suppermenuName}}
            </div>
          </div>
      </div>
      <div class="submenu">
        <div class="submenuItem" v-for="item in submenu" :key="item.id">
          <div class="projectType">item.typeName</div>
          <div v-for="it in item.projectLit" :key="it.id">
              {{it.name}}
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      submenu: [
            {
              typeName: '出版项目类型1',
              id: '',
              projectLit: [
                {
                  id: '',
                  name: ''
                }
              ]
            },
             {
              typeName: '出版项目类型2',
              projectLit: [
                {
                  id: '',
                  name: ''
                }
              ]
            },
             {
              typeName: '出版项目类型3',
              projectLit: [
                {
                  id: '',
                  name: ''
                }
              ]
            }
          ],
      nav: [
        {
          suppermenuName: '出版项目',
          id: '1',
          submenu: [
            {
              typeName: '出版项目类型1',
              projectLit: [
                {
                  id: '',
                  name: ''
                }
              ]
            },
             {
              typeName: '出版项目类型2',
              projectLit: [
                {
                  id: '',
                  name: ''
                }
              ]
            },
             {
              typeName: '出版项目类型3',
              projectLit: [
                {
                  id: '',
                  name: ''
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

</script>
