const asyncHandler = require('express-async-handler')
const goalModel = require('../model/goalModel')

const Goal = require('../model/goalModel')


// @desc get goals
const getGoals = asyncHandler(async (req, res) => { 
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc set goals
const setGoal = asyncHandler(async (req, res) => { 
    if (!req.body.text){
        res.status(400)
        throw new Error( 'please add a text field')
    }

 const goal = await Goal.create({
     text: req.body.text,
 })
 
    res.status(200).json(goal)
})

// @desc update goals
const updateGoal = asyncHandler(async (req, res) => { 
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await goalModel.findByIdAndUpdate(req.params.id, req.body, { 
        new: true,
    })
    
    res.status(200).json(updatedGoal)
})

// @desc delete goals
const deleteGoal =asyncHandler( async (req, res) => { 

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()

    res.status(200).json({ id: req.params.id})
})


module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal,
}
