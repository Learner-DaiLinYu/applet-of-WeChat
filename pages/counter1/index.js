// pages/counter1/index.js
Page({
    op:null,    //保存前一个符号
    result:null,  //保存结果，和前一个数
    opon:true,  //判断符号输入
    isClear:null,  //判断第一个数
    data: {
        num:'0',
        numresult:''
    },
    numBtn(e){
        var num=e.target.dataset.val; //获取数
        if(this.data.num==='0'){
            this.setData({
                num  //同名简写
            })
            this.isClear=true
        }else{
            this.setData({
                num:this.data.num+num
            })
            this.opon=true;   //判断可以输入符号
        }

        if(this.result!=null && this.op!=null){    //开始计算
            // var a= this.data.num.indexOf(this.op); // 找到符号位置
            // console.log(a)
            // console.log(this.data.num.length)
            let number2=Number(this.data.num.slice(this.data.num.lastIndexOf(this.op)+1,this.data.num.length))
            //  console.log(this.result)
            let number1=Number(this.result)
            //  console.log(number1,number2)
            if(this.op==='+'){
                this.result=number1+number2
            }else if(this.op==='-'){
                this.result=number1-number2
            }else if(this.op==='×'){
                this.result=number1*number2
            }else if(this.op==='÷'){
                this.result=number1/number2
            }else if(this.op==='%'){
                this.result=number1%number2
            }
             this.setData({
                numresult:this.result+'' //转成字符串
            })
            // this.op=null  //把计算的赋值为空
        }
    },
    opBtn(e){
        var op=e.target.dataset.val
        if(op==='='){
            this.setData({
                num:this.result,
                numresult:''
            })
            this.op=null;  //符号变为空
            this.isClear=true;  //保证result受到第一个值
            this.result=null;
            return 
        }
        if(this.isClear){
            this.result=this.data.num   //赋值第一个数
            this.isClear=false
        }
        // var num=Number(this.data.num) //转化为数字
        console.log(this.opon)
        if(this.opon){
            this.setData({
                num:this.data.num+op
            })
            this.opon=false
            this.op=op     //保存符号
        }else{
            var num=this.data.num.substr(0,this.data.num.length-1) //字符串裁剪 前一个字符
            this.setData({
                num:num+op
            })
            this.op=op     //保存符号
        }
        // if(this.isClear){
        //     return
        // }

        // this.isClear=true;  //方便显示第二个数
        // if(this.result===null){
        //     this.result=num   //存储第一个数
        //     return
        // }
        // if(op==='+'){
        //     this.result=this.result+num
        // }else if(op==='-'){
        //     this.result=this.result-num
        // }else if(op==='×'){
        //     this.result=this.result*num
        // }else if(op==='÷'){
        //     this.result=this.result/num
        // }else if(op==='%'){
        //     this.result=this.result%num
        // }
        // this.setData({
        //     num:this.result+'' //转成字符串
        // })
    },
    dotBtn(){
        // if(this.isClear){    //判断你是不是一来就输入小数点
        //     this.setData({num:'0.'})
        //     this.isClear=false
        //     return
        // }
        if(this.data.num.indexOf('.') >= 0){   //且判断小数点是有多个
            return
        }
        this.setData({num:this.data.num+'.'})
    },
    delBtn(){
        var num=this.data.num.substr(0,this.data.num.length-1) //字符串裁剪
        this.setData({
            num:num===''?'0':num
        })
    },
    resetBtn(){
        this.result=null
        this.isClear=false
        this.setData({num:'0',op:''})
    },
})