import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import {
    fetchPostsAPI,
    createPostAPI,
    updatePostAPI,
    deletePostAPI,
} from "api";

export const getPosts = createAsyncThunk("post/getPosts", fetchPostsAPI);
export const createPost = createAsyncThunk("post/createPost", createPostAPI);
export const updatePost = createAsyncThunk("post/updatePost", updatePostAPI);
export const deletePost = createAsyncThunk("post/deletePost", deletePostAPI);

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
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.posts = current(state).posts.map((e) =>
                    e._id === action.payload._id ? action.payload : e
                );
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = current(state).posts.filter(
                    (e) => e._id !== action.payload.temp._id
                );
            });
    },
});

export default postSlice.reducer;
