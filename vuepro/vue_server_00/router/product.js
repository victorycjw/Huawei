const express=require("express");
var router=express.Router();
const pool=require("../pool.js")
//获取商品信息
// 首页商品
router.get("/fpage",(req,res)=>{
    //3.创建两条sql语执行，嵌套完成
    var sql="select lid,title,rise,img_url,price from hot where is_hot=1;select lid,title,rise,img_url,price from book where is_hot=1;select lid,title,rise,img_url,price from watch where is_hot=1;";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
});
router.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    console.log(uname);
    var sql = "SELECT id FROM ";
sql +=" xz_login WHERE uname = ?";
sql +=" AND upwd = md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if (err) throw err;
        console.log(result);
        if(result.length==0){
            res.send("0");
        }else{
            // 登录时将当前uid存在session中
            req.session.uid=result[0].id;
            res.send("1")
        }

    })
})
// 首页专栏
 router.get("/nav_s",(req,res)=>{
     var sql="select id,title,img_url from nav_daoh;";
     pool.query(sql,(err,result)=>{
         if (err) throw err;
         res.send(result)
     })
 })
// 第二华为专场页面
router.get("/sele",(req,res)=>{
    var sql="select lid,title,rise,img_url,chapImg,price from xz_laptop where sort='hw';";
    sql+="select lid,title,rise,img_url,price from hot;";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})
// 第三个页面荣耀界面
router.get("/honor",(req,res)=>{
    var sql="select lid,title,rise,img_url,chapImg,price from xz_laptop where sort='honor';";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
// 分类页
router.get("/sort",(req,res)=>{
    var sql="select lid,title,img_url from warm;select lid,title,img_url from hw_watch";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// 分类推荐页
router.get("/tj",(req,res)=>{
    var sql="select lid,title,img_url from xz_laptop where xilie='p';";
    sql+="select lid,title,img_url from xz_laptop where xilie='hwm';";
    sql+="select lid,title,img_url from xz_laptop where xilie='hwn';";
    sql+="select lid,title,img_url from xz_laptop where xilie='changx';";
    sql+="select lid,title,img_url from xz_laptop where xilie='honorpla';";
    sql+="select lid,title,img_url from xz_laptop where xilie='honor';";
    sql+="select lid,title,img_url from warm;select lid,title,img_url from watch;";
    sql+="select lid,title,img_url from book;";
    sql+="select lid,title,img_url from xz_laptop where xilie='jiaju';";
    sql+="select lid,title,img_url from xz_laptop where xilie='pj';";
    sql+="select lid,title,img_url from xz_laptop where xilie='ty';";
    sql+="select lid,title,img_url from xz_laptop where xilie='jj';";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send(result);
    })
})
// 查询指定用户购物车列表
router.get("/cart",(req,res)=>{
    //1.参数(如果参数为空)
    var uid=req.session.uid;
    if(!uid){
        res.send({
            code:-1,msg:"请登录"
        });
        return
    }
    var sql="select id,img_url,title,price,count from xz_cart where uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})
//功能：删除购物车中的商品
router.get("/delitem",(req,res)=>{
   var id=req.query.id;
   var sql="delete from xz_cart where id=?"
   pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
        res.send({code:1,msg:"删除成功"})
    }else{
        res.send({code:-1,msg:"删出失败"})
    }
   })
})
// 功能：删出多个商品
router.get("/delAll",(req,res)=>{
    var ids = req.query.ids;
    var sql=`delete from xz_cart where id in (${ids})`;
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删出成功"})
        }else{
            res.send({code:-1,msg:"删除失败"})
        }
    })
})
module.exports=router;