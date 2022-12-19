const router = require("express").Router();

router.route("/page1").get((req, res) => {
	console.log("page1을 실행!");
});