const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/books");

router.use("/api/books", apiRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;