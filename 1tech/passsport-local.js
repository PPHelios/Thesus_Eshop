/*
https://medium.com/@prashantramnyc/node-js-with-passport-authentication-simplified-76ca65ee91e5

app.use (passport.initialize())
2. app.use (passport.session())
3. passport.use(new LocalStrategy (authUser))
   3a. Define the "authUser" function, and authenticate the user.   
       Pass this {authenticate_user} to the passport.serialize()
4. passport.serializeUser() 
//attach the {authenticate_user} to 
req.session.passport.user.{authenticated_user}
   passport.deserializeUser()
//get the {authenticated_user} for the session from "req.session.passport.user.{authenticated_user}, and attach it to req.user.{authenticated_user}
5. Use passport.authenticate() in the "login" route and define the success and failure redirects i.e.
app.post ("/login", passport.authenticate('local', {
   successRedirect: "/dashboard",
   failureRedirect: "/login",
}))
6. Use the “req.isAuthenticated()” function to protect logged in routes
7. Use “req.logOut()” to clear the sessions object, and log the user out



Step 3a: Define the “authUser” function to get authenticated Users
The “authUser” function is a callback function that is required within the LocalStrategy, and can takes three arguments.
The “user” and “password” are populated from the “req.body.username” and “req.body.password”. These can be used to search the DB to find and authenticate the username/password that was entered in the “login” form.

authUser = (user, password, done) => {
//Search the user, password in the DB to authenticate the user
//Let's assume that a search within your DB returned the username and password match for "Kyle".
   let authenticated_user = { id: 123, name: "Kyle"}
   return done (null, authenticated_user )
}
The “done()” function is then used to pass the “{authenticated_user}” to the serializeUser() function.

Note, the done(<err>, <user>) function in the “authUser” is passed as ,

1. If the user not found in DB, 
done (null, false)
2. If the user found in DB, but password does not match, 
done (null, false)
3. If user found in DB and password match, 
done (null, {authenticated_user})
i.e.

if user not found,
done( <no error> so null, <no matching user> so false),
if user found but password does not match,
done ( <no error> so null, <no matching user> so false)
if user found and password matches, we found our authenticated user and done ( <no error> so null, <pass authenticated user to serializeUser()>)
Step 4: Serialize and De-Serialize (authenticated) users
SerializedUser:

passport.serializeUser( (userObj, done) => {
    done(null, userObj)
})
-------------------------
WHAT DOES SERIALIZE USER MEAN?
1. "express-session" creates a "req.session" object, when it is invoked via app.use(session({..}))
2. "passport" then adds an additional object "req.session.passport" to this "req.session".
3. All the serializeUser() function does is,
receives the "authenticated user" object from the "Strategy" framework, and attach the authenticated user to "req.session.passport.user.{..}"
In above case we receive {id: 123, name: "Kyle"} from the done() in the authUser function in the Strategy framework, 
so this will be attached as 
req.session.passport.user.{id: 123, name: "Kyle"}

3. So in effect during "serializeUser", the PassportJS library adds the authenticated user to end of the "req.session.passport" object.
This is what is meant by serialization.
This allows the authenticated user to be "attached" to a unique session. 
This is why PassportJS library is used, as it abstracts this away and directly maintains authenticated users for each session within the "req.session.passport.user.{..}"
----------------------------
De-serialize User:
Now anytime we want the user details for a session, we can simply get the object that is stored in “req.session.passport.user.{..}”.

We can extract the user information from the {..} object and perform additional search our database for that user to get additional user information, or to simply display the user name on a dashboard.

passport.deserializeUser((userObj, done) => {
      done (null, userObj )
})
----------------
WHAT DOES DE SERIALIZE USER MEAN?
1. Passport JS conveniently populates the "userObj" value in the deserializeUser() with the object attached at the end of "req.session.passport.user.{..}"
2. When the done (null, user) function is called in the deserializeUser(), Passport JS takes this last object attached to "req.session.passport.user.{..}", and attaches it to "req.user" i.e "req.user.{..}"
In our case, since after calling the done() in "serializeUser" we had req.session.passport.user.{id: 123, name: "Kyle"}, 
calling the done() in the "deserializeUser" will take that last object that was attached to req.session.passport.user.{..} and attach to req.user.{..} 
i.e. req.user.{id: 123, name: "Kyle"}
3. So "req.user" will contain the authenticated user object for that session, and you can use it in any of the routes in the Node JS app. 
eg. 
app.get("/dashboard", (req, res) => {
res.render("dashboard.ejs", {name: req.user.name})
})
Step 5: Use passport.authenticate() as middleware on your login route
Now you can use passport.authenticate() function within the app.post() and specify the successRedirect and failureRedirect,

app.post ("/login", passport.authenticate('local', {
   successRedirect: "/dashboard",
   failureRedirect: "/login",
}))
The ‘local’ signifies that we are using ‘local’ strategy. If you were using google or facebook to authenticate, it would say ‘google’ or ‘facebook’ instead of ‘local’.

Step 6: Use the “req.isAuthenticated()” function to protect logged in routes
Passport JS conveniently provides a “req.isAuthenticated()” function, that

returns “true” in case an authenticated user is present in “req.session.passport.user”, or
returns “false” in case no authenticated user is present in “req.session.passport.user”.
The “req.isAuthenticated()” function can be used to protect routes that can be accessed only after a user is logged in eg. dashboard.

Create a function as follows,
------------
checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next() }
  res.redirect("/login")
}
------------
Now you can use this function as middleware to protect your routes as follows,
app.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard.ejs", {name: req.user.name})
})
Similarly, if the user is already logged in and attempt to access the “register” or “login” screen, you can direct them to the (protected) “dashboard” screen.

Create a function as follows,
-----------
checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) { 
       return res.redirect("/dashboard")
   }
  next()
}
------------
Now you can use this function as middleware to as follows,
app.get("/login", checkLoggedIn, (req, res) => {     
     res.render("login.ejs")
})
Step 7: Use “req.logOut()” to clear the sessions object
Passport JS also conveniently provides us with a “req.logOut()” function, which when called clears the “req.session.passport” object and removes any attached params.

This can be used to implement log out as follows,

app.delete("/logout", (req,res) => {
   req.logOut()
   res.redirect("/login")
   console.log(`-------> User Logged out`)
})
Note that when the req.logOut() function is called, it clears both the “req.session.passport” and the “req.user” i.e.

"req.session.passport" -------> {}
"req.user" ------->  undefined
Passport JS — In action
To really see what is happening under the hood, and what exactly passport is doing, we will use the following simple example.


The “login.ejs” and “dashboard.ejs” files are in the /views folder, and are very basic.

The “dashboard.ejs” simply will display the “name” of user logged in.
<h1> <%= name %> is logged in </h1>
The “index.ejs” is a simple form that accepts “username” and “password”
<h1> Login </h1>
<form action="/login" method="POST">
   USER <input type="text" name="username">
   PASSWORD <input type="password" name="password">
   <button type="submit"> Submit </button>
</form>
*/