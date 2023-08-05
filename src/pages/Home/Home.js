import React from "react";
import { useSelector } from "react-redux"
import Navbar from '../Navbar/Navbar';

function Home() {

    const user = useSelector((state) => state.user.value)
    console.log(user)
    return <div>
        <Navbar />


    </div>;
}

export default Home;