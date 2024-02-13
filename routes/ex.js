const express = require ('express');
const router =express.Router();
router.get('/auth/login',(req,res)=>{
    res.send('hello there,please log in')
})
router.get('/auth/register',(req,res)=>{
    res.sendfile(__dirname+'/registerform.html')
})
router.get('/post/all',(req,res)=>{
    res.json([{name:'amal',msg:'bonjour'},{name:'wassim',msg:'bonjour'}]
    )
})
router.get('/post/:id',(req,res)=>{
   const numId=[1,2,3,4,5,6];
   const ID=parseInt(req.params.id);

    if(numId.includes (ID))
    res.send(`the ID is : ${req.params.id}`) 
else
res.send('this id is not available')
})
module.exports=router;



