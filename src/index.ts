import express, { Request, Response } from 'express'
require('dotenv').config();

const app = express();

app.use('/', (req:Request, res: Response)=>{
 res.status(200).json({ "slackUsername": "Badiru", "backend": true, "age": 23, "bio": "A passionate software engineer. Here to learn and relearn" });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`); })
