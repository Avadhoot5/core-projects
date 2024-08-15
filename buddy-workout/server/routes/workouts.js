const express = require('express');
const router = express.Router();
const {
    getAllWorkout,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController');

// Get all workouts
router.get('/', getAllWorkout)

// Get single workout
router.get('/:id', getSingleWorkout)

// Post a new workout
router.post('/', createWorkout);

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)


module.exports = router