import React from 'react';
import "../SignUp/profilepic.css"
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { Avatar } from '@mui/material';


function Profilepic() {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        const imageRef = ref(storage, "image");
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef)
                .then((url) => {
                    setUrl(url)
                })
                .catch((error) => {
                    console.log(error.message, "error getting the image url")
                });
            setImage(null);

        })
            .catch((error) => {
                console.log(error.message)
            });;
    };

    return <div className='profilepic'>

        <Avatar
            alt='Remy Sharp'
            src={url}
            sx={{ width: 150, height: 150 }}
        />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>

}

export default Profilepic;