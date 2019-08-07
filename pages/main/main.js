// pages/main/main.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgUrls: [
      './img/dog1.jpg',
      './img/dog2.jpg',
      './img/dog3.jpg'
    ],


    griddata:[
      {name: 'A', img:'./img/menu1.png', url:'../menupage/normalMenu'},
      {name: 'B', img: './img/menu2.png', url: 'tt'},
      {name: 'C', img: './img/menu3.png', url: 'tt'},
      {name: 'D', img: './img/menu4.png', url: 'tt' },
      {name: 'e', img: './img/menu4.png', url: 'tt' },
      {name: 'f', img: './img/menu4.png', url: 'tt' },
      {name: 'g', img: './img/menu4.png', url: 'tt' },
      {name: 'e', img: './img/menu4.png', url: 'tt' },
    ],

    griddata2: [
      { name: 'A', img: './img/menu1.png', url: 'tt' },
      { name: 'D', img: './img/menu4.png', url: 'tt' },
      { name: 'e', img: './img/menu4.png', url: 'tt' },
      { name: 'f', img: './img/menu4.png', url: 'tt' },
      { name: 'g', img: './img/menu4.png', url: 'tt' },
      { name: 'h', img: './img/menu4.png', url: 'tt' },
      { name: 'i', img: './img/menu4.png', url: 'tt' },
      { name: 'j', img: './img/menu4.png', url: 'tt' },
    ],

    test: [
      {info: [{name:"Android",company: "Google 搜索", item:"Google 翻译"}]},
      {info: [{ name: "IOS", company: "Apple 搜索", item: "Apple 翻译" }]},
    ],




    currentSwiper: 0,
    autoplay: true
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
      console.log("58-------:"+this.data.test[0].info[0].name);
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

  onItemClick: function (event){
    wx.showToast({
      title: event.target.dataset.postid + "",  //其中注意postId 的参数传递方式
    })
  }
})