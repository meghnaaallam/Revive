//initializing required modules
const express = require('express');
const router = express.Router(); 

//importing functions from the files
const {addDraft,deleteDraft,postDraft} = require ("../controllers/drafts")
const {isAuthenticated} = require("../middleware/auth");

//routing requests for adding, updating, deleting Drafts
router.get('/add',addDraft);
router.delete('/view:id',deleteDraft);
router.post('/add',postDraft)

//exporting all the routes
module.exports = router;