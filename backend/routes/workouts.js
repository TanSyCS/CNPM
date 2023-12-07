const express = require('express')
const router = express.Router()
const User = require('../modul/user')
//GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all workouts' })
})

//GET a single workout

router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET a single workouts' })
})
//POST a new workout
router.post('/', async (req, res) => {
  const {
    name,
    mssv,
    khoa,
    birth,
    sex,
    address,
    email,
    phone,
    password,
    type,
  } = req.body
  try {
    const newuser = await User.create({
      name,
      mssv,
      khoa,
      birth,
      sex,
      address,
      email,
      phone,
      password,
      type,
    })
    res.status(200).json(newuser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})
//DELETE a new workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a new workout' })
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a workout' })
})

module.exports = router
