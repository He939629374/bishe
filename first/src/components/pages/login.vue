<template>
<div class="login-box" id="app" >  
 <el-row>  
    <el-col :span="8">  
        <el-input id="name"  v-model="name" placeholder="请输入帐号">  
            <template slot="prepend">帐号</template>  
        </el-input>   
    </el-col>  
 </el-row>  
 <el-row>  
    <el-col :span="8">  
        <el-input id="password" v-model="password" type="password" placeholder="请输入密码">  
            <template slot="prepend">密码</template>  
        </el-input>  
    </el-col>  
 </el-row>  
 <el-row>  
    <el-col :span="8"> 
        <router-link to="/index">
        <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
        </router-link> 
    </el-col>
      
 </el-row>  
 <div id="no-mode-translate-demo" class="demo">
  <div class="no-mode-translate-demo-wrapper">
    <transition name="no-mode-translate-fade">     
        <i class="el-icon-circle-check" v-if="isEditing" key="on" @click="isEditing = false"><span >已记住登陆</span></i>
        <i class="el-icon-circle-check-outline" v-else key="off" @click="isEditing = true"><span>记住我</span></i  >  
    </transition>
  </div>
</div>
</div>   
</template>
<script>
  export default {
    data() {
      return {
        isEditing:false,
        name:'',
        password:''
      };
    },
    methods: {
      check : function(event){  
                //获取值  
                var name = this.name;  
                var password = this.password;  
                if(name == '' || password == ''){  
                    this.$message({  
                        message : '账号或密码为空！',  
                        type : 'error'  
                    })  
                    return;  
                }  

    }
  }
}
</script>
<style>  
span{
    margin-left: 8px
}
.no-mode-translate-demo-wrapper {
  position: relative;
  height: 18px;
}
.no-mode-translate-demo-wrapper i {
  position: absolute;
}
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
  transition: all 1s;
}
.no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
  opacity: 0;
}
.no-mode-translate-fade-enter {
  transform: translateY(31px);
}
.no-mode-translate-fade-leave-active {
  transform: translateY(-31px);
}
.el-row {  
    margin-bottom: 20px;  
  }  
    .login-box {  
        margin-top:20%;  
        margin-left:40%;  
    }  
</style>  

