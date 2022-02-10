1.get all documents:
  db.movies.find()

2.get all documents with writer set to "Quentin Tarantino":
  db.movies.find({writer:"Quentin Tarantino"})

3. get all documents where actors include "Brad Pitt":
  db.movies.find({actors:"Brad Pitt"})

4. get all documents with franchise set to "The Hobbit":
  db.movies.find({franchise:"The Hobbit"})

5. get all movies released in the 90s:
  db.movies.find({year:{$gt:"1990", $lt:"2000"}})

6. get all movies released before the year 2000 or after 2010:
  db.movies.find({$or:[{year:{$gt:"2010"}},{year: {$lt:"2000"}}]})

7.find all users:
  db.users.find().pretty()

8.find all posts:
  db.posts.find().pretty()

9.find all posts that was authored by "GoodGuyGreg":
  db.posts.find({username:"GoodGuyGreg"})

10.find all posts that was authored by "ScumbagSteve":
  db.posts.find({username:"ScumbagSteve"})

11.find all comments:
  db.comments.find().pretty()

12.find all comments that was authored by "GoodGuyGreg":
  db.comments.find({username:"GoodGuyGreg"})

13.find all comments that was authored by "ScumbagSteve":
  db.comments.find({username:"ScumbagSteve"})

14.find all comments belonging to the post "Reports a bug in your code":

