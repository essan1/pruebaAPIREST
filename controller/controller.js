import fs from "fs";

const mostrarBici = (req, res) => {
    const bicicletasJSON = JSON.parse(fs.readFileSync("./data/bicicletas.json", "utf-8"));
    res.send(bicicletasJSON);
}

export {
    mostrarBici
} 