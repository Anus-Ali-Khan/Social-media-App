import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/CreatePost/CreatePost";
import Post from "./pages/Post/Post";
import { setUser } from "./components/users";
import { useDispatch } from "react-redux";

function App() {
  const userFromLocalStorage = localStorage.getItem("user");
  const dispatch = useDispatch();

  useEffect(() => {
    if (userFromLocalStorage) {
      dispatch(setUser(JSON.parse(userFromLocalStorage)));
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post" element={<Post />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
