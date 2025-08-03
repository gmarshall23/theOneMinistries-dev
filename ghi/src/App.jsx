import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Landing from './pageComponents/Landing';
import OneLess from './pageComponents/OneLess';
import Admin from './pageComponents/Admin';
import ProtectedRoute from './components/ProtectedRoute';
// import Header from './components/Header';
import About from './pageComponents/About/About';
import './App.css';
import NewsStories from './pageComponents/NewsStories';
import Subscribe from './pageComponents/Subscribe/Subscribe';
import Login from './components/Login';
import Logout from './components/Logout';
import MyTestimony from './pageComponents/MyTestimony';
import Introduction from './pageComponents/OneLess/content/Introduction';
import Oneliners from './pageComponents/OneLess/content/Oneliners';
import MeetGod from './pageComponents/OneLess/content/MeetGod';
import Salvation from './pageComponents/OneLess/content/Salvation';
import Living from './pageComponents/OneLess/content/Living';
import Morals from './pageComponents/OneLess/content/Morals';
import ConfessSins from './pageComponents/OneLess/content/ConfessSins';
import WalkWord from './pageComponents/OneLess/content/WalkWord';
import Encourage from './pageComponents/OneLess/content/Encourage';
import Events from './pageComponents/OneLess/content/Events';
import Prayers from './pageComponents/OneLess/content/Prayers';
import EternallySecure from './pageComponents/OneLess/content/EternallySecure';
import Questions from './pageComponents/OneLess/content/Questions';

function App() {
  const [user, setUser] = useState(null);
  const [scrips, setScrips] = useState([]);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    // This effect runs when the app loads to check for an existing session.
    const verifyUserSession = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Use the /me route to validate the token and get fresh user data
          const response = await axios.get('http://localhost:4040/me', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          // The token is valid, set the user state with the data from the server
          setUser(response.data);
          localStorage.setItem('user', JSON.stringify(response.data)); // Also update localStorage
        } catch (error) {
          // The token is invalid or expired, clear it from storage
          console.error("Session validation failed:", error);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null); // Clear the user state on validation failure
        }
      }
      setIsAuthLoading(false); // Authentication check is complete
    }
    verifyUserSession();
  }, []);

  return (
    <Router>
      <div className="app container-fluid justify-content-start">

        <Routes>
          <Route exact path="/" element={<Landing user={user} />} />
          <Route exact path="/about" element={<About user={user} />} />
          {/* <Route exact path="/one-less" element={<OneLess user={user} setUser={setUser} scrips={scrips} setScrips={setScrips}/>} /> */}
          <Route exact path="/news-stories" element={<NewsStories />} />
          <Route exact path='/subscribe' element={<Subscribe />} />
          <Route exact path="/login" element={<Login setUser={setUser} />} />
          <Route exact path="/logout" element={<Logout setUser={setUser} />} />
          <Route exact path="/my-testimony" element={<MyTestimony />} />
          <Route exact path="/admin/*" element={<Admin user={user} setUser={setUser} />} />
          {/* Protected One Way Routes */}
          <Route path="/one-way" element={
            <ProtectedRoute user={user} isLoading={isAuthLoading} redirectTo="/">
              <OneLess user={user} setUser={setUser} scrips={scrips} setScrips={setScrips} />
            </ProtectedRoute>
          }>
            <Route index element={<MeetGod scrips={scrips} />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="meet-god" element={<MeetGod scrips={scrips} />} />
            <Route path="salvation" element={<Salvation scrips={scrips} />} />
            <Route path="morals" element={<Morals user={user} setUser={setUser} scrips={scrips} />} />
            <Route path="confess-sins" element={<ConfessSins scrips={scrips} />} />
            <Route path="walk-word" element={<WalkWord scrips={scrips} />} />
            <Route path="encourage" element={<Encourage scrips={scrips} />} />
            <Route path="events" element={<Events scrips={scrips} user={user} />} />
            <Route path="living" element={<Living scrips={scrips} />} />
            <Route path="oneliners" element={<Oneliners />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="prayers" element={<Prayers scrips={scrips} />} />
            <Route path="eternal-security" element={<EternallySecure scrips={scrips} />} />
            <Route path="questions" element={<Questions scrips={scrips} user={user} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
