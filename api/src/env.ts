import dotenv from "dotenv"
dotenv.config()

import { z } from "zod"
const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
})

let env: z.infer<typeof envSchema>

try {
  env = envSchema.parse(process.env)
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("Env error de validación :", error.errors)
  }
  throw error
}

export default env
