import { Request, Response } from "express";
import { getOperationType, operationType } from "./calculator.helper";



export async function calculatorController(req: Request, res: Response) {
  const operation_type:string = req.body.operation_type;
  const x:number = parseInt(req.body.x);
  const y:number = parseInt(req.body.y);
  
  const operation = getOperationType(operation_type.toLocaleLowerCase());
  

  switch (operation) {
    case operationType.ADDITION:
      return res
        .status(200)
        .json({
          "slackUsername": "Badiru",
          "result": x + y,
          "operation_type": operationType.ADDITION,
        });
    case operationType.SUBTRACTION:
      return res
        .status(200)
        .json({
          "slackUsername": "Badiru",
          "result": x - y,
          "operation_type": operationType.SUBTRACTION,
        });
    case operationType.MULTIPLICATION:
      return res
        .status(200)
        .json({
          "slackUsername": "Badiru",
          "result": x * y,
          "operation_type": operationType.MULTIPLICATION,
        });
    default:
      return res
      .sendStatus(400)

  }
}
