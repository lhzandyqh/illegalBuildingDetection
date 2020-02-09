<template>
  <div class="app-container">
    <el-row>
      <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

        <el-table-column align="center" label="序号">
          <template slot-scope="scope">
            <span>{{ scope.row.userid }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="编号">
          <template slot-scope="scope">
            <span>{{ scope.row.userid }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.personnel_name }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.gender }}</span>
          </template>
        </el-table-column>

        <!--        <el-table-column align="center" label="年龄">-->
        <!--          <template slot-scope="scope">-->
        <!--            <span>{{ scope.row.certLevel }}</span>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <el-table-column align="center" label="级别">
          <template slot-scope="scope">
            <span>{{ scope.row.position_level }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="权限展示">
          <!--          <template slot-scope="scope">-->
          <!--            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
          <!--              <el-option label="教师" value="教师"/>-->
          <!--              <el-option label="审核员" value="审核员"/>-->
          <!--              <el-option label="系统管理员" value="系统管理员"/>-->
          <!--            </el-select>-->
          <!--          </template>-->
          <template slot-scope="scope">
            <div v-for="(item,i) in scope.row.userrole" :key="i">
              <span>{{ item }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column align="center" label="权限设置">
          <!--          <template slot-scope="scope">-->
          <!--            <el-select v-model="scope.row.userrole" placeholder="权限" @change="eidtAuthority(scope.row.userid, scope.row.userrole)">-->
          <!--              <el-option label="教师" value="教师"/>-->
          <!--              <el-option label="审核员" value="审核员"/>-->
          <!--              <el-option label="系统管理员" value="系统管理员"/>-->
          <!--            </el-select>-->
          <!--          </template>-->
          <template slot-scope="scope">
            <el-select v-model="scope.row.edit" multiple placeholder="请选择权限">
              <el-option label="处置员" value="处置员" />
              <el-option label="监察员" value="监察员" />
              <el-option label="系统管理员" value="系统管理员" />
            </el-select>
            <el-button type="primary" style="margin-top: 10px">确认修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row style="margin-top: 20px">
      <div class="fenye">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[5, 10, 20]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="34"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      currentPage4: 1,
      list: [
        {
          userid: '0012',
          personnel_name: '张三',
          gender: '男',
          position_level: '一级',
          userrole: ['管理员']
        }
      ]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
  .fenye {
    text-align: center;
  }

</style>
