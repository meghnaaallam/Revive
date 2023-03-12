//initializing required modules
const express = require('express');
const router = express.Router(); 

//importing functions from the files
const {signup, signin, logout, singleUser, userProfile } = require("../controllers/auth");
const {isAuthenticated} = require("../middleware/auth");

//routing requests for signin, signout, logout
router.post('/signup', signup );
router.post('/signin', signin );
router.get('/logout', logout );

//routing requests for authenticated user's profile & singleuser
router.get('/getme', isAuthenticated,  userProfile );
router.get('/user/:id', singleUser );

//exporting all the routes
module.exports = router;
