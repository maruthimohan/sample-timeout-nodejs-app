var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    let timeout = (req.query.timeout) ? parseInt(req.query.timeout) : 0;
    setTimeout((() => {
        res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
    }), timeout * 1000);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});
