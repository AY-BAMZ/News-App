import React from 'react'
import PostList from '../PostList'
import Footer from './Footer'
import Header from './Header'
import AllPostList from '../AllPostList'
import Subscribe from './Subscribe'
     
function UserRender() {
    return (
        <div>
            <Header />
            <PostList />
            <AllPostList style={{listStyle: 'none', hover: {underline: 'none'}}}/>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default UserRender
