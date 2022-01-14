
import React, { useState, useContext } from 'react'
import { usePostContext } from '../PostContext'
import './Index.css'



const Post = (props) => {
    const { posts, setPosts } = usePostContext();
    const { image, title, date } = props;
    
    return (

        <div className='postSlider'>
            <img src={image} alt='' />
            <h3 className="legend">{title}</h3>
            <p>{date}</p>
        </div>

    )
}

export default Post
