import React from "react";
import Post from "./Post";

const PostList = ({posts}) => {

    const postsItem = posts.map((post, index) => {
        return <Post post={post} key={index}/>
    });

    return(
        <>
        <h2>This is the list</h2>
        <ul>
            {postsItem}
        </ul>
        </>
    );
};

export default PostList;