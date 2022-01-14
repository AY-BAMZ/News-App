import React, { useContext } from 'react'
import { usePostContext } from '../PostContext';

export const usePost = () => {

    const {posts, setPosts} = usePostContext();
    const addPost = (product) => {
        setPosts(prevPosts => [...prevPosts, { ...product }])
    }

    const deletePost = (id) => {
        console.log(id)
        let postItems = posts.filter(prevPost => prevPost.id !== id);

        // console.log(PostItems)

        setPosts([...postItems])
    }

    const getPost = (id) => {
        const filtered = posts.filter(post => post.id === parseInt(id));
        return filtered[0];
    }
    return { deletePost, addPost, getPost }
}
