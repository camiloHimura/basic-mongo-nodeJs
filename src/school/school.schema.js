const mongoose = require("mongoose");

const school = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
    },
    students: {
        type: Number,
        required: true
    },
    isMilitar: {
        type: Boolean,
        default: false
    },
    staff: [{type: String}]
})

//virtual:
school.virtual("staffCount")
    .get(function() { return this.staff.length})

//Hook Synchronous
school.pre("save", function() { console.log("before save")})
school.post("save", function() { console.log("post save")})

//Hook ASynchronous
school.post("find", function(doc, next) { 
                            setTimeout(() => {
                                console.log("setTimeout post save", doc); next()
                            }, 330)
                                    });

//compound index
school.index({isMilitar: 1, name: 1}, 
             {unique: true})

school.post('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'));
    } else {
        next();
    }
});

module.exports = school;