/* eslint-disable react/prop-types */

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './one-less.css';
import './content/content.css'
import MeetGod from './content/MeetGod';
import Salvation from './content/Salvation';
import Living from './content/Living';
import Morals from './content/Morals';
import ConfessSins from './content/ConfessSins';
import EternallySecure from './content/EternallySecure';
import WalkWord from './content/WalkWord';
import Encourage from './content/Encourage';
import Introduction from './content/Introduction';
// import Oneliners from './content/Oneliners';

const OneLess = ({user, setUser}) => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [scrips, setScrips] = useState([]);
  const [lesson, setLesson] = useState('Introduction');
  const buttonsRef = useRef([]);
  useEffect(() => {
    console.log('OneLess component mounted');
    getData();

  }, [lesson]);
  const getData = async () => {
    const response = await axios.get('http://localhost:4000/get_scriptures');
    // const resp = await fetch('http://localhost:4000/get_scriptures')
    const data = response.data
    setScrips(data)
    console.log('data is: ', data)
  }
  function handleClick(e) {
    // Set the lesson state to the clicked button's text content
    setLesson(e.target.textContent);

    // Remove 'active-btn' class from all buttons
    buttonsRef.current.forEach(button => button.classList.remove('active-btn'));

    // Add 'active-btn' class to the clicked button
    e.target.classList.add('active-btn');
  };

  function getComponent() {
    // return compent based on lesson state
    switch (lesson) {
      case 'Introduction':
        return <Introduction />;
      case 'Meet God':
        return <MeetGod />;
      case 'Salvation':
        return <Salvation user={user} scrips={scrips}/>;
      case 'Living':
        return <Living />;
      case 'Morals':
        return <Morals user={user} scrips={scrips}/>;
      case 'Confess My Sins':
        return <ConfessSins />;
      case 'Eternally Secure':
        return <EternallySecure />;
      case 'One Liners for meditation (words of Wisdom)':
        return <p>Will fix issue in Oneliners.jsx</p>;
      case 'A Walk in The Word (Bible Study)':
        return <WalkWord />;
      case 'Encourage Me':
        return <Encourage />;
      case 'One Less Event':
        return <h1>{lesson}</h1>;
      case 'Prayer Requests':
        return <h1>{lesson}</h1>;
      case 'Questions and AnswersAsk The Bible':
        return <h1>{lesson}</h1>;
      default:
        return <h1>{lesson}</h1>;
    }
  };
  return (
    <>
      <main className='one-less'>
        <aside className='one-less-aside'>
          <h3>One Less Lessons</h3>
          <ul>
            <li><button ref={el => buttonsRef.current[0] = el} onClick={handleClick} id='introduction' className='active-btn intro-title'>Introduction</button></li>
            <li><h4>Becoming Christians</h4>
              <button ref={el => buttonsRef.current[1] = el} onClick={handleClick} id='meetGod'>Meet God</button>
              <button ref={el => buttonsRef.current[2] = el} onClick={handleClick} id='salvation'>Salvation</button>
              <button ref={el => buttonsRef.current[3] = el} onClick={handleClick} id='living'>Living</button>
            </li>
            <li><h4>Living as Christians</h4>
              <button ref={el => buttonsRef.current[4] = el} onClick={handleClick} >Morals</button>
              <button ref={el => buttonsRef.current[5] = el} onClick={handleClick}>Confess My Sins</button>
              <button ref={el => buttonsRef.current[6] = el} onClick={handleClick}>Eternally Secure</button>
              <button ref={el => buttonsRef.current[7] = el} onClick={handleClick}>One Liners for meditation (words of Wisdom)</button>
              <button ref={el => buttonsRef.current[8] = el} onClick={handleClick}>A Walk in The Word (Bible Study)</button>
            </li>
            <li><h4>Sharing With Christians</h4>
              <button ref={el => buttonsRef.current[9] = el} onClick={handleClick}>Encourage Me</button>
              <button ref={el => buttonsRef.current[10] = el} onClick={handleClick}>One Less Event</button>
              <button ref={el => buttonsRef.current[11] = el} onClick={handleClick}>Prayer Requests</button>
              <button ref={el => buttonsRef.current[12] = el} onClick={handleClick}>Questions and AnswersAsk The Bible</button>
            </li>
            <li><h4>Support Us!</h4></li>
          </ul>
        </aside>
        <section className='one-less-section'>
          <div className='one-less-header'>
            <h3>Lesson: {lesson}
            </h3>
          </div>
          <div className='one-less-content'>
            {getComponent()}
          </div>
        </section>
      </main>
    </>
  )
}

export default OneLess
