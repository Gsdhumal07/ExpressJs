const express= require("express");
const path =require("path");


const app= express();
const port = 80;
// for serving stsic file 
// static is the folde name so whatever the folder name we have to mention it their
app.use('/static',express.static("static"))

//Set the template engine as PUG
app.set('view engine','pug');

// set the viesw directory 
app.set('views',path.join(__dirname ,'views'));

// Our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render("demo",{title:"Hey PUG",message:"Hello Their and thanks for telling mi how to use to PUG"})
});

app.get('/',(req,res)=>{
    res.send("This is the first express App");
})

app.get('/about',(req,res)=>{
    res.send("This is the about page of my first express App with GET Request");
})

app.post('/about',(req,res)=>{
    res.send("This is the about page of my first express App with POST Request");
})


app.listen(port ,()=>{
    console.log(`The application started successfully on port ${port}`)
})