import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import './Index.css'
import ScheduleDate from './materials/ScheduleDate'
import ImageCrop from './materials/samo'
import { usePostContext } from '../PostContext';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function SchedulePost() {
    const [newPost, setnewPost] = useState({ image: '', title: "", category: "", content: "", date: "" })

    const { setPosts } = usePostContext()

    const handleSetNewPost = (val, identifier) => {
        switch (identifier) {
            // case 'image': setImageUrl()
            //     break
            case 'title':
                setnewPost(current => {
                    return { ...current, title: val }
                });
                break;
            case 'category':
                setnewPost(current => {
                    return { ...current, category: val }
                });
                break;
            case 'content':
                setnewPost(current => {
                    return { ...current, content: val }
                });
                break;
            case 'date':
                setnewPost(current => {
                    return { ...current, date: val }
                });
                break;

            default:
                break;
        }
    }

    const submitPost = function (e) {
        e.preventDefault();
        setPosts(current => [...current, newPost]);
        console.log(newPost);
    }
    
    return (
        <div className='addPost'>
            <form className='postForm' onSubmit={submitPost}>
                <Row className="formRow">
                    <Col className="formCol1" md={4}>
                        <ImageCrop setImageUrl={setnewPost} />
                        <DatePicker selected={new Date()} onChange={date => handleSetNewPost(date, 'date')} />
                    </Col>
                    <Col className="formCol" md={8}>
                        <input onChange={(e) => handleSetNewPost(e.target.value, 'title')} placeholder='Enter your post Title' type="text" />
                        <input onChange={(e) => handleSetNewPost(e.target.value, 'category')} type="text" placeholder='Enter Your Category' />
                        <textarea onChange={(e) => handleSetNewPost(e.target.value, 'content')} placeholder='Enter your post content'></textarea>
                    </Col>
                    <button className='button' type='submit'>SCHEDUKE</button>
                </Row>
            </form>
        </div>
    )
}

export default SchedulePost
