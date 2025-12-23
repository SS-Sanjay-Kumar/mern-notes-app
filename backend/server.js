import express from 'express';

const app = express(); 
const port = 5001;

app.get("/api/notes", (req, res)=>{
    res.send("Notes api is working");
});

app.listen(port, ()=>{
    console.log(`Sever is listening at port ${port}`);
});

