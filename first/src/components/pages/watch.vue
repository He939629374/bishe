<template>
<div>
<el-button type="text" @click="dialogTableVisible = true">查看</el-button>

<el-dialog width="1000px" title="收货地址" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="question" label="问题" width="430px"></el-table-column>
    <el-table-column property="grade" label="评价（分值）" width="100px"></el-table-column>
    <el-table-column property="situation" label="调查情况" width="230px" ></el-table-column>
    <el-table-column property="pic" label="" width="200px">
        <template slot-scope="scope">
                <watchpic></watchpic>
        </template>
    </el-table-column>
  </el-table>
  <watchpic></watchpic>
</el-dialog>
</div>
</template>
<script>
import watchpic from '@/components/pages/watchpic'
  export default {
    components:{
         watchpic
        },
    data() {
      return {
        gridData: [{
          question: '2016-05-02',
          grade: '王小虎',
          situation: '上海市普陀区金沙江路 1518 弄',
          pic:''
        }, {
          question: '2016-05-02',
          grade: '王小虎',
          situation: '上海市普陀区金沙江路 1518 弄',
          pic:''
        }, {
          question: '2016-05-02',
          grade: '王小虎',
          situation: '上海市普陀区金沙江路 1518 弄',
          pic:''
        }, {
          question: '2016-05-02',
          grade: '王小虎',
          situation: '上海市普陀区金沙江路 1518 弄',
          pic:''
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
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