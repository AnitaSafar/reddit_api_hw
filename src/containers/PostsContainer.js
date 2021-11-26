import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";

const PostsContainer = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {getPosts()}, []);

    const getPosts = function() {
        fetch("https://www.reddit.com/r/javascript.json")
        .then(response => response.json())
        .then(posts => setPosts(posts.data.children));
    };

    return(
        <>
        <h1>Reddit Newsfeed</h1>
        <PostList posts={posts}/>
        </>
    );
};

export default PostsContainer;