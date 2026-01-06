import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv/config.js';

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

const app = express(); 
const PORT = process.env.PORT || 5001;

//middlewares
app.use(cors());
app.use(express.json()); //middleware that allows us to parse json files and acces req.body
app.use(rateLimiter);

//routes/endpoints
app.use("/api/notes", notesRoutes);

// start listening only when the db is connected [best practice]
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is listening at port ${PORT}`);
    });
})

