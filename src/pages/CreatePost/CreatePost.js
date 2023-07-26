import React from 'react';
import '../CreatePost/CreatePost.css'
import { Link } from 'react-router-dom';



function CreatePost() {

    return <div className='background'>
        <div className='nav'>
            <h2><Link to='/'>Home</Link></h2>
            <h2>Create Post</h2>
            <button>Logout</button>
        </div>
    </div>
}

export default CreatePost;