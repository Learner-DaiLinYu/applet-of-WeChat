// pages/weather/index.js
var defaultcity,getweather,getwind,getpic,getdate,type
var vurl="http://wthrcdn.etouch.cn/weather_mini?city="
Page({
    data: {
        list:[]
    },
    onLoad(){
        defaultcity="南昌"
        this.weather()
    },
    bindKeyInput(e){
        defaultcity=e.detail.value
    },
    search(){
        this.weather()
    },
    weather(){
        wx.showLoading({   //开启加载过度动画
          title: '加载中',
        })
        wx.request({
          url: vurl+defaultcity,
          success:res=>{
              if(res.data.status!=1000){
                  wx.hideLoading();
                  wx.showToast({
                    title: "输入的城市有误", // 提示的内容
                    icon: "error", // 图标，默认success
                  });
                  return
              }
              console.log(res.data);
              var todayWeather=res.data.data.forecast[0];
              getweather=todayWeather.high+'\n'+todayWeather.low;
              getwind=todayWeather.fengxiang+','+todayWeather.fengli.replace(/<\!\[CDATA\[(.*)\]\]>/,'$1');
                getpic='';
                getdate=todayWeather.data
                type=todayWeather.type
                switch(type){
                    case '多云':getpic="./pic/a_1.gif";break;
                    case '晴': getpic="./pic/a_0.gif";break;
                    case '大雨': getpic="./pic/a_9.gif";break;
                    case '中雨': getpic="./pic/a_9.gif";break;
                }
                
                let list=[]
                for(let i=1;i<res.data.data.forecast.length;i++){
                    let a=res.data.data.forecast[i]
                    let obj={}
                    obj.data=a.date
                    obj.wendu=a.low.match(/[0-9]{1,2}./gm)+"/"+a.high.match(/[0-9]{1,2}./gm)
                    obj.wind=a.fengxiang+','+a.fengli.replace(/<\!\[CDATA\[(.*)\]\]>/,'$1');
                    switch(a.type){
                        case '多云':obj.getpic="./pic/a_1.gif";break;
                        case '晴': obj.getpic="./pic/a_0.gif";break;
                        case '大雨': obj.getpic="./pic/a_9.gif";break;
                        case '中雨': obj.getpic="./pic/a_9.gif";break;
                        case '阴': obj.getpic="./pic/2.gif";break;
                    }
                    list.push(obj)
                }
                console.log(list)
                
                this.setData({
                    city:defaultcity,
                    weather:getweather,
                    wind:getwind,
                    pic:getpic,
                    data:getdate,
                    list:list
                })
                wx.hideLoading();
          }
        })
    }
})