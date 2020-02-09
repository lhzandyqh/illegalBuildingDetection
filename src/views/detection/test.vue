<template>
  <div class="app-container">
    <el-container>
      <el-aside width="450px">
        <div class="left">
          <div class="item_container">
            <div v-for="(item,index) in allData" :key="index" class="itemfff">
              <span>{{ item.cameraName }}</span>
            </div>
          </div>
        </div>
      </el-aside>
      <el-mian>
        <div class="main">
          <div class="item_container_two">
            <div v-for="(item,index) in allData" :key="index" class="itemfff">
              <span>{{ item.cameraName }}</span>
            </div>
          </div>
        </div>
      </el-mian>
    </el-container>
  </div>
</template>

<script>
import { getIllegalBuildingData } from '@/api/getBuildingData'
export default {
  name: 'Test',
  data() {
    return {
      allData: [
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' },
        { cameraName: 'fdfdf' }
      ]
    }
  },
  // mounted() {
  //   this.getData()
  // },
  methods: {
    getData: function() {
      getIllegalBuildingData().then(response => {
        console.log('获取数据')
        console.log(response)
        this.allData = response.data.data
        console.log(this.allData)
      })
    }
  }
}
</script>

<style scoped>
  .left {
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
  .item_container {
    width: 570px;
    height: 500px;
    overflow-y: scroll;
  }
  .itemfff {
    width: 100%;
    height: 100px;
  }
  .main {
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
  .item_container_two {
    width: 875px;
    height: 500px;
    overflow-y: scroll;
  }
</style>
