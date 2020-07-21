const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({

    name: { type: String, required: [true, 'O campo nome é necessário'] },
    email: { type: String, required: [true, 'O email é necessário'] },
    phone: { type: String }
    
})

module.exports = mongoose.model('Contact', contactSchema)