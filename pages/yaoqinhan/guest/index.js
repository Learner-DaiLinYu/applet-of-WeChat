// pages/yaoqinhan/guest/index.js
Page({
    data: {
        picker:{
            arr:['0','1','2','3','4','5','6'],
            index:1
        }
    },
    pickerChange(e){
        this.setData({
            'picker.index':e.detail.value
        })
    },
    nameChange(e){
        this.checkName(e.detail.value);
    },
    phoneChange(e){
        this.checkPhone(e.detail.value);
    },
    checkName(data){
        console.log(data)
        var reg=/^[\u4E00-\u9FA5A-Za-z]+$/
        return this.check(data,reg,'姓名输入错误！')
    },
    checkPhone(data){
        console.log(data)
        var reg=/^(((13)|(15)|(17)|(18))\d{9})$/
        return this.check(data,reg,'手机号输入有误！')
    },
    check(data,reg,errMsg){
        if(!reg.test(data)){
            wx.showToast({
              title: errMsg,
              icon:'none',
              duration:1500
            })
            return false;
        }
        return true;
    },
    formSubmit(e){
        var person={
            name:e.detail.value.name,
            phone:e.detail.value.phone,
            num:e.detail.value.num,
            wish:e.detail.value.wish
        }
        if(this.checkName(person.name) && this.checkPhone(person.phone)){
            wx.request({
              url: 'http://localhost:8080/Weixin/info',
              data:person,
              method:'POST',
              header: {
                'content-type': 'application/json' // 默认值
              },
            })
            wx.showToast({
              title: '提交成功',
              icon:'success',
              duration:1500
            })
        }
    }
})