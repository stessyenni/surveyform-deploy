import mongoose, { Schema } from 'mongoose'

// const {Schema, default: mongoose} = require('mongoose')
// const {String} = require('mongoose')

// creating a schema for the form data to be stored in the DB using the field names as headers. The data types are also 
// specified

const surveySchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Full names are Required'],
        trim: true
    },
    age: {
        type: String,
        required: [true, 'Age is Required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
        trim: true,
    },
    education: {
        type: String,
        required: [true, 'Education is Required'],
        trim: true,
    },
    department: {
        type: String,
        required: [true, 'Department is Required'],
        trim: true,
    },
    jobtitle: {
        type: String,
        required: [true, 'Job Title is Required'],
        trim: true,
    },
    jobtype: {
        type: String,
        required: [true, 'Job Type is Required'],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Survey = mongoose.models.Survey || mongoose.model('Survey', surveySchema)

export default Survey;