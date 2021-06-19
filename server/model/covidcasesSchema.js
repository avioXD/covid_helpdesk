const mongoose = require('mongoose');
const casesSchema = mongoose.Schema({
    newcase: {
        type: Number,
        require: true
    },
    active: {
        type: Number,
        require: true
    },
    deaths: {
        type: Number,
        require: true
    },
    recovered: {
        type: Number,
        require: true
    },
    update: Date,
})

const Cases = mongoose.model("CASE", casesSchema);
module.exports = Cases;