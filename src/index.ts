import express, { Request, Response } from 'express'
require('dotenv').config();

import calculatorRoute from './calculator/calculator.route'

const app = express();
app.use(express.json());

app.get('/', (req:Request, res: Response)=>{
 res.status(200).json({ "slackUsername": "Badiru", "backend": true, "age": 23, "bio": "A passionate software engineer. Here to learn and relearn" });
})

app.use('/', calculatorRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`); })
