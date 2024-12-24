import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiRespType, PokemonInitialState } from "../types";
import { fetchPokemon } from "./api";

const initialState: PokemonInitialState = {
    loading: false,
    data: [{
        name: "",
        url: ""
    }],
    error: null,
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPokemon.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPokemon.fulfilled, (state, action: PayloadAction<ApiRespType[]>) => {
            state.loading = false;
            state.data = action.payload
        });
        builder.addCase(fetchPokemon.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null;
        })
    },
})

export default pokemonSlice.reducer;