const FONTS = [
  'Segoe UI',
  'Courier New',
  'NMY',
  'SSZH',
  'STHangKai'
]

const HOME_DATA = [
  {
    value: 0,
    text: '有趣的功能',
    items: [
      {
        label: '灰度悼念模式',
        path: '/mourn',
        name: 'MournView'
      },
      {
        label: '字体样式',
        path: '/fonts',
        name: 'FontsView'
      },
      {
        label: '卡片翻转',
        path: '/cardRotate',
        name: 'CardRotateView'
      },
      {
        label: '随机点名',
        path: '/randomRollCall',
        name: 'RandomRollCallView'
      }
    ]
  },
  {
    value: 1,
    text: 'Vant组件',
    items: [
      {
        label: 'Button',
        path: '',
        name: ''
      },
    ]
  }
]

export default {
  FONTS, HOME_DATA
}
