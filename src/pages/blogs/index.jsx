import { Link, useLoaderData } from "react-router-dom";
import Search from "../../components/Search";
import { useState } from "react";

function Blog() {
    const initialPosts = useLoaderData();
    const [posts, setPosts] = useState(initialPosts);
    const [totalPosts, setTotalPosts] = useState(initialPosts.length);

    const onSearchChange = (value) => {
        const filteredPosts = initialPosts.filter((item) =>
          item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
      };
    return (
        <>
         <h3>External Post</h3>
         <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
        {posts.map((item, index)=>(
            <div key={index}>
                <Link to={`/blog/${item.id}`} >{item.title}</Link>
            </div>
        ))}
        </>
    )
}

export default Blog;