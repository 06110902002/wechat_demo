// pages/petscene/petScene.js

var list = require('./data/list.js')

Page({

  /**
   * Page initial data
   */
  data: {

    category:[
      'A','B','C','D',
      'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'I',
      'L', 'M', 'N', 'O'
    ],
    selectIndex:0,

    categoryDetail:[

      { name: 'A', img: '../main/img/menu10.png' },
      { name: 'B', img: '../main/img/menu11.png' },
      { name: 'C', img: '../main/img/menu12.png' },
      { name: 'D', img: '../main/img/menu9.png' },
      { name: 'E', img: '../main/img/menu8.png' },
      { name: 'F', img: '../main/img/menu7.png' },
      { name: 'G', img: '../main/img/menu6.png' }
    ],


    // 左侧点击类样式
    curNav: 'A',

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  onCategoryItemClick:function(event){

    this.setData({
      selectIndex: event.currentTarget.dataset.curindex
    });
  },

  //点击左侧 tab ，右侧列表相应位置联动 置顶
  switchRightTab: function (e) {
    var id = e.target.id;
    console.log(typeof id)
    this.setData({
      // 动态把获取到的 id 传给 scrollTopId
      scrollTopId: id,
      // 左侧点击类样式
      curNav: id
    })
  },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    var listChild1 = list.List[0];
    var that = this;
    // 获取可视区高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          list: listChild1,
          winHeight: res.windowHeight,
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})