
//declaring variables 
const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser"); 
const Airtable = require('airtable');

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true})); 

// send the main page to homepage
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html"); 
});
//send the SAT page to SAT 
app.get("/SAT", function(req,res){
    res.sendFile(__dirname + "/sat.html"); 
});

app.get("/guidance", function(req,res){
  res.sendFile(__dirname + "/guidance.html"); 
});

var base = new Airtable({apiKey: process.env.apikey}).base(process.env.base);

//submit form for the SAT page 
app.post("/SAT", function(req,res){
  var entry = {
    "fields": {
      "Name and Last Name": req.body.txtName,
      "Phone Number": req.body.txtPhone,
      "Email": req.body.txtEmail,
      "FB profile": req.body.urlFB,
      "Grade": req.body.grade,
      "High School": req.body.txtSchool,
      "How did you hear about the session?": req.body.source,
      "If you heard about the session from a club or a friend, please share their name": req.body.promo,
    }
  };

  base('SAT students').create([entry
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      if(record.fields.Created.length === 0){
        //send failure html if the record wasn't created 
        res.sendFile(__dirname + "/failure.html");
      }else{
        //the record was created 
        res.sendFile(__dirname + "/success.html");
      };
    });
  });

  console.log(" SAT submitted");

});

//submit form for the University guidance page 
app.post("/guidance", function(req,res){
  var entry = {
    "fields": {
      "Name & last Name": req.body.txtName,
      "Phone number": req.body.txtPhone,
      "Email": req.body.txtEmail,
      "Facebook": req.body.urlFB,
      "Which grade are you in?": req.body.grade,
      "High School": req.body.txtSchool,
      "How did you hear about the session?": req.body.source,
      "If you heard about the session from a club or a friend, please share their name": req.body.promo,
    }
  };

  base('UG').create([entry
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record);
      if(record.id.length === 0){
        //send failure html if the record wasn't created 
        res.sendFile(__dirname + "/failure.html");
      }else{
        //the record was created 
        res.sendFile(__dirname + "/success.html");
      };
    });
  });

  console.log("submitted");

});

app.post("/success", function(req,res){
  res.redirect("/");

});
app.post("/failure", function(req,res){
  res.redirect("/");

});

app.listen(3000, function(){
    console.log("server is lisetning at port 3000");
});

