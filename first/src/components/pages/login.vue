<template>
  <div class="login-box" id="app" >  
    <el-form :model="ruleForm2"  :rules="rules2" ref="ruleForm2" >
      <el-row>
        <el-col :span="10">
          <el-form-item label="" prop="name"> 
            <el-input id="name"  v-model="ruleForm2.name" placeholder="请输入帐号"> 
              <template slot="prepend" ><i class="el-icon-message"></i></template>
            </el-input>   
          </el-form-item> 
        </el-col> 
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="" prop="password"> 
            <el-input id="password" v-model="ruleForm2.password" type="password" placeholder="请输入密码">  
              <template slot="prepend" ><i class="icon-lock_fill"></i></template> 
            </el-input>  
          </el-form-item> 
        </el-col> 
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item> 
            <!-- <router-link to="/index">        </router-link>  -->
            <el-button id="login"  style="width:100%" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          </el-form-item> 
        </el-col> 
      </el-row>
    </el-form>
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

      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入帐号'));
        } else {
          // if (this.ruleForm2.checkPass !== '') {
          //   this.$refs.ruleForm2.validateField('checkPass');
          // }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        isEditing:false,
        ruleForm2: {
          name: '',
          password: '',
        },
        rules2: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],

        }
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
.el-form-item.is-success .el-input__inner{
      border-color:#dcdfe6
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
.login-box {  
    margin-top:20%;  
    margin-left:40%;  
}  
</style>  

