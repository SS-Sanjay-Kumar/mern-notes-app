import mongoose from "mongoose";


// Step 1: define the schema
const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },

        content:{
            type:String,
            required: true,
        },
    }, 
    {timestamps:true}, // automatically handles createdAt and updatedAt
);

// Step 2: Create a model based off the schema created at step 1
const Note = mongoose.model("Note", noteSchema);
// IMP: models should always be Capitalized(1st letter) and singular


export default Note;