// pages/player/index.js
Page({

    /**
     * 页面的初始数据
     */
    times:null,  //定时器
    data: {
        playlist: [
            {
                id:1,title:'2020',singer:'戴林宇',
                src:'pages/player/MP3/2020.m4a',
                coverImgUrl:'imgs/4.jpg'
            },
            {
                id:2,title:'file',singer:'郭天宇',
                src:'pages/player/MP3/file.mp3',
                coverImgUrl:'imgs/qw.jpg'
            },
            {
                id:3,title:'onMyomw',singer:'姚昊',
                src:'pages/player/MP3/onMyomw.m4a',
                coverImgUrl:'imgs/4.jpg'
            },
            {
                id:4,title:'there for you',singer:'葛志宇',
                src:'pages/player/MP3/there for you.m4a',
                coverImgUrl:'imgs/qw.jpg'
            }
        ],
        item:0, //控制页面
        // tab:0   //控制样式
        playIndex:0,  //正在播放的那个音乐
        state:'paused',  //播放和暂停状态
        play:{
            currentTime: '00:00',  //播放时长
            duration: '00:00',  //总时长
            percent:0,  //播放进度
            title:'涛声依旧',  //标题
            singer:'毛宁',  //作者
            coverImgUrl:'imgs/4.jpg'  //图片
        }
    },
    //点击头像切换到播放页
    toplay(){
        this.setData({
            item:1
        })
    },
    // 音乐播放事件
    play(){
        // setTimeout(()=>{     //播放时延时一段时间，onTimeUpdate才会生效
            // this.audioCtx.pause()
        this.audioCtx.play()
        // },250);
        this.setData({
            state:'running'
        })
    },
    // 音乐播放暂停事件
    pause(){
        this.audioCtx.pause()
        this.setData({
            state:'paused'
        })
    },
    // 标签页点击数据
    changeItem(e){
        this.setData({
            item:e.target.dataset.item
        })
        // console.log(this.data.item)
    },
    //改变选中样式
    changeTab(e){
        // console.log(e.detail.current)
        // console.log(this.data.item)
        this.setData({ 
            item:e.detail.current
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
        //向全局变量里面添加一个音频对象  不支持相对路径
       this.audioCtx=wx.createInnerAudioContext()  
       this.setMusic(2)  //默认第0首
    //    this.audioCtx.play()
    //    console.log(this.audioCtx)
    //  自动更新播放进度
    // this.audioCtx.onPlay(()=>{
    //     // 一定要访问duration 否则onTimeUpdate不会触发
    //         let duration = this.audioCtx.duration;
    //         console.log(duration)
    //   })
    // this.audioCtx.onTimeUpdate(()=>{   //更新时间
    //     this.setData({
    //         'play.duration':this.formatTime(this.audioCtx.duration),
    //         'play.currentTime':this.formatTime(this.audioCtx.currentTime),
    //         'play.percent':this.audioCtx.currentTime/this.audioCtx.duration*100
    //     })
    // });
    this.times=setInterval(()=>{
            this.setData({
                'play.duration':this.formatTime(this.audioCtx.duration),
                'play.currentTime':this.formatTime(this.audioCtx.currentTime),
                'play.percent':this.audioCtx.currentTime/this.audioCtx.duration*100
            })
            // console.log(1)
        },100)
        this.audioCtx.onEnded(()=>{
            this.next()
        })
    },
    next(){
        var index=this.data.playIndex >= this.data.playlist.length-1?0:this.data.playIndex+1
        this.setMusic(index)
        if(this.data.state==='running'){
            this.play()
        }
    },
    setMusic(index){
        var music=this.data.playlist[index]
        this.audioCtx.src=music.src
        this.setData({
            playIndex:index,
            'play.title':music.title,
            'play.singer':music.singer,
            'play.coverImgUrl':music.coverImgUrl,
            'play.duration':this.formatTime(this.audioCtx.duration),
            'play.currentTime':'00:00',
            'play.percent':0
        })
    },
    formatTime(time){   //时间格式化器
        var minute=Math.floor(time/60)%60;
        var second=Math.floor(time)%60
        return (minute<10?'0'+minute:minute)+':'+(second<10?'0'+second:second)
    },
    sliderChangeing(e){
        // console.log(0)
        clearInterval(this.times)
        this.times=null;
        // this.times=null
        // console.log(e)
        // var second=e.detail.value*this.audioCtx.duration / 100
        // console.log(1)
        // this.setData({
        //     'play.currentTime':this.formatTime(second)
        // })
    },
    sliderChange(e){
        // console.log(e)
        var second=e.detail.value*this.audioCtx.duration / 100
        this.audioCtx.onSeeked(()=>{
            this.times=setInterval(()=>{   //开启新的定时器
                this.setData({
                    'play.duration':this.formatTime(this.audioCtx.duration),
                    'play.currentTime':this.formatTime(this.audioCtx.currentTime),
                    'play.percent':this.audioCtx.currentTime/this.audioCtx.duration*100
                })
                // console.log(2)
            },100)
        })
        this.audioCtx.seek(second)
        // this.audioCtx.currentTime=second
        // this.audioCtx.pause()
        // this.audioCtx.play()
        //改变进度
    },
    change(e){
        // console.log(e)
        this.setMusic(e.currentTarget.dataset.index)
        this.play()
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