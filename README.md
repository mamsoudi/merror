![Merror](https://github.com/mamsoudi/merror/raw/master/resources/logo-150.png "Merror")
[![Build Status](https://travis-ci.org/mamsoudi/merror.svg?branch=master)](https://travis-ci.org/mamsoudi/merror)

# Merror 

Developing REST APIs with Express, I was always looking for a clean way to send HTTP error responses along with the data I wanted, not only to allow clients to know which error has happened but to provide the information I wanted.

Express allows you to handle errors but doesn't return Error objects yet renders pages containing error information which is not so useful when developing REST APIs. Error information should be sent to the clients in JSON format so that they can process it and show it to users. So....

Here's Merror (/ˈmɪrə/). A simple wrapper around JavaScript Error objects with a middleware for Expressjs. Merror allows you to define a new HttpError object when you need in your controller. The object then will be passed to the middleware to be processed and sent to the client.

## Usage

Using Merror is easy and straight-forward. Register `MerrorMiddleware` in your Expressjs application as a middleware **after registering router module** and start constructing Merror Objects whenever you hit an error in your controllers. Let's see an example:

```js
const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();

// Some other middleware
app.use(cors());

// Register Routing Module
app.use("/", router);

// Router
router.post("/profile", function(req, res) {
  // Pay attention that we should wrap our error object
  // with next() in order to make it travel to our middleware
  // which is registered after router module
    return next(new Merror(401, "Unauthorized Access! Custom Message!", {code: 1001,status: "REFRESH_TOKEN"} ));
});


// Merror Middleware
app.use(MerrorMiddleware());

// Router Module
app.listen(3000, () => console.log("Example app listening on port 3000!"));

```

If we make a request to `http://localhost:3000/profile` we will see this in the body of the response:

```JSON
{
  "success": false,
  "statusCode": 401,
  "error": "Unauthorized",
  "message": "Unauthorized Access!",
  "properties": {
    "code": 1001,
    "status": "REFRESH_TOKEN"
  }
}
```

> _**NOTE:**_
> Please pay attention that you should register the middleware after registering routes and also wrap constructed error with next() function and return it in order for Merror to properly work.


## API

### `new Merror(statusCode, message, [properties])`

Creates a new `Merror` object with given `statusCode` and `message`. You're free to take control of what you pass as `properties` it will be included in the response.

```js
app.post("/login", function(req, res) {
    return next(new Merror(500, "Internal Server Error", {code: 1021,status: "USER_NOT_FOUND"} ));
});
```

Assuming we have [`express-validator`](https://github.com/ctavan/express-validator) middleware in our application we can do this:

```js
app.post("/login", function(req, res) {
  req.assert("email", "Provided email is not correct").isEmail().notEmpty();
  req.assert("password", "Password is not valid").isLength({ min: 8 }).notEmpty();

  const errors = req.validationErrors(true);

  if (errors) {
    return next(new HttpError(403, "Authentication Failed. Invalid Email or Password.", errors));
  }

  // Rest of our code to find user etc.
});
```

Now if we POST an invalid email to this route we can see this in the response: 

```JSON
{
    "success": false,
    "statusCode": 403,
    "error": "Forbidden",
    "message": "Authentication Failed. Invalid Email or Password.",
    "properties": {
        "email": {
            "location": "body",
            "param": "email",
            "msg": "Provided email is not correct",
            "value": false
        }
    }
}
```

### `MerrorMiddleware()`
Returns a simple handler that takes errors constructed in our router and sends a response with corresponding `statusCode`, `message` and `properties` if provided.

```js
// Router Module
app.get('/', (req, res) => next(new Merror(404, "Not Found!")))

// Register Middleware here after all routes
app.use(MerrorMiddleware());
```

## License

This project is licensed under MIT. Feel free to fork, change and use it however you like.

## Contribution

If you feel there's something that could be better in this module make sure to fork, make changes and make a new PR with full description of what you've changed. I'll make sure to review it.
