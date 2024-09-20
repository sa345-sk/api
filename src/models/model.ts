import mongoose from "mongoose";
const Schema = mongoose.Schema
const InventorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
}, {timestamps: true})
const ScheduleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true})
const StaffSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    dateEmployed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {timestamps: true})
const PateintSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
}, {timestamps: true})
export const pateint = mongoose.model('Pateint', PateintSchema)
export const staff = mongoose.model('Staff', StaffSchema)
export const schedule = mongoose.model('Schedule', ScheduleSchema)
export const inventory = mongoose.model('Inventorie', InventorySchema)
module.exports = {pateint: pateint, staff: staff, schedule: schedule, inventory: inventory}