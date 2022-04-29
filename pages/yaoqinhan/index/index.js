// pages/yaoqinhan/index/index.js
Page({
    bgm:null,
    onReady(){
        this.bgm=wx.createInnerAudioContext()
        this.bgm.src="/pages/yaoqinhan/mp3/there for you.m4a"
        this.bgm.onEnded(()=>{   //循环播放
            this.bgm.src="/pages/yaoqinhan/mp3/there for you.m4a"
            this.bgm.play()
        })
    },
    data: {
        isPlayngMusic:false
    },
    play(){
        if(this.data.isPlayngMusic){   
            this.bgm.pause()
            this.setData({
                isPlayngMusic:false
            })
        }else{
            this.bgm.play()
            this.setData({
                isPlayngMusic:true
            })
        }
    },
})