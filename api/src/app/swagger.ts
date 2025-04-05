import swaggerJsdoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "hola mundo",
      version: "1.0.0",
      summary: "A simple API to classify text using AI",
    },
  },
  apis: ["./**/*.{js,ts}"],
}

const openapiSpecification = swaggerJsdoc(options)

export { openapiSpecification }
