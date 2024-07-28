const asyncHandler = require('express-async-handler'); //to automatically handle the exceptions 
const Contact = require("../model/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});   

//@desc Create new contacts
//@route POST /api/contacts
//@access Public

const createContacts = asyncHandler(async (req,res) => {
    console.log("The Request Body : ",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

//@desc get contact for a single id
//@route GET /api/contacts/{id}
//@access Public

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc update individual contact
//@route put /api/contacts/{id}
//@access Public

const putContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedContact);
});

//@desc delete individual contact
//@route DELETE /api/contacts/{id}
//@access Public

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.deleteOne()
    res.status(200).json(contact);
});

module.exports = {getContacts, createContacts, getContact, putContact, deleteContact};