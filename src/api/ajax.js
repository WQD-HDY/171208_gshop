/*
    ajax请求函数模块
    返回值:promise对象(异步返回的数据是: response.data)
*/
import axios from 'axios'
export default function ajax(url,data={},type="GET"){
    return new Promise((resolve,reject)=>{  //高阶函数
        // 执行异步ajax请求
            let promise
            if (type==='GET') {
                // 准备url query数据
                let dataStr='' //数据拼接字符串
                Object.keys(data).forEach(key=>{
                    dataStr+=key+ '=' +data[key] +'&'
                })
                if (dataStr!=="") {
                    dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
                    url=url+'?'+dataStr
                }
                // 发送get请求
                promise=axios.get(url)
            }else{
                // 发送post请求
                promise=axios.post(url,data)
            }
            // 成功调用 resolve()
            promise.then((response)=>{
                resolve(response.data)
            })
            // 失败调用 reject()
            .catch(error=>{
                reject(error)
            })
    })
   

}
/*
    const response=await ajax()
    const result=response.data
    const resule=await ajax()
*/