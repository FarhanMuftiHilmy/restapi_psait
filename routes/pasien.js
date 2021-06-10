const express = require('express')
const router = express.Router()
const Pasien = require('../models/Pasien')

// Getting all
router.get("/", async (req, res) => {
  try {
    const pasien = await Pasien.find()
    res.json(pasien)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
});
// get spesific data
router.get('/:id', getPasien, (req, res) => {
    res.send(res.pasien.nama)
})
// create data  
router.post('/', async (req, res) => {
    const pasien = new Pasien({
        nama: req.body.nama,
        penyakit: req.body.penyakit
    })
    try{
        const pasienBaru = await pasien.save()
        res.status(201).json(pasienBaru)
    } catch(err){
        res.status(400).json({message: err.message})
    }
})
// update spesific one data
router.patch('/:id', getPasien, (req, res) => {
  
})

// delete spesific data
router.delete('/:id', getPasien, async (req, res) => {
  try{
    await res.pasien.remove()
    res.json({message: 'Pasien dihapus'})
  } catch(err){
    res.status(500).json({message: err.message})
  }
})

async function getPasien(req, res, next){
  let pasien
  try{
    pasien = await Pasien.findById(req.params.id)
    if(pasien == null){
      return res.status(404).json({ message: "Pasien tidak ditemukan"})
    }
  } catch (err){
      return res.status(500).json({message: err.message})
    
  }
  res.pasien = pasien
  next()
}



module.exports = router