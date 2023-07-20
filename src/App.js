import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Signup from './pages/SignUp/Signup';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';




function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createpost" element={<CreatePost />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
