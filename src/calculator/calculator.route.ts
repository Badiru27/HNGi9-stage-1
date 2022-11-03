import express from 'express';
import validate from '../middlewares/validateRequest';
import { calculatorController } from './calculator.controller';
import { calculatorSchema } from './calculator.scema';

const router = express.Router();

router.post('/', validate(calculatorSchema), calculatorController);

export default router;