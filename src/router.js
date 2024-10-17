import express from "express";

import {
    listarPokemones,
} from "./pokemonController.js";

const router = express.Router();

router.get("/pokemons", async (req, res) => {
    try {
        const pokemones = await listarPokemones()
        res.render("pages/pokemons", { pokemones });
    } catch (error) {
        const { status, message } = error;
        res.status(status || 500).json({ error: message });
    }
});



export default router;
