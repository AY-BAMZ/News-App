import React, { useState } from 'react'
import './Index.css'
import { Row, Col } from 'react-bootstrap';
import ImageCrop from './materials/samo'
import { usePostContext } from '../PostContext';



function CreatePost() {
    const [newPost, setnewPost] = useState({ image: '', title: "", category: "", content: "" })

    const { setPosts } = usePostContext()

    const handleSetNewPost = (val, key) => {
        switch (key) {
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
                    </Col>
                    <Col className="formCol" md={8}>
                        <input onChange={(e) => handleSetNewPost(e.target.value, 'title')} placeholder='Enter your post Title' type="text" />
                        <input onChange={(e) => handleSetNewPost(e.target.value, 'category')} type="text" placeholder='Enter Your Category' />
                        <textarea onChange={(e) => handleSetNewPost(e.target.value, 'content')} placeholder='Enter your post content'></textarea>
                    </Col>
                    <button className='button' type='submit'>POST</button>
                </Row>
            </form>
        </div>
    )
}

export default CreatePost