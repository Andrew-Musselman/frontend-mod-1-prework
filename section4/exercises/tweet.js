/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, numberOfLikes, comments){
  this.author = author;
  this.content = content;
  this.timeStamp = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comments = comments;
}
addLike(){
  this.numberOfLikes = this.numberOfLikes + 1;
}
addComment(){
  this.comments = this.comments + 1;
}
};

var tweetByDrew = new Tweet ('Drew', 'Hello World', 'Nov 3 2021 12:28PM', 0, 0);
tweetByDrew.addLike();
tweetByDrew.addComment();
console.log(tweetByDrew);

var tweetBySavannah = new Tweet ('Savannah', 'I hate Mondays', "Nov 2 2021 8:50AM", 10, 3);
tweetBySavannah.addLike();
tweetBySavannah.addLike();
tweetBySavannah.addComment();
console.log(tweetBySavannah);
