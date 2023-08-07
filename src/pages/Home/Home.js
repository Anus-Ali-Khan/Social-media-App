import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { collection, getDocs, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useState, useEffect } from "react";

function Home() {
  const user = useSelector((state) => state.user.value);
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(
        data.docs.map((doc) => {
          console.log(doc.data());
          return { ...doc.data() };
        })
      );
    };
    getPosts();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="homePage"></div>
    </div>
  );
}

export default Home;
