// pages/compare/compare.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        number1:null,
        number2:null,
        text:''
    },
    getSearchInput1(e){
        //this.number1=e.detail.value
        console.log(e)
        this.setData({
            number1:e.detail.value
        })
    },
    getSearchInput2(e){
        //this.number2=e.detail.value
        console.log(e)
        this.setData({
            number2:e.detail.value
        })
    },
    bigbest(){
        console.log(this.data.number1,this.data.number2)
        if(this.data.number1>this.data.number2){
            this.setData({
                text:"第一个更大"
            })
        }else{
            this.setData({
                text:"第二个更大"
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