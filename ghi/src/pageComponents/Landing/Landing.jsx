/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './landing.css'
// import {scriptures as scriptArray} from '../../assets/Statements'
import scriptArray from './scriptArray.json'
import Welcome from '../../components/Welcome/'
import Footer from '../../components/Footer'
import { Link } from 'react-router';
import thoughtOfDay from '../../assets/images/thoughtOfDay.png'
import Card from 'react-bootstrap/Card';
import MyTestimony from '../../components/MyTestimony';

function Landing({user}) {
    const [scripture, setScripture] = useState(0);
    useEffect(() => {
        console.log("scripts", scriptArray)
        //use timeinterval to change scripture every 5 seconds
        setInterval(() => {
            setScripture(Math.floor(Math.random() * scriptArray.length))
        }, 5000)
    }, [])
    return (
        <div className="landing">
            <main >
            <div>{user&&<h3>Welcome {user.firstName}</h3>}</div>
                <section className='landing-section'>
                    <div className='news-thoughts-div'>
                        <section className='landing-news border'>
                            <Link to='/news'>
                                <h2>News Story Headlines</h2>
                            </Link>
                        </section>
                        <section className='landing-thoughts border'>
                            {/* <h2>Thoughts for the Week</h2> */}
                            {/* <img className='w-100' src={thoughtOfDay} alt='placeholder' /> */}
                        </section>
                    </div>

                    <section className='script'>
                        <h1 className=''>{scriptArray[scripture]}</h1>
                    </section>
                    <section className='one-less-link'>
                      <Link to='/one-less'>
                        <Card  className="ol-card text-center border border-primary p-0 m-4">
                          <Card.Body className="bg-primary text-white">
                            <Card.Title><h3>One Less Lessons</h3></Card.Title>
                            <Card.Text className='bg-light text-dark border border-primary rounded p-2'>
                              <h4>Explore our lessons and insights.</h4>
                              <ul style={{ listStylePosition: 'inside', marginLeft: '0',fontFamily: 'cursive', fontSize: '1.2rem',fontWeight: 'bolder'}}>
                                <li>Lesson 1: Becoming Christians</li>
                                <li>Lesson 2: Living As Chrisitians</li>
                                <li>Lesson 3: Sharing with Christians</li>
                              </ul>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </section>
                </section>
                <Welcome />
                <section className='my-testimony'>
                    <Card className="testimony-card text-center border border-primary p-0 m-4">
                        <Card.Body className="bg-primary text-white">
                            <Card.Title><h3>My Testimony</h3></Card.Title>
                            <Card.Text className='bg-light text-dark border border-primary rounded p-2'>

                                <p>Short testimony goes here</p>
                                <p>Will have button link to full testimony</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </section>
            </main>
            <Footer />

        </div>

    )
}

export default Landing
