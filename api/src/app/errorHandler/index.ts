import ServerError from "@/app/utils/serverError"
import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod"

function ErrorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof ServerError) {
    res.status(err.status).json({
      status: "error",
      message: err.message,
      data: err.data,
    })
  }
  if (err instanceof ZodError) {
    console.error(" es un error de validación")
    res.status(400).json({
      status: "error",
      message: "Validation failed",
      data: err.issues,
    })
  }

  if (err instanceof Error) {
    res.status(500).json({
      status: "error",
      message: err.message,
      data: err.message,
    })
  }

  res.status(500).json({
    status: "error",
    message: "Internal server error",
    data: String(err),
  })
}

export { ErrorHandler }
