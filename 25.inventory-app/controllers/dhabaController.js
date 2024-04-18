const Dhaba = require('../models/dhaba')
const asyncHandler = require('express-async-handler')

exports.dhaba_list = asyncHandler(async (req, res, next) => {
    res.send('Dhaba List')
})

exports.dhaba_details = asyncHandler(async (req, res, next) => {
    res.send('Dhaba Details')
})