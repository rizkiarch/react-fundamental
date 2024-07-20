import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function SinglePost() {
    const posts = useLoaderData();
      return (
        <>
            <h3>{posts?.title}</h3>
            <div>{posts?.body}</div>
        </>
      )
}

export default SinglePost;