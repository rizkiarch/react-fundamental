import { useEffect, useState } from "react";
import Article from "../components/Articles";
import postsData from "../posts.json"
import Search from "../components/Search";

function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);

    const onSearchChange = (value) => {
        const filteredPosts = postsData.filter((item) =>
          item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
      };

    return (
        <>
         <h1>Simple Blog</h1>
         <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
        {posts.map((props, index) => (
                <Article {...props} key={index} />
            ))
        }
        </>
    )
}
export default Homepage;