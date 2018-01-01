const express = require("express");
const app = express();
const router = express.Router();
const Merror = require('../dist/index').Merror;
const MerrorMiddleware = require('../dist/index').MerrorMiddleware;

// Register Routing Module
app.use("/", router);

// Router
router.get("/profile", function(req, res, next) {
  // Pay attention that we should wrap our error object
  // with next() in order to make it travel to our middleware
  // which is registered after router module
    return next(new Merror(401, "Unauthorized Access! Custom Message!", {code: 1001,status: "REFRESH_TOKEN"} ));
});

// Merror Middleware
app.use(MerrorMiddleware());

// Router Module
app.listen(3000, () => console.log("Example app listening on port 3000!"));