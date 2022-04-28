// pages/compare2/compare2.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        number1:null,
        number2:null
    },
    cheag(e){
        console.log(e);
        var data={}
        data[e.target.dataset.num]=e.detail.value
        //this.setData(data)
    },
    to(){
        if(this.data.number1>this.data.number2){
            wx.showToast({    //弹窗
              title: '第一个数大',
            })
        }else if(this.data.number1<this.data.number2){
            wx.showToast({   //弹窗
              title: '第二个数大',
            })
        }else{
            wx.showToast({
              title: '两个数相等',
            })
        }
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