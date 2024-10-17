import fs from 'fs';

export const listarPokemones = async () => {
    try {
        return JSON.parse(fs.readFileSync("./src/resources/pokedex.json").toString());
    } catch (error) {
        console.log(error);
        throw { status: 500, message: "Error al obtener pokemones" };
    }
};






