const url = "http://localhost:5000/posts";
// const url = "https://picsum.photos/v2/list";

export const getPostAPI = async () => {
    return (await fetch(url)).json();
};
