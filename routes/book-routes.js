const express= require('express');
const {getAllBooks,getSingleBookById,updateBooks,deleteBooks, AddNewBooks} = require('../controllers/book-controller');
// create exoress router
const router = express.Router();
// all the routes taht are related to books only
router.get('/',getAllBooks);
router.get('/get/:id',getSingleBookById);
router.post('/add', AddNewBooks);
router.put('/update/:id', updateBooks);
router.delete('/delete/:id',deleteBooks);
module.exports = router