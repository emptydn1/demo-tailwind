export const getData = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=1&limit=20");
    const posts = await res.json();
    return posts;
};
