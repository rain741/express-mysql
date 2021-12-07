const express = require("express");
const router = express.Router();

const userRouter = require("./user.routes")
router.get("/", (req, res) => {
  res.json("dari express");
});

router.use("/user", userRouter)
module.exports = router;