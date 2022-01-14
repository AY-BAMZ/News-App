import React, { useState } from 'react';
import { usePostContext } from '../../PostContext'

import CommentIcon from './icons/comment.svg'
import ShareIcon from './icons/share.svg'
import LikeIcon from './icons/like.svg'
import DislikeIcon from './icons/dislike.svg'

function Comment(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const { content, name } = props;
    const { setPosts, posts } = usePostContext()

    return (
        <div className='comment'>
            <h3 style={{textAlign: "left", fontSize: "16px", color: "#111D5E"}} className='commentName'>{name}</h3>
            <p style={{textAlign: 'left', letterSpacing: 1,fontWeight: 300, color: "#555555", fontSize: 14}} className='commentText'>
            {content}
            </p>
            <div className="postReaction">
                            <div style={{ margin: 0, fontSize: 14 }} className="h5">12th feb 2020</div>
                            <div className="reaction" style={{ display: 'flex'}}>
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
                        <hr/>
        </div>
    )
}

export default Comment
