const express = require('express');
const router = express.Router();

//members route
router.get('/register.html',  (req, res) => {

    res.render("user/register", req.decoded); 

});

module.exports = router;