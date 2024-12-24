import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk("fetchPokemon", async (limit: number) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/?` + new URLSearchParams({ limit: limit.toString() }));
    const formattedResp = await resp.json();
    return formattedResp.results;
})