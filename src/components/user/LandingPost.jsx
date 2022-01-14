import React, { useState, useContext } from 'react'
import { usePostContext } from '../PostContext'
import Header from './Header'
import Footer from './Footer'
import MainPost from './landingPost/MainPost'
import { usePost } from '../hooks/usePost';
import {
    useParams
} from "react-router-dom";



function LandingPost() {
    let { id } = useParams();
    let { getPost } = usePost()
    const { posts } = usePostContext();

    return (
        <div>
            <Header />
            <MainPost {...getPost(id)} />
            <Footer />
        </div>
    )
}

export default LandingPost
