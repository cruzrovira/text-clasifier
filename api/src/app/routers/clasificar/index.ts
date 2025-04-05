import { Router } from "express"
import { z } from "zod"

const clasificarRouter = Router()

/**
 * @swagger
 * /clasificar:
 *   post:
 *     summary: Clasifica un texto con etiquetas
 *     description: Recibe un texto y una lista de etiquetas, y retorna el texto clasificado con las etiquetas proporcionadas.
 *     tags:
 *       - Clasificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               texto:
 *                 type: string
 *                 description: El texto a clasificar.
 *                 example: "Este es un ejemplo de texto."
 *               tags:
 *                 type: array
 *                 description: Lista de etiquetas asociadas al texto.
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Nombre de la etiqueta.
 *                       example: "Importante"
 *                     description:
 *                       type: string
 *                       description: Descripción de la etiqueta.
 *                       example: "Texto relevante para el análisis."
 *     responses:
 *       200:
 *         description: Retorna el texto clasificado con las etiquetas proporcionadas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "ok"
 *                 data:
 *                   type: object
 *                   properties:
 *                     texto:
 *                       type: string
 *                       example: "Este es un ejemplo de texto."
 *                     tags:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: "Importante"
 *                           description:
 *                             type: string
 *                             example: "Texto relevante para el análisis."
 */
clasificarRouter.post("/", (req, res, next) => {
  const body = z
    .object({
      texto: z.string(),
      tags: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
        }),
      ),
    })
    .parse(req.body)

  res.json({ status: "ok", data: body })
})

export default clasificarRouter
