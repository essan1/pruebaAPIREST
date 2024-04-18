import fs from "fs";

const home = (req, res) => {
    res.send('hola mundo desde controller')
}

const mostrarBici = (req, res) => {
    const bicicletasJSON = JSON.parse(fs.readFileSync("./data/bicicletas.json", "utf-8"));
    res.send(bicicletasJSON);
}

export {
    mostrarBici,
    home
} 