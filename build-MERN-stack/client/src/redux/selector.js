import { createSelector } from "@reduxjs/toolkit";

export const postsSelector = (state) => state.postSlice.posts;
export const postsErrorSelector = (state) => state.postSlice.error;
export const postsLoadingSelector = (state) => state.postSlice.loading;

export const postsFollowId = (id) =>
    createSelector(postsSelector, (posts) => {
        let temp = id ? posts.filter((e) => e._id === id)[0] : null;
        return temp;
    });
