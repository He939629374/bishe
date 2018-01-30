<template>
<div class="mymsg " style="width:60%">
  <el-form ref="form" :model="form" label-width="80px" >
  <el-form-item label="头像" >
    <div id="im">
        <img :src="myurl">
        <!-- <img src="../../assets/闲暇.jpg"> -->
    </div>
  </el-form-item>
  </el-form>        
<el-form ref="form" label-width="80px" :inline="true" :model="form" class="demo-form-inline">
  <el-form-item label="账号" >
    <el-input v-model="form.account" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="form.name" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="电话" >
    <el-input v-model="form.account" :disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="form.name" :disabled="true"></el-input>
  </el-form-item>

  </el-form>
  <!-- <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->
  
  <!-- <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item> -->
  <el-form ref="form" :model="form" label-width="80px" >

  <el-form-item label="生日">
    <el-col :span="8">
      <el-date-picker type="date" placeholder="选择日期2" id="ms" v-model="form.date1" style="width: 100%;"
       :disabled="true"></el-date-picker>
    </el-col>
    <!-- <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col> -->
  </el-form-item>
  <el-form-item label="性别">
    <el-radio-group v-model="form.resource"  :disabled="true">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="个人签名">
    <el-input type="textarea" v-model="form.desc" :disabled="true"></el-input>
  </el-form-item>
</el-form>
</div>
</template>
<style>
img{
    width: 100px;
    height: 100px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100x;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
import myurl from '@/assets/闲暇.jpg'
  export default {
    data() {
      return {
          myurl:myurl,
        form: {
          account:'',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
         
      }
    },
    methods: {

    }
  }
</script>