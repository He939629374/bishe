<template>
<!-- <img :src="myurl"> -->
  <div id="watchpic">
    <el-popover
        ref="popover4"
        placement="top"
        height="400"
        width="700"
        trigger="click">
        <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="items in item" :key="items">
     <img :src="items">
    </el-carousel-item>
  </el-carousel>
    </el-popover>
    <el-button v-popover:popover4 size="mini" type="danger">现场图片</el-button>
  </div>
</template>

<script>
const aa='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=170536653,3837519745&fm=27&gp=0.jpg'
import myurl from '@/assets/闲暇.jpg'
  export default {
    data() {
      return {
       item:[aa,myurl,myurl]
      }
    }
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
