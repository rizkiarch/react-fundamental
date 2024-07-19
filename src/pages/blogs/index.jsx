import { useEffect, useState } from "react";

function Blog() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => setPosts(json));
      },[])

    return (
        <>
         <h3>External Post</h3>
        {posts.map((item, index)=>(
          <div key={index}>{item.title}</div>
        ))}
        </>
    )
}

export default Blog;