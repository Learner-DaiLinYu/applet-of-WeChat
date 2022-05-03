// pages/login/index.js
Page({
    data: {

    },
    login(){
        wx.login({
          success:res=>{
            //   console.log(res)
              console.log('login code'+res.code)
              wx.request({
                url: 'http://localhost:8080/login',
                method:'GET',
                data:{
                    code:res.code
                },
                success:res=>{
                    console.log(res.data.token)
                    wx.setStorage({
                        key: 'token',
                        data:res.data.token
                    })
                }
              })
          }
        })
    }
})