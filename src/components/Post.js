import React from "react";

const Post = ({post}) => {

    return(
        <li>
            <p>
                <a href={post.data.url}>{post.data.title}</a>
            </p>
            <p>Author: {post.data.author}</p>
        </li>
    )
};

export default Post;