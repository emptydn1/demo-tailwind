const url = "http://localhost:5000/posts";

export const fetchPostsAPI = async () => (await fetch(url)).json();
export const createPostAPI = async (newPost) =>
    (
        await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
                // "Content-Type": "multipart/form-data",
            },
            body: JSON.stringify(newPost),
        })
    ).json();

export const updatePostAPI = async (updatedPost) => {
    console.log("xxx", updatedPost);
    return (
        await fetch(`${url}/${updatedPost._id}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
        })
    ).json();
};

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
