const mongoose = require("mongoose")


const pasienSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    penyakit: {
        type: String,
        required: true 
    },
    terakhirBelajar: {
        type: Date,
        required: true,
        default: Date.now
    }
    
}) 

const Pasien = mongoose.model('Pasien', pasienSchema)

module.exports = Pasien