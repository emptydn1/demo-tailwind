import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostAPI } from "api";

export const getPosts = createAsyncThunk("post/getPosts", getPostAPI);

const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                console.log({ action });
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.error = action.payload;
                console.log({ action });
            });
    },
});

export default postSlice.reducer;
