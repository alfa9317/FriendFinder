var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friends.friendsArray);
      });

    app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    console.log(friends.friendsArray[0].scores);
    var minVal;
    var index;
    
    for(var i= 0; i<friends.friendsArray.length;i++){
        var sum=0;
        for(var j=0;j<(friends.friendsArray[i].scores).length;j++){   
            sum = sum + Math.abs(friends.friendsArray[i].scores[j]-newFriend.scores[j]) 
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

    friends.friendsArray.push(newFriend);
    
    res.json(friends.friendsArray[index]);
    });
}

