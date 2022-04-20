const asyncHandler = require('express-async-handler')


// @desc get goals
const getGoals = asyncHandler(async (req, res) => { 
    res.status(200).json({message: 'Get goals'})
})

// @desc set goals
const setGoal = asyncHandler(async (req, res) => { 
    if (!req.body.text){
        res.status(400)
        throw new Error( 'please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
})

// @desc update goals
const updateGoal = asyncHandler(async (req, res) => { 
    res.status(200).json({message: `update goal ${req.params.id }`})
})

// @desc delete goals
const deleteGoal =asyncHandler( async (req, res) => { 
    res.status(200).json({message: `Delete goals ${req.params.id }`})
})


module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal,
}
