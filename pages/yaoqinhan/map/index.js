// pages/yaoqinhan/map/index.js
Page({
    data: {
        latitude:28.690000,longitude:115.833000,
        markers:[{
            iconPath:'../images/navi.png',id:0,
            latitude:28.690000,longitude:115.833000,width:50,height:50
        }]
    },
    markertap(){
        wx.openLocation({
          latitude: this.data.latitude,
          longitude: this.data.longitude,
          name:'爱心大酒店',address:'北京市 朝阳区 人民路'
        })
    }
})