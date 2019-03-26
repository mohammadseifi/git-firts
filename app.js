const express=require('express');
const path=require('path');
const hbs=require('hbs');
const fs=require('fs');
const ex=express();
ex.set('view engine','hbs');
ex.use(express.static(path.join(__dirname,'public')));
hbs.registerPartials(path.join(__dirname,'./views/partials'))
hbs.registerHelper('dates',()=>{
    return new Date().getFullYear();
})
ex.use((req,res,next)=>{
    res.render('tamir')
})
ex.use((req,res,next)=>{
    let time=new Date().toString()
    let real=`${time}: ${req.method} ${req.url}`;
    console.log(real)
    fs.appendFile('appe',real+'\n',(err)=>{
        if(err){
            console.log('cant do ur work!!')
        }
    })
    next();
})
ex.get('/',(req,res)=>{
    res.render('home',{
        pageTite:'mamali'
    });
})
ex.listen(3000,()=>{
    console.log('we are in 3000')
})