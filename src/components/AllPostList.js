import React, { useState, useContext } from 'react'
import AllPost from './user/AllPost'
import { usePostContext } from './PostContext'
import './user/Index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const PostList = () => {
    const { posts, setPosts } = usePostContext();

    return (
        <div className='allPostListRow'>
            {posts.map(post => (
                <Link  to={"/landing/" + post.id}>    <AllPost {...post} key={post.id} /></Link>
            ))}
            <button type='button'>View more</button>
        </div>
    )
}

export default PostList