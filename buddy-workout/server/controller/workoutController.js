const {Workout} = require('../db/WorkoutModel');
const mongoose = require('mongoose');


// get all workouts
const getAllWorkout = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})
        return res.status(200).json((workouts));
    } catch (e) {
        return res.status(400).json({mssg: e.message});
    }
}

// get a single workout
const getSingleWorkout = async (req, res) => {
    const workoutID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(workoutID)){
        return res.status(400).json({mssg: 'No such workout'});
    }
    try {
        const workout = await Workout.findById(workoutID);
        return res.status(200).json(workout);
    } catch (e) {
        return res.status(400).json({mssg: 'ID not found'});
    }
}

// create new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body;
    try {
        const work = await Workout.create({title, reps, load})
        return res.status(200).json({mssg: work})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const workoutID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(workoutID)){
        return res.status(400).json({mssg: 'No such workout'});
    }
    try {
        const workout = await Workout.findByIdAndDelete({_id: workoutID});
        if (workout) {
            return res.status(200).json({mssg: 'Workout Deleted'});
        }
    } catch (e) {
        return res.status(400).json({mssg: 'ID not found'});
    }
}

// update a workout
const updateWorkout = async (req, res) => {
    const workoutID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(workoutID)){
        return res.status(400).json({mssg: 'No such workout'});
    }
    try {
        const workout = await Workout.findOneAndUpdate({_id: workoutID},{
            ...req.body
        });
        if (workout) {
            return res.status(200).json({mssg: "Workout updated"});
        } else {
        return res.status(400).json({mssg: 'No such workout'});
        }
    } catch (e) {
        return res.status(400).json({mssg: 'ID not found'});
    }
}

module.exports = {
    getAllWorkout,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}