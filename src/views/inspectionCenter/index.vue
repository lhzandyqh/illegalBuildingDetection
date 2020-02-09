<template>
  <div class="app-container">
    <el-row>
      <div class="sousuo">
        <div style="display: inline-block">
          <el-input
            v-model="input2"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
          />
        </div>
        <div style="display: inline-block">
          <el-button type="text">筛选</el-button>
        </div>
      </div>
    </el-row>
    <el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">
          <el-row>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochushuju.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出数据</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochutupian.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出图片</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/xiazai.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">进入下载界面</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column
                type="selection"
                width="55"
              />
              <el-table-column
                prop="name"
                label="序号"
                align="center"
              />
              <el-table-column
                label="告警时间"
                align="center"
              >
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="告警状态"
                align="center"
              />
              <el-table-column
                prop="address"
                label="告警类型"
                align="center"
                show-overflow-tooltip
              />
              <el-table-column
                prop="name"
                label="告警平台"
                align="center"
              />
              <el-table-column
                prop="name"
                label="瞭望塔"
                align="center"
              />
              <el-table-column
                prop="name"
                label="告警位置"
                align="center"
              />
              <el-table-column
                prop="name"
                label="处置状态"
                align="center"
              />
              <el-table-column
                prop="name"
                label="区域状态"
                align="center"
              />
              <el-table-column
                prop="name"
                label="重复"
                align="center"
              />
              <el-table-column
                prop="name"
                label="操作"
                align="center"
              >
                <template slot-scope="scope">
                  <el-button type="text" @click="openDialog(scope)">操作</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-row>
          <!--          <div style="margin-top: 20px">-->
          <!--            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
          <!--            <el-button @click="toggleSelection()">取消选择</el-button>-->
          <!--          </div>-->
          <el-row style="margin-top: 20px">
            <div class="fenye">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="456"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="未处理" name="second">
          <el-row>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochushuju.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出数据</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochutupian.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出图片</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/xiazai.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">进入下载界面</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="代签收" name="third">
          <el-row>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochushuju.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出数据</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochutupian.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出图片</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/xiazai.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">进入下载界面</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="处置中" name="fourth">
          <el-row>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochushuju.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出数据</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochutupian.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出图片</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/xiazai.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">进入下载界面</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="已处置" name="fifth">
          <el-row>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochushuju.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出数据</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/daochutupian.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">导出图片</span>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <div style="display: inline-block">
                  <img style="height: 15px;width: 15px" src="../../assets/picture/xiazai.png">
                </div>
                <div style="display: inline-block">
                  <span style="font-size: 13px;cursor: pointer">进入下载界面</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-dialog
      title="查看"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
    >
      <el-tabs v-model="activeNameTwo" @tab-click="handleClick">
        <el-tab-pane label="图片" name="one">
          <el-image :src="src" />
        </el-tab-pane>
        <el-tab-pane label="录像" name="two" />
        <el-tab-pane label="实时预览" name="three" />
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      currentPage4: 1,
      dialogVisible: false,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      input2: '',
      activeName: 'first',
      activeNameTwo: 'one',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    openDialog: function(scope) {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
  .sousuo {
    float: right;
  }
  .fenye {
    text-align: center;
  }
</style>
