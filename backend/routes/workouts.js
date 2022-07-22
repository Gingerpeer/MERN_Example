const express = require('express')
const { 
  getSingleWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout
    } = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
// require auth for all workouts routes
router.use(requireAuth)
// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id',getSingleWorkout)

// POST a new workout 
router.post('/', createWorkout)
// DELETE a workout
router.delete('/:id',deleteWorkout)
// UPDATE a single workout
router.patch('/:id',updateWorkout)

module.exports = router