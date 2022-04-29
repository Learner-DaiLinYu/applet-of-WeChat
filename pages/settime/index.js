// pages/settime/index.js
Page({

    /**
     * 页面的初始数据
     */
    settime:null,
    data: {
        time:1
    },

    kaisi(){
        console.log(1111)
        if(this.settime==null){
        this.settime=setInterval(() => {
            let a=this.data.time+1
            this.setData({
                time: a
            })
        }, 1000);
        }
    },

    topage(){
       wx.navigateTo({
         url: '../settimeto/index',
       }) 
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("页面隐藏了,",this.settime)
        if(this.settime!=null){
            //关闭计时器
            clearTimeout(this.settime)
            //定时器变为空
            this.settime=null
        }
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})