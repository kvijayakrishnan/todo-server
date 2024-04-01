
const express = require('express')

const router = express.Router();


const {createOneTodo, listAllTodo, updateOneTodo, deleteTodo} = require('../controllers/todoControler.js')




router.post('/:userId', createOneTodo)

router.get('/:userId', listAllTodo)

router.put('/:id', updateOneTodo)

router.delete('/:id', deleteTodo)


module.exports = router;












