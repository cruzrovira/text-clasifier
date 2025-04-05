import { Router } from "express"

const router = Router()
/**
 * @swagger
 * /:
 *   get:
 *     summary: Verifica el estado del servidor
 *     description: Retorna un objeto JSON indicando que el servidor está funcionando correctamente.
 *     responses:
 *       200:
 *         description: El servidor está funcionando correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
router.get("/", (_req, res) => {
  res.json({ status: "ok" })
})

export default router
