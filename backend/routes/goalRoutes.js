const express = require("express");
const router = express.Router();
const { getGoals, setGoals } = require("../Controllers/goalController");

router.get("/", getGoals);
router.post("/", setGoals);

router.put("/", (req, res) => {
  res.json({
    message: "Menambahkan method Put",
  });
});

module.exports = router;
