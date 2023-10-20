
const express = require('express')

const router = express.Router();


const {createOneTodo, listAllTodo, updateOneTodo, deletTodo} = require('../controllers/todoControler.js')




router.post('/:userId', createOneTodo)

router.get('/:userId', listAllTodo)

router.put('/:id', updateOneTodo)

router.delete('/:id', deletTodo)


module.exports = router;












