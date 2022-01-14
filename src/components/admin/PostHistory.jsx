import React, { useState, useContext } from 'react'
import History from './History'
import { usePostContext } from '../PostContext'
import './Index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

const PostHistory = () => {
    const { posts, setPosts } = usePostContext();

    return (
        <div className='allPostHistory'>
            <div className='historyTitle'>
                <div className='title'>POST HISTORY</div>
                <div className='history'>
                    <h5>NO</h5>
                    <h4>TITLE</h4>
                    <h5>CATEGORY</h5>
                    <p>DATE</p>
                    <h5>ENGAGEMENTS</h5>
                    <h6>CHECK</h6>
                </div>
                <hr />
            </div>
            <div>
                {posts.map(post => (
                    <History {...post} key={post.id} />
                ))}
            </div>
        </div>
    )
}

export default PostHistory