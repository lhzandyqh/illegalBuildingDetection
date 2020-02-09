import request from '@/utils/request'

// 获取违章建筑数据
export function getIllegalBuildingData() {
  return request({
    url: '/tower-building/getLabelImage',
    method: 'get'
  })
}
