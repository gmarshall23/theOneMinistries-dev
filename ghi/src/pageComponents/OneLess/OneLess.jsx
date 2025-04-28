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
import Oneliners from './content/Oneliners';

const OneLess = ({user, setUser}) => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [scrips, setScrips] = useState([]);
  const [lesson, setLesson] = useState('Introduction');
  const [studyDate, setStudyDate] = useState('');
  const [studyDay, setStudyDay] = useState(0);
  const buttonsRef = useRef([]);
  const lessonRef = useRef(null);
  // get data from the server
  const getData = async () => {
    const response = await axios.get('http://localhost:4040/get_scriptures');
    const data = response.data
    setScrips(data)
    console.log('data is: ', data)
    console.log('user info: ', user)

  }
  const days = async (date) => {
    // convert date to day of the year
    const startDate = new Date(date).getTime();
    const today = new Date().getTime();
    const day =Math.floor(((((today - startDate)/1000)/60)/60)/24);
    console.log(`study day info : ${date}, ${startDate}, ${today}, ${day}`);
    const formattedDate = new Date(user.studyStartDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    setStudyDate(formattedDate);
    setStudyDay(day);
  }
  // useEffect(() => {
  //   console.log('OneLess component mounted');
  //   getData();
  // }, []);
  useEffect(()=>{
    console.log('OneLess component mounted');
    getData();
    if(user && user.studyStartDate){
      days(user.studyStartDate);
    }
  }, [user]); // will run this effect only when the user change.
  useEffect(() => {
    const refLesson = lessonRef.current;
    if (refLesson) {
      refLesson.scrollTo({ top: 0, behavior: 'smooth' });
      // Alternatively, use: contentRef.current.scrollTop = 0;
    }
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson]);

  // get the number of days since the user started studying

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
        return <Morals user={user} setUser={setUser} scrips={scrips}/>;
      case 'Confess My Sins':
        return <ConfessSins />;
      case 'Eternally Secure':
        return <EternallySecure />;
      case 'One Liners for meditation (words of Wisdom)':
        return <Oneliners />;
      case 'A Walk':
        return <WalkWord user={user} studyDay={studyDay}/>;
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
              <button ref={el => buttonsRef.current[8] = el} onClick={handleClick}>A Walk</button>
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
        <section className='one-less-section' ref={lessonRef}>
          <div className='one-less-header'>
            {lesson === 'A Walk' ?
            <div className='a-walk-header'>
              <p>Lesson: {lesson}</p>
              {user.studyStartDate&&<p>Study date: {studyDate} (day: {studyDay})</p>}
            </div> :
            <h3>Lesson: {lesson}
            </h3>}
          </div>
          <div className='one-less-content' >
            {getComponent()}
          </div>
        </section>
      </main>
    </>
  )
}

export default OneLess
