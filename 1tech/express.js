// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// to encode forms
app.use(bodyParser.urlencoded({ extended: false }));
// to encode json
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));

const AppError = require("./AppError");
const port = 8000;
/*const server = app.listen(port,()=>{console.log('running on localhost: ${port}')})*/
const server = app.listen(port, listening);
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

let posts = [
  { id: 0, username: "koko", comment: "im koko" },
  { id: 1, username: "lolo", comment: "im lolo" },
  { id: 2, username: "zozo", comment: "im zozo" },
];

let id = 5;
const authenticate = (req, res, next) => {
  if (req.query.password === "kokowawa") {
    next();
  }
  // sends error to browser
  // res.status(401).send("not allowed");
  // To be handled by error handler next(err) and error is thrown in server
  // throw new Error("password required");
  // use AppErrr class to send error to browser
  throw new AppError("password required", 401);
};

// Middleware to run with every request
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// We can define a certain path as condition for the middleware
app.use("/newpost", (req, res, next) => {
  console.log("new post");
  next();
});

app.get("/", function (req, res) {
  res.send("hello world");
});

app.post("/addpost", addPost);
function addPost({ body: { username, comment } }, res) {
  posts.push({
    id: id++,
    username: username,
    comment: comment,
  });
  console.log(posts);
  res.send("post added");
  // Redirects to another url to avoid resending request on refresh
  // res.redirect("/users");
}

app.post("/getpost/:id", (req, res) => {
  // req.params gives string
  const { id } = req.params;
  const post = posts.find((post) => post.id === parseInt(id));
  res.send(post);
});

// patch for editing object
app.patch("/patchpost/:id", (req, res) => {
  const { id } = req.params;
  const patchedComment = req.body.comment;
  const post = posts.find((post) => post.id === parseInt(id));
  post.comment = patchedComment;
  res.send(post);
  // res.redirect("/users");
});

// put for totally replacing object
app.put("/putpost/:id", (req, res) => {
  const { id } = req.params;
  let filteredPosts = posts.filter((post) => post.id !== parseInt(id));
  const newPost = {
    id,
    username: req.body.username,
    comment: req.body.comment,
  };
  const newPosts = filteredPosts.push(newPost);
  posts = newPosts;
  console.log(posts);
  res.send(posts);
  // res.redirect("/users");
});

app.get("/secret", authenticate, function (req, res) {
  res.send("admin logged in");
});

app.get("/admin", function (req, res) {
  throw new AppError("you are not an admin", 403);
});

// 404 message if no path meets the request
app.use((req, res) => {
  res.status(404).send("Path not found");
});

/* Error handling to replace default html express error response (this runs first)
app.use((err, req, res, next) => {
  console.log("we have got an error!!!");

   To replace browser html error response
  res.status(500).send("there is an error");

   To send next error handler ex: authenticate error handler
  next(err);
}); */

app.use((err, req, res, next) => {
  const { message = "there is an error", status = 500 } = err;
  //send error to server
  console.log(message, status);
  //send error to browser
  res.status(status).send(message);
});
