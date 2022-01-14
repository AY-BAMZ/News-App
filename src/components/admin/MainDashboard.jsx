import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import "./Index.css";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CreatePost from './CreatePost'
import Dashboard from './Dashboard'
import SchedulePost from './SchedulePost'
import History from './PostHistory'
import Settings from './Settings'

function MainDashboard() {
    const [count, setCount] = useState(1);
    return (
        <div className='mainDashboard'>
            <Row className="dashboardRow">
                <Col className="dashboardCol" md={3}>
                    <div className="containerOne">
                        <div className="profile">
                            <div className='profileInfo'>
                                <img src="https://res.cloudinary.com/dmixz7eur/image/upload/v1604633242/hrithik-roshan_jaaoqa.jpg" alt="" />
                                <div className="profileAbout">
                                    <h3>George Mendy</h3>
                                    <h6>History Professor</h6>
                                </div>
                            </div>
                            <NotificationsIcon className='adminNotification' />
                        </div>
                        <hr />
                        <div className="adminSections">
                            <div onClick={() => setCount(1)} className="tabs active">
                                <div  className='link'>

                                    <DashboardIcon />
                                    <h2>DASHBOARD</h2>
                                </div>
                                <ArrowForwardIosIcon />
                            </div>
                            <div onClick={() => setCount(2)} className="tabs">
                                <div className='link'>

                                    <PostAddIcon />
                                    <h2>CREATE POST</h2>
                                </div>
                                <ArrowForwardIosIcon />
                            </div>
                            <div onClick={() => setCount(3)} className="tabs">
                                <div className='link'>
                                    <ScheduleIcon />
                                    <h2>SCHEDULE POST</h2>
                                </div>
                                <ArrowForwardIosIcon />
                            </div>
                            <div onClick={() => setCount(4)} className="tabs">
                                <div className='link'>

                                    <HistoryIcon />
                                    <h2>HISTORY</h2>
                                </div>
                                <ArrowForwardIosIcon />
                            </div>
                            <div onClick={() => setCount(5)} className="tabs">
                                <div className='link'>
                                    <SettingsIcon />
                                    <h2>SETTINGS</h2>
                                </div>
                                <ArrowForwardIosIcon />
                            </div>
                        </div>
                        <hr/>
                        <div className="logout">
                            <ExitToAppIcon />
                            <h2>LOG OUT</h2>
                        </div>
                    </div>
                </Col>
                <Col className="dashboardCol" md={9}>
                <div>
                { count === 1 && <Dashboard />}
                </div>
                <div>
                { count === 2 && <CreatePost />}
                </div>
                <div>
                { count === 3 && <SchedulePost />}
                </div>
                <div>
                { count === 4 && <History />}
                </div>
                <div>
                { count === 5 && <Settings />}
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default MainDashboard
