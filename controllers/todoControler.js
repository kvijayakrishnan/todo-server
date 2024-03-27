
const AppTodo = require('../models/todoModel.js')


exports.createOneTodo = (req, res) =>{
    const userID = req.params.userId;
    console.log(req.params.userId)
    req.body.userId = userID;
    AppTodo.create(req.body)
        .then((todo) =>{
            console.log(todo)
            return res.json({todo, msg:"todo created"})
        })
        .catch((err) =>{
            res.status(404).json({
                msg:"Not added",
                err
            })
        })
}


exports.listAllTodo = (req, res) =>{
    const userID = req.params.userId;

    req.body.userID = userID;
    AppTodo.find({ userId:userID })
        .then((todo) =>{
            console.log(todo)
            res.json(todo)
        })
        .catch((err) =>{
            res.status(404).json({
                msg:"No data added"
            })
        })
}


exports.updateOneTodo = (req, res) =>{
    // console.log(req.params, req.body)
    AppTodo.findByIdAndUpdate(req.params.id, req.body,{ new: true })
        .then((todo) =>{
            console.log(todo)
            res.json(todo)
            
        })
        .catch((err) =>{
            console.log(err)
            res.status(404).json({msg:"Not update"})
        })
}



exports.deleteTodo = (req, res) =>{
    AppTodo.findByIdAndRemove(req.params.id)
        .then((todo) =>{
            console.log({todo})
            res.status(201).send({msg:"Deleted successfully"})
        })
        .catch((err) =>{
            console.log(err)
            res.status(400).send({msg:"something went wrong, delete is unsuccess"})
        })
}



