const mongoose =require("mongoose");
const issueSchema=new mongoose.Schema({
  book:{type:mongoose.Schema.Types.ObjectId,ref:"Book",required:true},
  member:{type:mongoose.Schema.Types.ObjectId,ref:"Member",required:true},
  issueDate:{type:Date,default:Date.now},
  returnDate:{type:Date,default:null},
  status:{type:String,enum:["Issued","Returned"],default:"Issued"}
});
module.exports=mongoose.model("Issue",issueSchema);