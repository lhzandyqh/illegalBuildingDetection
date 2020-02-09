<template>
  <div class="app-container">
    <el-container>
      <el-aside width="450px">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <div class="all-item-container">
              <div v-for="(item,index) in allData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" class="item-content" @click="selectOne(item)">
                <div>
                  <el-row>
                    <el-col :span="2">
                      <div class="item_title">
                        <span v-if="item.dealWith" class="wancheng">已处理</span>
                        <span v-else class="nowancheng">未处理</span>
                      </div>
                    </el-col>
                    <el-col :span="17">
                      <div class="item_name">
                        <span>{{ item.cameraName }}</span>
                      </div>
                    </el-col>
                    <el-col :span="5">
                      <div class="item_time">
                        <span>{{ item.updatetime }}</span>
                      </div>
                    </el-col>
                  </el-row>
                </div>
                <div class="clearfix">
                  <div style="float: left;margin-top: 15px">
                    <img src="../../assets/picture/dingwei.png" style="width: 25px;width: 25px;">
                  </div>
                  <div style="float: left">
                    <span style="font-size: 12px;color: #999999;display: inline-block;padding-top: 20px;margin-left: 20px">{{ item.location }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="fenye">
              <el-pagination
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="allData.length"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </el-tab-pane>
          <el-tab-pane label="未处理" name="second">
            <div style="text-align: center;margin-top: 30px">
              <span style="font-weight: bolder">暂无内容</span>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已处理" name="third">
            <div style="text-align: center;margin-top: 30px">
              <span style="font-weight: bolder">暂无内容</span>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <div class="main">
          <div class="item_container_two">
            <div class="picture-container">
              <div class="picture-title">
                <span>照片展示</span>
              </div>
              <div class="picture-content">
                <el-image :src="src" style="width: 100%;height: 100%" />
              </div>
            </div>
            <div class="shuoming-container">
              <div class="picture-title">
                <span>照片说明</span>
              </div>
              <div class="shuoming-content">
                <!--            <div>-->
                <!--              <span style="font-weight: bolder">违章消息</span>-->
                <!--            </div>-->
                <div style="margin-top: 10px">
                  <span v-if="dianji">在<span style="font-weight: bolder">{{ location }}</span>附近发现疑似违规建筑<span style="font-weight: bolder">{{ num }}</span>处，纬度<span style="font-weight: bolder">{{ weidu }}</span>，经度<span style="font-weight: bolder">{{ jindu }}</span></span>
                  <span v-else>{{ shuoming }}</span>
                </div>
              </div>
            </div>
            <div class="ditu_container">
              <div class="picture-title">
                <span>位置信息</span>
              </div>
              <div class="ditu_container">
                <div id="all-map" class="map" />
              </div>
            </div>
            <div class="ditu_container">
              <div class="picture-title">
                <span>处置操作</span>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getIllegalBuildingData } from '@/api/getBuildingData'
import AMap from 'AMap'
export default {
  name: 'IlleBuildingDetection',
  data() {
    return {
      currentPage: 1, // 初始页
      pagesize: 5, //    每页的数据
      activeName: 'first',
      dianji: false,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      location: '',
      num: 0,
      weidu: '',
      jindu: '',
      allData: [
        { myindex: '1', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: false, status: false },
        { myindex: '2', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: false, status: false },
        { myindex: '3', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: true, status: true },
        { myindex: '4', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: true, status: true },
        { myindex: '5', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: false, status: false },
        { myindex: '6', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: false, status: false },
        { myindex: '7', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: true, status: true },
        { myindex: '8', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: false, status: false },
        { myindex: '9', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: true, status: true },
        { myindex: '10', title: '未处理 ', place: '点城区边家寨_照片', time: '2020-01-13 14:39:46', zhaoji: false, status: false }
      ],
      shuoming: '等待选择图片进行识别'
    }
  },
  mounted() {
    this.getData()
    this.GaodeMap()
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
    },
    scroll: function(event, scroller) {
      var k = event.wheelDelta ? event.wheelDelta : -event.detail * 10
      scroller.scrollTop = scroller.scrollTop - k
      return false
    },
    getData: function() {
      getIllegalBuildingData().then(response => {
        console.log('检查获取违章建筑数据')
        console.log(response)
        this.allData = response.data.data
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    findInformation: function(item) {
      console.log(item.myindex)
    },
    selectOne: function(item) {
      this.dianji = true
      this.src = item.picurl
      this.location = item.location
      this.num = item.buildingNum
      this.weidu = item.latitude
      this.jindu = item.longitude
    },
    GaodeMap() {
      var map = new AMap.Map('all-map', {

        center: [116.397428, 39.90923], // [纬度，经度]

        resizeEnable: true,

        zoom: 10

      })

      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
        map.addControl(new AMap.ToolBar())

        map.addControl(new AMap.Scale())
      })
    }
  }
}
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";    /*不用有内容也可以*/
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }
  .all-item-container {
    width: 100%;
    height: 50%;
  }
  .item-content {
    margin-bottom: 20px;
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    height: 100%;
  }
  .item-content:hover {
    background-color: #e0e0e0;
  }
  .item_title {
    float: left;
    margin-top: 6px;
  }
  .wancheng {
    display: block;
    width: 60px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    padding-left: 10px;
    background-color: #5fd34b;
    border-radius: 20px;
    color: white;
  }
  .nowancheng {
    display: block;
    width: 60px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    padding-left: 10px;
    background-color: #d32823;
    border-radius: 20px;
    color: white;
  }
  .item_name span {
    display: block;
    height: 30px;
    line-height: 30px;
    color: #494949;
    font-size: 14px;
  }
  .item_name {
    margin-left: 50px;
  }
  .item_time span {
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
  .fenye {
    width: 300px;
    text-align: center;
    margin-top: 15px;
  }
  .picture-container {
    padding: 20px;
    width: 100%;
    height: 400px;
  }
  .picture-title {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #999999;
    padding-bottom: 20px;
    padding-left: 20px;
  }
  .picture-title span {
    display: block;
    height: 40px;
    line-height: 40px;
    border-left-style: solid;
    border-left-width: 6px;
    border-left-color: #4A9FF9;
    padding-left: 20px;
  }
  .picture-content {
    margin-top: 20px;
    width: 70%;
    height: 100%;
    text-align: center;
    margin-left: 15%;
  }
  .shuoming-container {
    margin-top:70px;
    padding: 20px;
    width: 100%;
    height: 400px;
  }
  .shuoming-content {
    padding: 20px;
  }
  .main {
    width: 100%;
    /*height: 600px;*/
    overflow: hidden;
  }
  .item_container_two {
    width: 875px;
    height: 700px;
    overflow-y: scroll;
  }
  .map {
    width: 600px;
    height: 300px;
    /*margin-left: 15%;*/
  }
  .ditu_container {
    padding: 20px;
  }
</style>
