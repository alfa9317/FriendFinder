var friends = require('./app/data/friends.js');

app.get("/api/friends", function(req, res) {
    return res.json(friends.friendsArray);
  });

app.post("/api/friends", function(req, res) {

    var newFriend = req.body;

    console.log(newFriend);

    friends.friendsArray.push(newFriend);
    
    res.json(newFriend);
});