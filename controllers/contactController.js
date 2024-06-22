//@desc get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req,res) => {
    res.status(200).json({message : "Get all contacts"});
};

//@desc Create new contacts
//@route POST /api/contacts
//@access Public

const createContacts = (req,res) => {
    res.status(201).json({message : "Create new contacts"});
};

//@desc get contact for a single id
//@route GET /api/contacts/{id}
//@access Public

const getContact = (req,res) => {
    res.status(200).json({message : `Get contact for ${req.params.id} `});
};

//@desc update individual contact
//@route put /api/contacts/{id}
//@access Public

const putContact = (req,res) => {
    res.status(200).json({message : `Update contact for ${req.params.id} `});
};

//@desc delete individual contact
//@route DELETE /api/contacts/{id}
//@access Public

const deleteContact = (req,res) => {
    res.status(200).json({message : `Delete contact for ${req.params.id} `});
};

module.exports = {getContacts, createContacts, getContact, putContact, deleteContact};