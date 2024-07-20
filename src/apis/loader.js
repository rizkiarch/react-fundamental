export const post = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const getPostById = ({ params }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};