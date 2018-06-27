
//var friends = require("../data/friends.js");

var userData;
var userScores;
var friends = require("../data/friends.js");
module.exports = function(app){
  app.get("/api/friends", function(req,res){
    //userData = req.body;
    userData = res.body;
userScores = userData.scores;



var totalDifference =0;
var bestMatch = {
  name:"",
  photo:'',
  friendDifference: 1000
};
for (var i =0; i < friends.length; i++){
  console.log(friends[i]);
  totalDifference = 0;

  //loop through all the scores of each friend
  for (var j = 0; j < friends.length; i++){
    //calculate the difference between the scores and sum them into the totalDifference
    totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
//if sum of the differences is less than the differences of the current "best match"
if (totalDifference <= bestMatch.friendDifference) {
  //reset the bestMatch to be the new friend
  bestMatch.name = friends[i].name;
  bestMatch.photo = friends[i].photo;
  bestMatch.friendDifference = totalDifference;   }
  }
}
res.json(bestMatch);
})

//save user's data to the database, otherwise the database will always return that the
//user is the user's best friend
friends.push(userData);
  //  res.json(friends);
  };




  //take result of user's survey POST and parse it


  
  //this varialbe will calculate the difference between the user's scores and the scores of 
  //each user in the datbase



//return a JSON with the user's bestMatch. This will be used by the HTML in the next page







