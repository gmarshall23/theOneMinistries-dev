/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import { Accordion } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import axios from 'axios';
import cross from './one-less-assets/cross.jpeg'; // Import the image using ES6 import
// import './Morals.css'; // Ensure you have the necessary CSS for the modal

const Morals = ({ user, setUser, scrips }) => {
    const [moralItem, setMoralItem] = useState('');
    const [inventory, setInventory] = useState([]);
    const [showModal, setShowModal] = useState(false); // State variable for modal visibility

    useEffect(() => {
        // This keeps the local inventory state in sync with the user's morals,
        // especially after the user data is first loaded.
        if (user && user.morals) {
            setInventory(user.morals);
        } else {
            setInventory([]);
        }
    }, [user]);

    const handleAddToList = e => {
        e.preventDefault();
        if (!moralItem.trim()) return; // Prevent adding empty items
        const addInventory = inventory ? [...inventory, moralItem] : [moralItem];
        setInventory(addInventory);
        setMoralItem('');
    }

    const handleSaveList = async e => {
        e.preventDefault();
        if (!user) {
            console.error("Cannot save list, user is not logged in.");
            return; // Guard against trying to save when no user is present
        }
        try {
            // The user is identified by the JWT, so no need to send the username in the URL.
            const newInventory = { "morals": inventory };
            const token = localStorage.getItem('token'); // Ensure the correct token key is used
            console.log('Token from localStorage being sent:', token);
            const response = await axios.put(`http://localhost:4040/update_user`, newInventory, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const updatedUser = response.data.user; // The API returns the user inside a 'user' property
            console.log('User updated successfully:', updatedUser);
            setShowModal(true); // Show the modal after successful save
            setUser(updatedUser); // Update the user state with the correct user object
            localStorage.setItem('user', JSON.stringify(updatedUser)); // Update the user object in localStorage

        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    const handleDelete = (indexToDelete) => {
        // This function now updates the local state.
        // The changes will be persisted when the user clicks "Save List".
        const updatedInventory = inventory.filter((_, index) => index !== indexToDelete);
        setInventory(updatedInventory);
    }

    const closeModal = () => {
        setShowModal(false); // Hide the modal
    };

    const scripObj = {};
	for (let s of scrips) {
		scripObj[s.quote] = <span className='tipText' data-tooltip-id="tooltip" data-tooltip-content={s.scripture}>{s.quote}</span>
	}
    return (
        <div className="morals-content">
            <div className='content-header'>
                <h3>Moral Inventory</h3>
            </div>
            <div>
                <img className="cloud tall" src={cross} alt="church" /><p className="py-4">I firmly believe that all believers should check themselves regularly against their own personal Moral Inventory. As the author of this site, I am sharing mine (in no order of importance) as a sample of what I do monthly. I speak to myself in the affirmative, reminding myself who I am in Christ. I am not perfect, as God already knows, and where I fall short, I ask God for help to improve and grow in my spiritual walk. I invite you to  develop your own Moral Inventory below and check yourself against it regularly and trust God to move you forward. Bear in mind that yours, just like mine can and should change as the Holy Spirit guides your thoughts and actions.</p>
            </div>
            <div>
                <Accordion defaultActiveKey={null}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Click to see My List</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <ol className="">
                                    <li> Because Jesus said to Love one another ({scripObj['1 John 19:34-35']}), I do not persecute others.</li>
                                    <li> Because Jesus said I am salt and light and to make disciples ({scripObj['Matthew 5:13-16']}, {scripObj['Matthew 28:19']}), I share my faith and demonstrate goodness and kindness.</li>
                                    <li> Because God is slow to anger ({scripObj['Exodus 34:6']}), I am patient in all things when necessary.</li>
                                    <li> Because God forgave me ({scripObj['Colossians 3:13']}), I forgive others quickly.</li>
                                    <li> Because God made me and my wife one flesh ({scripObj['Ephesians 5:31']}, {scripObj['Matthew 19:6']}, {scripObj['Genesis 2:24']}), I do not lust for other women or desire divorce</li>
                                    <li> Because God gave me mercy and grace ({scripObj['Hebrews 4:16']}), I look to offer mercy and grace to others</li>
                                    <li> Because Jesus forgave his enemies ({scripObj['Luke 23:34']}), I forgive those who offend me</li>
                                    <li> Because God loves a cheerful giver ({scripObj['Proverbs 28:27']}, {scripObj['2 Corinthians 9:7']}), I give willingly to those in need</li>
                                    <li> Because God wants to hear from me regularly ({scripObj['1 Thessalonians 5:16-18']}), I pray regularly</li>
                                    <li> Because God hates evil ({scripObj['Romams 12:9']}), I love and fear the Lord ({scripObj['Psalms 97:10']}), ({scripObj['Proverbs 8:13']}) and hate evil</li>
                                    <li> Because God said no weapon formed against me will prosper ({scripObj['Isaiah 54:17']}, {scripObj['Romans 8:31,37']}), I pray earnestly for my enemies</li>
                                    <li> Because Jesus never worried ({scripObj['Phillipians 4:6']}), I am not anxious about situations</li>
                                    <li> Because God tells me not to think more highly of myself than I ought to ({scripObj['Romans 12:3']}), I do not judge others</li>
                                    <li> Because God uses me to do  his work, ({scripObj['2 Timothy 2:15']}), I study the word of God to know the truth</li>
                                    <li>Because the Holy Spirit guides me ({scripObj['Galatians 5:25']}), I demonstrate it fruits: Love/Peace/Joy/Kindness/Goodness/Gentleness/Faith/Paitence/Self-Control + Humility (added just for me by me) </li>
                                    <li> Because Jesus is ALIVE in me ({scripObj['Galatians 2:20']}), I do not have a signature sin</li>
                                </ol>
                                <p className="">One additional thought is that you also need to consider the "gray" areas where scripture does not specify a "Thou shall ... or Thou shall not ...". Things of this nature might include dancing, responsible drinking, consuming certain foods, attending LGBTQ+ events, etc. I have wrestled with this concept because this is where most of us live on a daily basis as we face similar choices at home, work, and with family. {scripObj['1 Corinthians 6:12']} addresses this perfectly because often times there are not "yes or no - right or wrong" answers as each situation is its own entity so therefore I need to consider what is beneficial. So now, I ask myself these questions and it really helps me to simplify my position and be at peace with my choices and decisions. Feel free to use my process or develop your own. The important thing is that you become intentional about your choices rather than involve yourself in things for the wrong reasons.</p>
                                <ol className="">Questions for my gray areas:
                                    <li>Greg, Do you have doubts about doing this activity?</li>
                                    <li>Greg, Can you thank God for the experience of what you just did?</li>
                                    <li>Greg, Will you be embarrassed if you are being evaluated for making this choice?</li>
                                    <li>Greg, Will your choice help or hurt other people?</li>
                                </ol>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className=''>
                <small className=""><strong><b>** NOTE:</b><em> I suggest that you involve yourself with the things on this page privately between you and God as these are personal to you specifically. It's certainly fine to share as I have shared mine with you as an example or for accountability with a trusted companion but you need to be free to be totally honest and sincere with your thoughts, feelings and inputs.</em></strong></small>
            </div>
            <div className="inventory">
                <section>
                    <form className="form-group">
                        <label className="pink pix20" htmlFor='list'>MORAL INVENTORY</label>
                        <input className="form-control param newUserSign"
                            id="list"
                            placeholder="Enter a moral item"
                            value={moralItem}
                            onChange={e => setMoralItem(e.target.value)}
                            required></input>
                        <button type='button'
                            className='button w-25 text-center m-2'
                            id='submitBtn'
                            onClick={handleAddToList}
                        >Add to list</button>
                    </form>
                </section>
                <section>
                    <h5><span className="yellow">{user && user.firstName}'s</span> Inventory List</h5>
                    <ol className="">
                        {inventory && inventory.map((item, index) => <li
                        key={index}
                        className="row border-bottom border-dark p-2">
                            <p className="col-9 m-0">{item}</p>
                            <div className="col-2 p-0 text-center" ><Button variant="danger" size="sm" id={index} onClick={() => handleDelete(index)}>Delete</Button></div></li>)}
                    </ol>
                    <button id='saveList' className='button w-25 m-2 text-center' onClick={handleSaveList}>Save List</button>
                </section>
            </div>
            <Tooltip className='' id="tooltip" place="right"
				style={{
					fontSize: '1.25rem',
					maxWidth: '30rem',
					whiteSpace: 'pre-line',
					color: 'red',
					backgroundColor: '#333',
					borderRadius: '8px',
					padding: '10px',
					textAlign: 'left',
				}} />
            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content w-50">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p >List has been saved successfully!</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Morals
