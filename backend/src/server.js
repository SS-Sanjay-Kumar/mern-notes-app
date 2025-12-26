import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv/config.js';
import rateLimiter from './middleware/rateLimiter.js';

const app = express(); 
const PORT = process.env.PORT || 5001;


//middlewares
app.use(rateLimiter);
app.use(express.json()); //middleware that allows us to parse json files and acces req.body

//routes/endpoints
app.use("/api/notes", notesRoutes);

// start listening only when the db is connected [best practice]
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening at port ${PORT}`);
    });
})

