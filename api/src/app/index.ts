import router from "@/app/routers"
import { openapiSpecification } from "@/app/swagger"
import cors from "cors"
import express, { NextFunction, Request, Response } from "express"
import morgan from "morgan"
import swaggerUi from "swagger-ui-express"
import { ErrorHandler } from "./errorHandler"

const app = express()
app.disable("x-powered-by")
app.use(express.json())
app.use(cors())
app.use("/doc", swaggerUi.serve, swaggerUi.setup(openapiSpecification))
app.use(morgan("short", { skip: req => req.path.startsWith("doc") }))

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  ErrorHandler(err, req, res, next)
})

export { app }
