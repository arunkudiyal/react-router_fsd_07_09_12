import React, { Component } from 'react';
import Home from '../../components/Home/Home'
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

import { Routes, Link, Route, Navigate } from 'react-router-dom'

import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className = 'Blog' >
                <header>
                    <h1 style={{textAlign: 'center'}}>Example Project for Routing!</h1> <hr />
                    <nav>
                        <ul>
                            {/* <li><a href='/somethng'>Something</a></li> */}
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/posts'>Posts</Link></li>
                            <li><Link to='/new-post'> New Post </Link></li>
                        </ul>  
                    </nav> 
                </header>
                <Routes>
                    {/* <Route path='/' component={Home} />  USED IN v.5 */}
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/new-post' element={<NewPost />} />
                </Routes>
            </div>
        );
    }
}

export default Blog;