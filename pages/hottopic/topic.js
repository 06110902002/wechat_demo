// pages/hottopic/topic.js
Page({

  /**
   * Page initial data
   */
  data: {
    screenWidth:0,
    detail_txt_height: 120,
    isExtend:false,
    testData:[
      '最热','最新'
    ],
    indexLineOffSetX:0,
    animation:{}

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
      var sw = wx.getSystemInfoSync().windowWidth;
      this.setData({
        screenWidth:sw,
        indexLineOffSetX:(sw / 2 - sw / 4) / 2
      });
      
  },
  onExtend:function(e){

    var oriHeight = 120;
    if (this.data.isExtend) {
      oriHeight = 120;
    } else {
      oriHeight = 360;
    }

    this.setData({
      detail_txt_height: oriHeight,
      isExtend:!this.data.isExtend
    });
    
  },

  onItemClick: function (event){
    
    var curIndex = event.currentTarget.dataset.curindex;

    var animation = wx.createAnimation({
      duration: 700,
      timingFunction: 'ease',
      delay: 10
    });

    var sw = wx.getSystemInfoSync().windowWidth;
    var offsetX = curIndex * sw / 2 + (sw / 2 - sw / 4) / 64;

    animation.opacity(1).translate(offsetX, 0).step()
    this.setData({
      ani: animation.export()
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    
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