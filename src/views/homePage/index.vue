<template>
  <div class="app-container">
    <el-row>
      <div class="head">
        <div style="display: inline-block">
          <span>行政区域</span>
        </div>
        <div style="display: inline-block;width: 150px;margin-left: 20px">
          <el-input v-model="input" disabled placeholder="请输入内容" />
        </div>
        <div style="display: inline-block;margin-left: 20px">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
          />
        </div>
      </div>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="homepage_item">
          <div class="img_container">
            <img src="../../assets/picture/weizhang.png">
          </div>
          <div class="number_container">
            <div style="text-align: center;margin-bottom: 10px">
              <span style="font-size: 20px;font-weight: bolder">67</span>
            </div>
            <div>
              <span style="font-size: 15px">实际违章建筑数目</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="homepage_item">
          <div class="img_container_two">
            <img src="../../assets/picture/daiwancheng.png">
          </div>
          <div class="number_container">
            <div style="text-align: center;margin-bottom: 10px">
              <span style="font-size: 20px;font-weight: bolder">247</span>
            </div>
            <div>
              <span style="font-size: 15px">待识别违章建筑数目</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="homepage_item">
          <div class="img_container_three">
            <img src="../../assets/picture/yiwancheng.png">
          </div>
          <div class="number_container">
            <div style="text-align: center;margin-bottom: 10px">
              <span style="font-size: 20px;font-weight: bolder">123</span>
            </div>
            <div>
              <span style="font-size: 15px">已识别违章建筑数目</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <div class="table_container">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            align="center"
            label="序号"
          />
          <el-table-column
            prop="name"
            align="center"
            label="区域"
          />
          <el-table-column
            prop="address"
            align="center"
            label="实际违章建筑数量"
          />
          <el-table-column
            prop="address"
            align="center"
            label="已识别建筑数量"
          />
          <el-table-column
            prop="address"
            align="center"
            label="待识别建筑数量"
          />
        </el-table>
      </div>
    </el-row>
    <el-row style="margin-top: 20px">
      <div style="float: right">
        <el-button type="text">导出表格</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      value1: '',
      tableData: [],
      input: ''
    }
  }
}
</script>

<style scoped>
  .head {
    float: right;
  }
  .homepage_item img {
    width: 50px;
    height: 50px;
  }
  .img_container {
    display: inline-block;
    padding-top: 15px;
    width: 80px;
    height: 80px;
    background-color: red;
    border-radius: 50%;
    text-align: center;
  }
  .img_container_two {
    display: inline-block;
    padding-top: 15px;
    width: 80px;
    height: 80px;
    background-color: #50c1eb;
    border-radius: 50%;
    text-align: center;
  }
  .img_container_three {
    display: inline-block;
    padding-top: 15px;
    width: 80px;
    height: 80px;
    background-color: green;
    border-radius: 50%;
    text-align: center;
  }
  .number_container {
    display: inline-block;
  }
</style>
