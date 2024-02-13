const express= require('express');
const app=express();
const ex=require('./routes/ex.js');
app.use('/ex',ex);

app.listen(5000,()=>{
    console.log('the service is running on port 5000')
})