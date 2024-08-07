const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact number"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email addressr"],
    },
    phone: {
        type: Number,
        required: [true, "Please add the contact phone number"],
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);