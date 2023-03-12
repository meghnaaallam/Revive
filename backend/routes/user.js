//initializing required modules
const express = require('express');
const router = express.Router(); 

//importing functions from the files
const {signup, signin, logout, singleUser } = require("../controllers/user")

//routing requests for signin, signout, logout
router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', logout );

//routing requests for singleuser
router.get('/user/:id', singleUser );

//exporting all the route
module.exports = router;


