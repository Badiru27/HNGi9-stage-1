import { Request, Response } from "express";

enum operation {
  SUBTRACTION = "subtraction",
  ADDITION = "addition",
  MULTIPLICATION = "multiplication",
}

export async function calculatorController(req: Request, res: Response) {
  const { operation_type, x, y } = req.body;

  switch (operation_type.toLowerCase()) {
    case operation.ADDITION:
      return res
        .status(200)
        .json({
          slackUsername: "Badiru",
          result: x + y,
          operation_type: operation.ADDITION,
        });
    case operation.SUBTRACTION:
      return res
        .status(200)
        .json({
          slackUsername: "Badiru",
          result: x - y,
          operation_type: operation.SUBTRACTION,
        });
    case operation.MULTIPLICATION:
      return res
        .status(200)
        .json({
          slackUsername: "Badiru",
          result: x * y,
          operation_type: operation.MULTIPLICATION,
        });
    default:
      return res.sendStatus(403);
  }
}
