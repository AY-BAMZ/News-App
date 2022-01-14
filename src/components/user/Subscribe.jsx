import React from 'react'
import { Row } from 'react-bootstrap';
import './Index.css'

function Subscribe() {
    return (
        <div className='subscribe'>
            <div className="container">
                <Row className="subscribeRow">
                    <h1>Subscribe to our weekly newsletter</h1>
                    <form action="submit">
                        <input type="text" placeholder='Your email here'/>
                        <button type='submit'>Subscribe</button>
                    </form>
                </Row>
            </div>
        </div>
    )
}

export default Subscribe
