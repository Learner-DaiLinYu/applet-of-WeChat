// pages/fromsubmit/index.js
Page({
    data: {

    },
    nameChange(e){
        this.checkName(e.detail.value);
    },
    checkName(data){
        var reg=/^[\u4E00-\u9FA5A-Za-z]+$/
        return this.check(data,reg,'姓名输入错误！')
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
    submit(e){
        // console.log(e)
        let user={
            name:e.detail.value.name,
            gender:e.detail.value.gender,
            opinion: e.detail.value.opinion,
            skills: e.detail.value.skills
        }
        if(this.checkName(user.name)){
            wx.request({
              url: 'http://localhost:8080/zhuce',
              method:'GET',
              data:user,
              header: {
                'content-type': 'application/json' // 默认值
              },
              success (res) {
                  console.log(res.data.code)
                if(res.data.code==="200"){
                    wx.showToast({
                        title: res.data.message,
                        icon:'success',
                        duration: 2000,
                        success(){
                            setTimeout(()=>{
                                wx.navigateTo({
                                    url: '../welcome/index',
                                })
                            },1000)
                        }
                    })
                }else{
                    wx.showToast({
                        title: res.data.message,
                        icon:'error'
                      })
                }
              }
            })
        }
    }
})