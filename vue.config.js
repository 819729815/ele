module.exports={
    devServer:{
        open:true,
        host:"localhost",
        port:8080,
        https:false,
        hotOnly:false,
        proxy:{
            // 配置跨域
            "/api":{
                // target:"https://eleme2-october.herokuapp.com/api/",
                target:"https://c.iwanmen.com/element/api/",
                ws:true,
                changOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
};