import React from 'react';
import '../CreatePost/CreatePost.css'
import { Link } from 'react-router-dom';



function CreatePost() {

    return <div className='createpostpage'>
        <div className='nav'>
            <h1 className='logo'>SOCIAL INFLUENCER</h1>
            <div className='clicks'>
                <p><Link to='/'>Home</Link></p>
                <button className='btn'>Signout</button>
            </div>
        </div>
        <div className=''>

        </div>
    </div>
}

export default CreatePost;