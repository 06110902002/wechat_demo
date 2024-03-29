// pages/teststick/stick.js
Page({

  /**
   * Page initial data
   */
  data: {
    testData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //section header 距离 ‘当前顶部’ 距离
    sectionHeaderLocationTop: 0,
    //页面滚动距离
    scrollTop: 0,
    //是否悬停
    fixed: false,

    catTips:[
      '纠正拆家', '猫狗相处', '乱拉乱尿', '如何养家',
      '挑食', '环境消毒', '疫苗免疫', '体外驱虫',
      '体内驱虫', '独自在家', '洗澡清洁', '毛发梳理'
    ],

    sectionItemsArray:[
      '讨论','问答','医院','商品'
    ],
    sectionHeadSelectIndex:0,

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    let that = this
    let query = wx.createSelectorQuery()
    query.select(".section-header").boundingClientRect(function (res) {
      // console.log(res)
      that.setData({
        //section header 距离 ‘当前顶部’ 距离
        sectionHeaderLocationTop: res.top
      });
      console.log("36-----------:"+res.top);
    }).exec()
  },

  /**
  * 页面滚动监听
  */
  onPageScroll: function (e) {
    //console.log(e)
    this.data.scrollTop = e.scrollTop;
    if (e.scrollTop > this.data.sectionHeaderLocationTop) {
      this.setData({
        fixed: true
      })
    } else {
      this.setData({
        fixed: false
      })
    }
  },

  onLabelItemClick: function (event){
    wx.showToast({
      title: event.target.dataset.itemid + "",  
    })
  },
  onMenuItemClick:function(event){
  
    this.setData({
      sectionHeadSelectIndex: event.currentTarget.dataset.curindex
    });
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