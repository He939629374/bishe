
<template>
    <div id="app" >    
        <el-menu ref="dhl"    
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#303133"
        text-color="#fff"
        active-text-color="#ffd04b"
        margin="20px">      
        <el-menu-item index="1" ref="ddd">创文处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">待办事件</el-menu-item>
          <el-menu-item index="2-2">已办事件</el-menu-item>
          <el-menu-item index="2-3"><a href="https://vuefe.cn/v2/guide/mixins.html" target="_blank">备忘录</a></el-menu-item>
        </el-submenu>         
       <el-menu-item style="text-align:center;width:auto"> 
      <el-dropdown>
        <i class="el-icon-setting" style="color:#fff;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{load.name}}</span>
       </el-menu-item>
      </el-menu>   
      <el-container id='dh' v-bind:style="{height:clientHeight}" >
        <!-- <el-container id='dh' v-bind:style="styleObject" > -->
      <!-- <el-container id='dh' style="height: 800px; border: 10px solid red">  -->
            <el-aside width="200px" 
            background-color="#606266"
            text-color="#fff"
            active-text-color="#ffd04b" 
            style="background-color:#606266; overflow: hidden">
              <el-menu :default-openeds="a" background-color="#606266" @select="handleSelect"
              text-color="#fff"
              router
              active-text-color="#ffd04b">
              <el-menu-item index="/watchpic">
                <template slot="title"><i class="el-icon-tickets"></i>首页</template>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>信息查询</template>
                <el-menu-item-group>
                    <el-menu-item index="/jilu">x信息</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>个人中心</template>
                <el-menu-item-group>
                    <el-menu-item index="/mymsg" >个人信息</el-menu-item>
                    <el-menu-item index="/setmymsg">账号设置</el-menu-item>
                    <el-menu-item index="/setmima">安全信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              </el-menu>
            </el-aside>          
            <el-container class="transition-box">   
            <el-main class="transition-box"> 
              <transition name="el-fade-in-linear">  
              <router-view></router-view>   
              </transition>      
            </el-main>
            </el-container>          
          </el-container>
   </div>   
</template>
<script>
import setmymsg from '@/components/common/setmymsg'
import mymsg from '@/components/common/mymsg'
import setmima from '@/components/common/setmima'
import sel from '@/components/common/select'

export default {
  components:{
          
        },
        data() {
            return {
              load:{
                name:"请登录"
              },
              a:["0","0"],
              clientHeight: document.documentElement.clientHeight-60+'px',
              styleObject: {
                height: "200px", 
                border: "10px solid red", 
                
              },            
            }
        },
        mounted() {
          // 首先在Virtual DOM渲染数据时，设置侧边栏高度．        
          this.clientHeight = document.documentElement.clientHeight-60+'px';
          // 然后监听window的resize事件．在浏览器窗口变化时再设置下侧边栏高度．
          const that = this;
          window.onresize = function temp() {
              that.clientHeight = document.documentElement.clientHeight-60+'px';
          };
        },
        created: function () {
          // `this` 指向 vm 实例
          
        },
        methods: {
          test(){
            this.showmymsg=!this.showmymsg
          },
          handleSelect(key, keyPath) {
                console.log(key, keyPath);
          },
          change: function (event) {
            // `this` 在方法里指当前 Vue 实例
            if (event) {
                alert(event)
                console(event)
            }
          }

      }
}
</script>
<style>
.el-menu-item:last-child {
  float: right;
  margin-right: 0;
}
.el-menu-item:last-child:active{
  color: #fff

}

.he{
  padding-top: 10px;
  color: #fff;
  font-size: 14px;
}
      .el-main{
        padding-top: 5px
      }
      a,a:link,a:visited,a:hover,a:active{
        text-decoration:none;
      }
       body {
        display: block;
        margin: 0px;
      }
      .el-menu li {
        list-style: none;
        width: 200px;
      }
      .el-input{
        width: auto
      }
      .el-select .el-input {
      width: 100px;
      }
      .input-with-select .el-input-group__prepend {
      background-color: #fff;
      }
      .el-menu--horizontal{
        border:0px;
      }
      .el-aside {
        color: #333;
       
      }
      </style>