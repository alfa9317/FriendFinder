var express = require("express");
var path = require("path");
// var friends = require('./app/data/friends.js');


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
    {
        name:"Ahmed",
        photo:"https://www.fillmurray.com/200/200",
        scores:[
            5,
            2,
            4,
            4,
            5,
            3,
            2,
            5,
            5,
            1
          ]
      },
      {
        name:"Abdul",
        photo:"https://www.fillmurray.com/250/200",
        scores:[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ]
      },
      {
        name:"Damian",
        photo:"https://www.fillmurray.com/250/250",
        scores:[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
      }
];

///API Routes
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    console.log(friends[0].scores);
    var minVal;
    var index;
    
    for(var i= 0; i<friends.length;i++){
        var sum=0;
        for(var j=0;j<(friends[i].scores).length;j++){   
            sum = sum + Math.abs(friends[i].scores[j]-newFriend.scores[j]) 
        }
        if(i===0){
            minVal = sum;
        }else{
            if(minVal>sum){
                minVal = sum;
                index = i;
            }
        }
    }

    console.log(index)

    friends.push(newFriend);
    
    res.json(friends[index]);
});

///HTML Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

///Server Listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
