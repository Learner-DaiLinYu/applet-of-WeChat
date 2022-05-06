// pages/login/index.js
Page({
    data: {
      islogin:true,
      getUserinfo:false,
      sex:null
    },
    onLoad(){
      wx.getStorage({
        key:'userInfo',
        success:res=>{
          if(res.data){
            wx.request({
              url: 'http://localhost:8080/login',
              method:'POST',
              data:{
                'UserInfo':res.data
              },
              success:res=>{
                wx.showToast({
                  title: res.data,
                  icon:'success'
                })
              }
            })
            this.setData({
              islogin:false,
              getUserinfo:true,
              sex:res.data.gender
            })
          }
        }
      })
    },
    getUsermessage(){
       wx.getUserProfile({
         desc: 'desc',
         success:res=>{
          wx.request({
            url: 'http://localhost:8080/login',
            method:'POST',
            data:{
              'UserInfo':res.userInfo
            },
            success:res=>{
              wx.showToast({
                title: res.data,
                icon:'success'
              })
            }
          })
           wx.setStorage({
             key:'userInfo',
             data:res.userInfo,
           })
          this.setData({
            getUserinfo:true,
            sex:res.userInfo.gender,
            islogin:false
          })
         }
       })
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