import React, { useState, useContext } from 'react'
import { Row, Col } from 'react-bootstrap';
import CommentIcon from './icons/comment.svg'
import ShareIcon from './icons/share.svg'
import LikeIcon from './icons/like.svg'
import DislikeIcon from './icons/dislike.svg'
import { usePostContext } from '../../PostContext';
import { usePost } from '../../hooks/usePost';

import Comment from './Comment'
import './Index.css'




const MainPost = (props) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    let { getPost } = usePost()

    const [newComment, setNewComment] = useState({ content: '', likes: '', dislikes: '', email: '', name: "" })

    const { image, title, date, content, id, comments } = props;
    const { setPosts, posts } = usePostContext()

    const handleSetNewComment = (val, identifier) => {
        switch (identifier) {
            // case 'image': setImageUrl()
            //     break
            case 'content':
                setNewComment({ ...newComment, content: val }
                );
                break;
            case 'name':
                setNewComment({ ...newComment, name: val }
                );
                break;
            case 'email':
                setNewComment({ ...newComment, email: val }
                );
                break;

            default:
                break;
        }
    }
    const submitPost = function (e) {
        e.preventDefault();
        // setPosts(current => [...current, newComment]);
        console.log(newComment);
        const thisPost = getPost(id);
        thisPost.comments.push(newComment)
        console.log('thisPost 2', thisPost)
        console.log('context 2', posts)
    }
    return (
        <div className='mainPost'>
            <Row style={{ maxWidth: 1120, margin: 'auto', padding: 20 }} className="mainPostRow">
                <Col md={8} className="mainPostCol">
                    <div style={{ marginTop: 80, display: 'flex' }} className="relatedCategory">
                        <h6 style={{
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 9,
                            paddingRight: 9,
                            background: '#111D5E15',
                            marginRight: 10,
                            borderRadius: 3,
                            fontSize: 12,
                            cursor: 'pointer'
                        }} >graphics design</h6>
                        <h6 style={{
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 9,
                            paddingRight: 9,
                            background: '#111D5E15',
                            marginRight: 10,
                            borderRadius: 3,
                            fontSize: 12,
                            cursor: 'pointer'
                        }}>medical</h6>
                    </div>
                    <div style={{ margin: 0, padding: 0, textAlign: 'left' }} className="container">
                        <h1 style={{ fontSize: 30, color: '000000' }}>{title}</h1>
                        <hr />
                        <img style={{ width: '90%', marginTop: 20, marginBottom: 20 }} src={image} alt="" />
                        <div className="postReaction">
                            <div style={{ margin: 0, fontSize: 14 }} className="h5">{date}</div>
                            <div className="reaction" style={{ display: 'flex' }}>
                                <div className="comment" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={CommentIcon} alt="" />
                                    <h5 style={{ margin: 8, fontSize: 12 }}>2.3k</h5>
                                </div>
                                <div className="dislike" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img onClick={() => setDislikes(dislikes + 1)} src={DislikeIcon} alt="" />
                                    <h5 style={{ margin: 8, fontSize: 12 }}>{dislikes}</h5>
                                </div>
                                <div className="like" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img onClick={() => setLikes(likes + 1)} src={LikeIcon} alt="" />
                                    <h5 style={{ margin: 8, fontSize: 12 }}>{likes}</h5>
                                </div>
                                <div className="share" style={{ display: 'flex' }}>
                                    <img src={ShareIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="commentText">
                            <h2 style={{ fontSize: 14, fontWeight: '400', maxWidth: 610, letterSpacing: 1 }}>{content}</h2>
                        </div>
                        <hr />
                        <form onSubmit={submitPost} action="">
                            <textarea onChange={(e) => handleSetNewComment(e.target.value, 'content')} placeholder='Enter your comment' name="" id="" value={newComment.content}></textarea>
                            <input onChange={(e) => handleSetNewComment(e.target.value, 'name')} placeholder='Enter your name' type="text" />
                            <input onChange={(e) => handleSetNewComment(e.target.value, 'email')} placeholder='Enter your email' type="text" />
                            <button type='submit'>POST COMMENT</button>
                        </form>
                        <hr />
                    </div>
                    {comments.map(comment => (<Comment {...comment} />))}

                </Col>
                <Col style={{ textAlign: 'left', marginTop: 125 }} md={4} className="mainPostCol">
                    <h3 style={{ fontSize: 18, fontWeight: 'bold' }}>Related posts</h3>
                    <hr />
                    <p style={{ color: '#008DF9', fontSize: 15 }}>Have you ever met a celebrity who asked you,
“Do you know who I am?" and you said no?</p>
                    <p style={{ color: '#008DF9', fontSize: 15 }}>Have you ever met a famous person you
admired but who ended up being a jerk in...</p>
                    <p style={{ color: '#008DF9', fontSize: 15 }}>Are celebrities friendlier when you pretend not
to know them?</p>
                    <p style={{ color: '#008DF9', fontSize: 15 }}>Have you ever met a celebrity and found they
were much kinder or ruder than you expected?</p>
                    <p style={{ color: '#008DF9', fontSize: 15 }}>Which celebrities are mean?</p>
                    <p style={{ color: '#008DF9', fontSize: 15 }}>In a celebrity “who wore it best” contest, who
would you enter?</p>
                    <p style={{ color: '#008DF9', fontSize: 15 }}>Have you ever met a celebrity who asked you,
“Do you know who I am?" and you said no?</p>
                    <p style={{ color: '#008DF9', fontSize: 15 }}>Have you ever met a famous person you
admired but who ended up being a jerk</p>
                </Col>
            </Row>
        </div>
    )
}


export default MainPost
