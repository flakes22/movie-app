import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    movies: [],
    searchValue:''
}

const moviesSlice= createSlice({
    name:'movies',
    initialState,
    reducers:{
        setMovies: (state,action)=>{
            state.movies=action.payload;
        },
        setSearchValue:(state,action)=>{
            state.searchValue=action.payload;
        }
    }
})

export const { setMovies , setSearchValue } = moviesSlice.actions;

export default moviesSlice.reducer;