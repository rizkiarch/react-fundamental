import { useEffect, useState } from "react";
import Article from "../components/Articles";
import postsData from "../posts.json"
import Search from "../components/Search";

function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) =>
          item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
      };

      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => setExternalPosts(json));
      },[])

    return (
        <>
         <h1>Simple Blog</h1>
         <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
        {posts.map((props, index) => (
                <Article {...props} key={index} />
            ))
        }
        <hr />
        <h3>External Post</h3>
        {externalPosts.map((item, index)=>(
          <div key={index}>{item.title}</div>
        ))}
        </>
    )
}
export default Homepage;