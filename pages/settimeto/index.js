// pages/settimeto/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        time:{
            hour:0,
            minute:0,
            second:0,
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log("页面加载中")
    },

    setTime:null,
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log("页面开始加载")
        // let tath=this;
        // //开启定时器
        // (function strat(){
        //    tath.setTime=setTimeout(() => {
        //         tath.setData({
        //             time:tath.data.time+1
        //         })
        //         strat()
        //     }, 1000);
        // })();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("监听页面显示")
        if(this.setTime==null){
        let tath=this;
        (function strat(){
            tath.setTime=setTimeout(() => {
                if(tath.data.time.minute==60){
                    tath.setData({
                        time:{
                            hour:tath.data.time.hour+1,
                            minute:0,
                            second:tath.data.time.second
                        }
                    })
                }else if(tath.data.time.second==60){
                    tath.setData({
                        time:{
                            hour:tath.data.time.hour,
                            minute:tath.data.time.minute+1,
                            second:0
                        }
                    })
                }else{
                    tath.setData({
                        time:{
                          hour:tath.data.time.hour,
                           minute:tath.data.time.minute,
                           second:tath.data.time.second+1
                        }
                    })
                }
                 strat()
             }, 1000);
         })();
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        clearTimeout(this.setTime);
        this.setTime=null;
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