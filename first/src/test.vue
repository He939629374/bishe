<template>
  <div id="app">
       <el-menu ref="dhl"
       
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      <el-container id='dh' v-bind:style="{height:clientHeight}" >
        <!-- <el-container id='dh' v-bind:style="styleObject" > -->
      <!-- <el-container id='dh' style="height: 800px; border: 10px solid red">  -->
            <el-aside width="200px" background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" style="background-color:#545c64; overflow: hidden">
              <el-menu :default-openeds="['1', '3']" background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>导航一</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
           
              </el-menu>
            </el-aside>
            
            <el-container>
              <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                  <i class="el-icon-setting" style="margin-right: 15px"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
              </el-header>
              
              <el-main>
                <el-table :data="item">
                  <el-table-column prop="date" label="日期" width="140">
                  </el-table-column>
                  <el-table-column prop="name" label="姓名" width="120">
                  </el-table-column>
                  <el-table-column prop="address" label="地址">
                  </el-table-column>
                </el-table>
              </el-main>
            </el-container>
          </el-container>
  </div>
</template>

<script>
const tata={     
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}
export default {
  name: 'App',
  data() {
   return{
    clientHeight: document.documentElement.clientHeight+'px',
    styleObject: {
      height: "200px", 
      border: "10px solid red", 
      
  },
    fullHeight: document.documentElement.clientHeight+'px',
    tableData:[{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }],   
             item:Array(20).fill(tata)              
   }       
  },
  mounted() {
    // 动态设置背景图的高度为浏览器可视区域高度

    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
    this.clientHeight.height = document.documentElement.clientHeight+'px';
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    const that = this;
    window.onresize = function temp() {
        that.clientHeight = document.documentElement.clientHeight+'px';
    };
  },
  created: function () {
    // `this` 指向 vm 实例
    alert(this.$refs.dhl.style.height)
    this.clientHeight.height = document.documentElement.clientHeight+'px'
  },
  methods: {
    handleSelect(key, keyPath) {
          console.log(key, keyPath);
          alert(key)
    },

    }
}
</script>

<style>
 .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
        
      }
      .el-menu--horizontal{
        border:0px;
      }
      .el-aside {
        color: #333;
       
      }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
