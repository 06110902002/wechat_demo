// pages/detail_article/detailArticle.js
var app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    
    statusBarHeight: 0,

    height:0,
    
    isShowSelectPic:false,
    selectImgPath:''
    

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // wx.setNavigationBarTitle({
    //   title: '123',
    // })
  
    this.configStatusBar();
    this.loadArticleDetail(options.articleid);
    
  },
  back:function(){
    wx.navigateBack();
  },

  /**
   * 配置状态栏属性
   */
  configStatusBar:function(){
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          statusBarHeight: res.statusBarHeight
        });
      }
    })
  },

  loadArticleDetail: function (articleid){
    if(articleid){
      
    }else{
      wx.showToast({
        title: '文章不存在或者文章id异常',
      })
    }
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

  },




  bindfocus: function (e) {

    let that = this;
    let height = 0;
    let height_02 = 0;

    wx.getSystemInfo({
      success: function (res) {
        height_02 = res.windowHeight;
      }

    })

    height = e.detail.height - (app.globalData.height_01 - height_02);

    console.log('app is', app.globalData.height_01);

    that.setData({
      height: height,
    })
    console.log('获得焦点的 e is', e);

  },

  //监听input失去焦点

  bindblur: function (e) {

    this.setData({
      height: 0,
    });
    console.log('失去焦点的 e is', e);

  },

  selecImg:function(){
    this.setData({
      isShowSelectPic:!this.data.isShowSelectPic
    });
    var self = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        self.setData({
          selectImgPath:tempFilePaths
        });
      }
    })
  },
})