    const Book = require('../models/Book');
const getAllBooks = async (req,res)=>
{
    try {
        const allbooks = await Book.find({});
        if (allbooks?.length>0) {
            res.status(200).json({
                succes : true,
                message : 'list of books fetched successful',
                data : allbooks
            })
           
        } else {
            res.status(404).json({
                succes : false,
                message : 'no books found',

            })
        }
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            succes : false,
            message : 'server error',
            
        });
        
    }

};
const getSingleBookById = async (req,res)=>{
    try {
        const currentBookId = req.params.id;
        const bookDetailsById = await Book.findById(currentBookId);
        if (!bookDetailsById) {
            return res.status(404).json({
                succes : false,
                message : 'book with current ID not found! please try with different ID',
            })
            
        }
        res.status(200).json({
            succes : true,
            data : bookDetailsById,
        })
        
    } catch (error) {
        console.log(error);
        
    }

};
 const AddNewBooks = async (req,res)=>
   {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if (newlyCreatedBook) {
            res.status(201).json({
                succes: true,
                message: 'book creatd successfully',
                data: newlyCreatedBook
            });
            
        }
        
    } catch (error) {
        console.log(error);
        
    }
   };

 

 const updateBooks = async (req,res)=>{
    try {
        const updateBookByID = req.body;
        const getCurrentBookId = req.params.id;
        const bookDetailsById = await Book.findByIdAndUpdate(getCurrentBookId,updateBookByID,
            {new : true,
        });
        if (!updateBooks) {
            return res.status(404).json({
                succes : false,
                message : 'book with current ID not found! please try with different ID',
                data : updateBooks,
            })
    } 
    res.status(200).json({
        succes : true,
        message : 'book updated successfully',
        data : bookDetailsById,
    })
}
    catch (error) {
       console.log(error);

    }
     
 };
 const deleteBooks = async (req,res)=>{
    try {
        const deleteCurrentBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(deleteCurrentBookId)
        if (!deleteBooks) {
            return res.status(404).json({
                succes : false,
                message : 'book with current ID not found! please try with different ID',
            })
            
        }
        res.status(200).json({
            succes : true,
            message : 'book deleted successfully',
            data : deletedBook,
        })
        
    } catch (error) {
        console.log(error);
        
    }

 };
 module.exports = { getAllBooks,getSingleBookById, AddNewBooks, updateBooks, deleteBooks};