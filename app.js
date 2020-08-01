//express frameWork

//Everything run between request and response are called middleware, such as get method and use method
//run top to bottom untill get a response

const express = require('express');
const app = express();

//set view engine 
app.set("view engine", "ejs"); //automaticaly search ejs file into 'views' folder

//if different folders are also needed to be searched in, then we have to set it
//app.set("views","myView"); //'myView' is the different folder name where view is stored

app.listen(3000);

//use() method is called for all type of request, can be write in the code multiple time

app.use((req,rep,next)=>{
    console.log(req.path);
    console.log(req.method);
    next(); // using so that it can go to next middleware method
});

app.use((req,rep,next)=>{
   console.log('next middleware');
   next();
});


app.use(express.static('public')) //allow us to use all static file like css file,image etc in the brower,
// that are placed inside public folder. express.static('folderName') is an express middleware funtion that we can call directly.
//there are also thirdparty middleware that we can use like morgan

app.get('/',(req,rep)=>{
    //normal way
    //rep.send("plain text");
    //rep.sendFile('./views/home.html',{root:__dirname});

    //using view engine ejs
    rep.render('home',{title:"HOME"}); //passing data obj too

});

app.get('/about',(req,rep)=>{
    //rep.sendFile('./views/about.html',{root:__dirname});
    rep.render('about',{title:"ABOUT"}); //passing data obj too
});

app.get('/about-me',(req,rep)=>{
    rep.redirect('/about');
});


app.use((req,rep)=>{
   // rep.status(404).sendFile('./views/error.html',{root:__dirname});
   rep.status(404).render('error',{title:"OPPS!"}); //passing data obj too
});

