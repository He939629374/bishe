<template>
  <div id="select">
             <el-input clearable
                   placeholder="请输入内容"
                   v-model="input0" 
                   class="input-with-select">
                      <el-select  v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="禅城区" value="禅城区"></el-option>
                        <el-option label="南海区" value="南海区"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                      </el-select>
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                    
                <el-button type="primary" icon="el-icon-edit">新增</el-button>
                <el-button type="primary" icon="el-icon-delete">删除</el-button>
  </div>
</template>

<script>
export default {
  components:{
        },
        data() {
            return {
                select: '',
                input0: '',          
            }
        },
        methods: {
          test(){
            this.showmymsg=!this.showmymsg
          }

      }
}
</script>
