import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landing from './pageComponents/Landing';
import OneLess from './pageComponents/OneLess';
import Header from './components/Header';
import About from './pageComponents/About/About';
import './App.css';
import NewsStories from './pageComponents/NewsStories';
import Subscribe from './pageComponents/Subscribe/Subscribe';
import Login from './components/Login';
import Logout from './components/Logout';
import StudyForm from './pageComponents/OneLess/forms/AddStudy';
import MyTestimony from './pageComponents/MyTestimony';
import Living from './pageComponents/OneLess/content/Living';
import Oneliners from './pageComponents/OneLess/content/Oneliners';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Retrieve user information from local storage on component mount
    // need to use this useEffect to get user info from DB and store in local storage to insure user info is up to date at render
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  return (
    <Router>
      <div className="app container-fluid justify-content-start">
        <Header user={user} />
        <Routes>
          <Route exact path="/" element={<Landing user={user} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/one-less" element={<OneLess user={user} setUser={setUser} />} />
          <Route exact path="/news-stories" element={<NewsStories />} />
          <Route exact path='/subscribe' element={<Subscribe />} />
          <Route exact path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route exact path="/logout" element={<Logout setUser={setUser} />} />
          <Route exact path="/study-form" element={<StudyForm setUser={setUser} />} />
          <Route exact path="/my-testimony" element={<MyTestimony />} />
          {/* Add other routes here */}
          <Route path="/one-less" element={<OneLess />}>
            <Route path="living" element={<Living />} />
            <Route path="oneliners" element={Oneliners} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
