const express = require("express");
const router = express.Router();


    // this gets hit at /api/v1/tasks/from
router.route('/from').get((req,res) => {
    res.send("from task.js")
})

module.exports = router;