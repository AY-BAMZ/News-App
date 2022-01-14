import React from 'react'
import { Row, Col } from 'react-bootstrap';
import PostHistory from './PostHistory'


function Dashboard() {
    return (
        <div className='dashboard'>
            <Row className="activityRow">
                <Col className="activityCol" md={4}>
                    <div className="activityInfo">
                        <h2>POSTS</h2>
                        <h1>389</h1>
                        <button type='button'>
                            CREATE POST
                        </button>
                    </div>
                </Col>
                <Col className="activityCol" md={4}>
                    <div className="activityInfo">
                        <h2>ENGAGEMENTS</h2>
                        <h1>278K</h1>
                        <button type='button'>
                        VIEW  HISTORY
                        </button>
                    </div>
                </Col>
                <Col className="activityCol" md={4}>
                    <div className="activityInfo">
                        <h2>SCHEDULED POSTS</h2>
                        <h1>103</h1>
                        <button type='button'>
                        VIEW SCHEDULED
                        </button>
                    </div>
                </Col>
            </Row>
            <div className="postHistory">
                <PostHistory />
            </div>
        </div>
    )
}

export default Dashboard
