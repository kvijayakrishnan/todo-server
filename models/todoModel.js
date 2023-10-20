const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"User"
    },
    title:{
        type:String,
        require:true,
    },

    description:{
        type:String,
        require:true,
    },

    date:{
        type:Date,
        default:Date.now
    }
});

const Todo = mongoose.model('todo', TodoSchema)


module.exports =Todo;

















