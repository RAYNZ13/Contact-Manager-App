const express = require("express");  
const router = express.Router();
const {
    getContacts, 
    createContacts, 
    getContact, 
    putContact, 
    deleteContact
} = require("../controllers/contactController")

router.route("/").get(getContacts).post(createContacts)

router.route("/:id").get(getContact).put(putContact).delete(deleteContact)

module.exports = router;