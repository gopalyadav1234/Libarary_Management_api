const Book=require("../models/Book.js")

 const addBook=async(req,res)=>{
  try{
    const book=await Book.create(req.body);
    res.json({message:"book added successfully",book})
  }catch(error){
    res.json({message:error.message})
  }
 }
 //get all books
 const getBooks=async(req,res)=>{
   try{
    const books=await Book.find();
    res.json(books)
  }catch(error){
    res.json({message:error.message})
  }
 }
 const getBook=async(req,res)=>{
  try{
    const book=await Book.findById(req.params.id);
    res.json(book)
    if(!book){
      return res.json({message:"book not found"})
    }
  }catch(error){
    res.json({message:error.message})
  }
 }
 const updateBook=async(req,res)=>{
  try{
    const book=await Book.findByIdAndUpdate(req.params.id,req.body);
    res.json(book)
    if(!book){
      return res.json({message:"book not found"})
    }
  }catch(error){
    res.json({message:error.message})
  }
 }
 const deleteBook=async(req,res)=>{
  try{
    const book=await Book.findByIdAndDelete(req.params.id);
    res.json({message:"Book deleted successfully"})
    if(!book){
      return res.json({message:"book not found"})
    }
  }catch(error){
    res.json({message:error.message})
  }
 }
 module.exports={
  addBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
 }