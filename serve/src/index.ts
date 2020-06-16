import express, { Express } from 'express';//启动服务器
import mongoose from 'mongoose';//连接数据库
import cors from 'cors';//用来跨域
import morgan from 'morgan';//用来输入访问日志的
import helmet from 'helmet'; //进行安全过滤的
import 'dotenv/config';//读取.env文件然后导入process.env
import path from 'path';
const app: Express = express();
app.use(cors());//跨域
app.use(morgan('dev'));
app.use(helmet);
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(_req,res,_next)=>{
    res.json({
        success:true,
        data:'nihao,kb'
    })
});
(async function(){} )()