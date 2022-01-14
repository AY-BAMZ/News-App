
import React, { useState, useContext } from 'react'
import { usePostContext } from '../PostContext'
import './Index.css'




const Post = (props) => {
    const { posts, setPosts } = usePostContext();
    const { image, title, date, category, content } = props;
    
    return (

        <div style={{listStyle: 'none'}} className='allPost'>
            <img src={image} alt='' />
            <div className="info">
                <p>{category}  |   {date}</p>
            </div>
            <h2>{title}</h2>
            <h3>{content}</h3>
        </div>

    )
}

export default Post
