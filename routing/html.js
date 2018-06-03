var path = require("path");

module.exports = function(app) {
    app.get("/friends", function(req, res) {
        res.sendfile(path.join(__dirname, "../public/home.html"));
    });
};