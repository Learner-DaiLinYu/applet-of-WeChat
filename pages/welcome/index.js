// pages/welcome/index.js
Page({
    data: {
        names:[]
    },
    onLoad(){
        var that= this
        wx.request({
            url: 'http://localhost:8080/list',
            method:'GET',
            success(res){
                that.setData({
                    names:res.data
                })
            }
          })
    }
})