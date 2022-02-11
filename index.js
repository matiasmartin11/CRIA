const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  console.log(path);
    res.sendFile(path.join(__dirname+'/src/public/inicio.html'));
    //__dirname : It will resolve to your project folder.
});



//add the router

app.use(express.static(path.join(__dirname, "src")));
app.use('/', router);


app.listen(process.env.port || 3000);

console.log('Running at Port 3000');



// var app = require('express')();

// app.get('/',function(request,response){
//    response.sendFile('src'+'/inicio.html');
// });

// app.listen('8000');




// const express = require("express");
// const path = require("path");

// const app = express();
// app.use(express.static(path.join(__dirname, "src")));
// app.set("port", (process.env.PORT || 3000));
// app.listen(app.get("port"));