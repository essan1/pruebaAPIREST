import express from "express";
import { mostrarBici, home } from "../controller/controller.js";
const router = express.Router();


router.get("/", home);

router.get("/bicicletas", mostrarBici)


//creamos nuestra ruta generica, simeprea al final
router.get("*", (req, res) => {
  res.status(400);
  res.send("<h1><center>404 ERROR -- Pagina No Encontrada</center></h1>");
});

export default router;
