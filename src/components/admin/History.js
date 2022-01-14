import { Category } from '@material-ui/icons';
import React, { useState, useContext } from 'react'
import { usePostContext } from '../PostContext'
import './Index.css'



const History = (props) => {
    const { posts, setPosts } = usePostContext();
    const { id, title, category, date } = props;

    return (

        <div>
            <div className='history'>
                <h5>{id}</h5>
                <h4>{title}</h4>
                <h5>{category}</h5>
                <p>{date}</p>
                <h5>4567</h5>
                <h6>View</h6>
            </div>
            <hr />
        </div>

    )
}

export default History