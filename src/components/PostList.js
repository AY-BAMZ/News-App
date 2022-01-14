import React, { useState, useContext } from 'react'
import Post from './user/Post'
import { usePostContext } from './PostContext'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const PostList = () => {
    const { posts, setPosts } = usePostContext();

    const customRenderThumb = (children) =>
        children.map((item) => {
            const { image } = item.props ;
            return <img src={image} />;
        });

    return (
        <Carousel showArrows={false}
            renderThumbs={customRenderThumb}
            autoPlay={true}
            infiniteLoop
        >
            {posts.map(post => (
                <Post {...post} key={post.id} />

            ))}
        </Carousel>
    )
}

export default PostList