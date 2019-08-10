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
    autoplay: true,

    //点赞评论数组
    like_comments:[
      {
        articlId:'001',
        headImg:'./img/menu1.png',nick:'韦小宝',lasttime:'20分钟前',
        title:'#小七与咩咩来约会',
        content:'adsadasdfasdfasdfasdfasdfasdf',
        imgs: ['./img/menu1.png', './img/menu2.png', './img/menu3.png', './img/menu5.png'],
        comments:'23',
        like:'12'
      },

      {
        articlId: '002',
        headImg: './img/menu6.png', nick: '乔峰', lasttime: '20分钟前',
        title: '#小七与咩咩来约会',
        content: '马路上此起彼伏的车鸣声，夹杂着凄凄惨惨的雨滴，倒也洗去了城市街头的龌蹉与浊尘。我无力地将头靠在起雾的车窗一角，无神的眼 眸，望向远方，默默承受着会呼吸的伤和痛.在失去点点后，我曾一度伤                   心好几周，每当看见它熟悉的玩偶和那独有的小窝时，心就被揪似的疼。不知为何，我突然萌生出再也不想养狗的想法，是的，我很爱狗狗，但是，我更怕这种一辈子也无法抹去的伤痕',
        imgs: ['./img/menu1.png', './img/menu2.png', './img/menu3.png'],
        comments: '23',
        like: '12'
      },

      {
        articlId: '003',
        headImg: './img/menu7.png', nick: '刘胡来', lasttime: '20分钟前',
        title: '#小七与咩咩来约会',
        content: 'adsadasdfasdfasdfasdfasdfasdf',
        imgs: ['./img/menu12.png', './img/menu2.png'],
        comments: '23',
        like: '12'
      },

    ],
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
    console.log("58-------:" + this.data.like_comments[0].imgs.length);
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
      title: event.target.dataset.name + "",  //其中注意postId 的参数传递方式
    })
  },

  goDetailArticle:function(event){
  
    console.log("151--------------:" + event.currentTarget.dataset.articleid);
    wx.navigateTo({
      url: '../detail_article/detailArticle?articleid=' + event.currentTarget.dataset.articleid
    })
  }

})