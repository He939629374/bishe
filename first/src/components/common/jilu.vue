<template>
  <div id="jilu">
    <el-header style="text-align: right; font-size: 10px">
                  <!-- 头部选择框 -->
                  <sel></sel>
              </el-header>  
      <el-table ref="singleTable"
                :data="tableData" 
                highlight-current-row
                @current-change="handleCurrentChange"
                :default-sort = "{prop: ['name','man','startdate','enddate','address','result'], order: 'descending'}"
                border
                style="width: 100%"
                max-height="470">
                  <el-table-column
                        type="selection"
                        width="auto">
                      </el-table-column>
                  <el-table-column type="index" sortable  label="#" width="auto">
                    </el-table-column>
                  <el-table-column property="int" label="操作" width="auto">
                    <template slot-scope="scope">
                            <el-button
                              size="mini"
                              type="danger"
                              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                          </template>
                    </el-table-column>
                  <el-table-column property="watch" label="查看" width="auto">
                    <template slot-scope="scope">
                           <watch></watch>

                          </template>
                    </el-table-column>
                  <el-table-column property="name" sortable label="任务名" width="auto">
                  </el-table-column>
                  <el-table-column property="address" sortable label="考察点" width="auto">
                    </el-table-column>
                  <el-table-column property="man" sortable label="处理人" width="auto">
                    <template slot-scope="scope">
                                <el-tag size="medium">{{ scope.row.man }}</el-tag>
                          </template>
                  </el-table-column>

                  <el-table-column  sortable label="开始时间" width="auto">
                    <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span >{{ scope.row.startdate }}</span>
                          </template>
                    </el-table-column>
                  <el-table-column property="enddate" sortable label="结束时间" width="auto">
                    <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span >{{ scope.row.enddate }}</span>
                          </template>
                    </el-table-column>
                  <el-table-column property="result" sortable label="处理结果" width="auto">
                  </el-table-column>
      </el-table>
  </div>
</template>
<script>
import sel from '@/components/common/select'
import watchpic from '@/components/pages/watchpic'
import watch from '@/components/pages/watch'
export default {
  components:{
            sel,watchpic,watch
        },
  data() {
            return {
              currentRow: null,
              show:true,
              tableData:[{
                          int: 1,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-03-02",
                          enddate:"2016-04-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 2,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-02-02",
                          enddate:"2016-06-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 3,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 4,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 5,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 6,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 7,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 8,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 9,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 10,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        },{
                          int: 11,
                          watch:"查<br>看",
                          name:"A",
                          man:"管理员",
                          startdate:"2016-05-02",
                          enddate:"2016-05-02",
                          address:"地理信息",
                          result:"未完成"
                        }],             
            }
        },
        methods:{
          setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
          },
          handleCurrentChange(val) {
            this.currentRow = val;

          }
        }
}
</script>
<style>
.el-table .cell, .el-table th div{
  text-align: center
}
</style>
