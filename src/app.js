const  path = require ("path");
// step 1 - bring the express.js file
const express = require ("express");
const hbs =require("hbs");

// step 2 - create a server (its your app)

const server =express(); // call it // this will connectecd to your hardware


const publicPath = path.join(__dirname, "../public") 
server.use(express.static(publicPath));

// step 3 register   // put the address you want to listen inside the ()
// request and a response
// server.get("/",(req, res)=>{  //when user give the urls // run the code after that  / is the local storage http://localhost:3000/
//         console.log(req)
//         res.send('this is from a server!!');

// });     // I comment this from i started hbs file

// set up view engine
server.set("view engine","hbs");

// set up parital files
const partialPath = path.join(__dirname,"../views/partials");
hbs.registerPartials(partialPath);

//Routes for interface
server.get("/",(req, res)=>{  
        // console.log("home route")
        // console.log(req.query); // http://localhost:3000/?title=apple
        // res.render('index',{title: req.query.title,author:"beyond training"});
        res.render("index", {title: "weather-app",author:"beyond training"});   
});  

// this is after creating hbs index file
//http://localhost:3000/?title=orange change apple from orange and wee




// about.hbs
server.get("/about",(req, res)=>{  
        res.render('about',{title: "about us", author:"beyond training"});   
});  


// help.hbs
server.get("/help",(req, res)=>{  
        res.render('help',{title: "I can help you", author:"beyond training"});   
});    //http://localhost:3000/help


// weather app
server.get("/weather",(req, res)=>{
        if(req.query.location){
                res.send({
                forecast: "31% in Colombo"   
                });
        } else{
                res.send({
                        error:"please enter your location"
                });
        }
});
// http://localhost:3000/weather
// try this http://localhost:3000/weather?location=colombo after the console.log 
// http://localhost:3000/weather?location=colombo
// http://localhost:3000/weather?location
 


// run in the terminal node src/app.js
// use CRTL +C to stop running in the terminal


server.listen(3000);// listen to any network connecting activities on your computer
// 3000 is the port


//static files  // the user cannot change (html,css,js)
// backend files to be saved under src folder
//front end files to be saved under public (html,css,js)

// how to bring static files to backend or to the server
// path is a function which cut and join a string
// const  path = require ("path");
// const publicPath = path.join(__dirname, "../public")  // im bring the public path to the backend
//C:\Users\Lenovo\OneDrive\Desktop\Web Dev\WEB SERVER\public
// console.log(publicPath)
// dirname is the backend directry and public is my frond end path
// the above code should be in the top after the 2nd code


/*now we fount the public path
we haven'told the express server where the public path is */
// server.use(express.static(publicPath));
//whenever you want to configure/setting your server you use above
// now run your terminal and go to localhost  http://localhost:3000/about.html 1:03



// ORDER MATTERS  
//Dynamic files in another thing 
// how to create dynamic files 2ways (View engine and JS)

//bring view engine from NPM library (called hbs (handlebars.js)) - hbs

//1.52
//based on the user, the interface is changing or the response is changing
// its called dynamic files

//17








