const express = require('express');
const router = express.Router();
const { addUser ,getUsers,getUser,editUser,deleteUser} = require('../controllers/user-controller.js');


router.post('/add', addUser);
router.get('/add', (req, res) => {
    res.send("hello world");
});
router.get('/all', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;