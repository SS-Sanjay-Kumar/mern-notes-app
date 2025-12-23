import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv/config.js';

const app = express(); 
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json()); //middleware that allows us to parse json files and acces req.body
app.use("/api/notes", notesRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`);
});
