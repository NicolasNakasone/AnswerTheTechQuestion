import { Router } from "express";
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.route("/")
  .get((req, res, next) => {
    res.send("Soy Home!");
  });

export default router;
