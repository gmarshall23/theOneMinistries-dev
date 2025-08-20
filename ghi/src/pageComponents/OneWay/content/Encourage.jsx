/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import moralStruggle from './one-less-assets/moralStruggle.jpeg';
// import { List } from './List';

const Encourage = () => {

  // setup for encourage Modals //
  const [encourages, setEncourages] = useState([]);
  const [struggleArea, setstruggleArea] = useState({});
  const [showEncourage, setShowEncourage] = useState(false);
  const contentRef = useRef(null); // Create a ref for encourage-content

  const handleClose = () => setShowEncourage(false);
  const handleShow = () => setShowEncourage(true);

  const getData = async () => {
    axios.get('http://localhost:4040/get_encourage')
      .then(response => setEncourages(response.data))
      .then(console.log('Encourage topics:', encourages))
      .catch(error => console.error('Error fetching encourage topics:', error));
  }
  const handleStruggleArea = (e) => {
    const area = encourages.filter(item => item.text === e.target.value)
    setstruggleArea(area[0])
    handleShow();
  }
  const handleStruggleArea2 = (e) => {
    const area = encourages.filter(item => item.text === e.target.id)
    setstruggleArea(area[0])
    handleShow();
  }
  useEffect(() => {
    getData();
  }, [])
  return (

    <section > {/* Parent Div */}
      <div className='content-header'>
        <h2>Encourage Me</h2>
      </div>
      <div className='encourage-content' ref={contentRef}>
        <div>
          <img className="w-50 p-3" src={moralStruggle} alt="moral struggle image" />
          <p className="white">You find yourself at this page because something in your 'present day', something in your 'right now' has you discouraged which is one of the three tactics used by the enemy (discourage, distract, deceive). Assuming true, it's not easy to look toward your tomorrow let alone your next hour. But, be encouraged, as I need you to think about THE past with God and then YOUR past with God and look forward to your exciting future with God.</p>
          <p className="white">The word <i
            className="purple">REMEMBER</i> is used 281 times in the bible for a reason and it's because God wants you to never
            forget what he has done for his people throughout and he wants to do the same for you because of his love and <u className="define point vocab" data-tooltip-id="tooltip" data-html="true" data-tooltip-content="Grace:
            1. God's unmerited favor.
            2. Receiving a gift from God that you do not deserve.
            For Example see Romans 11:5-6.">grace</u>.</p>
        </div>
        <div>
      <h3 className="darkBlue p-2">Remember...</h3>
      <ol className="darkBlue pix10 p-2">
        <li><span className="purple">Remember:</span> God created the Heavens and the Earth. (Genesis 1)</li>
        <li><span className="purple">Remember:</span> God parted the Red Sea and set his people free. (Exodus 14)</li>
        <li><span className="purple">Remember:</span> God was with Daniel in the Lions Den. (Daniel 5)</li>
        <li><span className="purple">Remember:</span> God gave his only son Jesus to die so that you may have eternal life. (John 3)</li>
        <li><span className="purple">Remember:</span> God made a new covenant of Grace that covers you and all your needs. (Hebrews 8)</li>
        <li><span className="purple">Remember:</span> Something from your PAST with God.</li>
      </ol>
      {/* <ol className="darkBlue pix10">
        <li><span className="purple">Remember:</span> God's promises, like the rainbow after the Flood, are eternal and unbroken. (Life of Noah)</li>
        <li><span className="purple">Remember:</span> Jesus made a safe place for us at the cross, but you must accept His gift of Hope. (Life of Noah)</li>
        <li><span className="purple">Remember:</span> God is revealed best during the storms of life. It is there you will understand how is working in your situation. (Life of Job)</li>
        <li><span className="purple">Remember:</span> God is in the business of restoration to include your homes, families, friendships and your life. (Life of Job)</li>
        <li><span className="purple">Remember:</span> God cares about restoration and he will bring healing into your life. (Life of Jacob)</li>
        <li><span className="purple">Remember:</span> God can always use your situation to accomplish his good purposes. (Life of Jacob)</li>
        <li><span className="purple">Remember:</span> You don't have to be perfect in order to be a person after God's own heart. (Life of David)</li>
        <li><span className="purple">Remember:</span> When you are cut off and in a lonely place, it is then the enemy will tempt you to seek refuge and comfort in things other than God. (Life of David)</li>
      </ol> */}
      </div>
        <div className="">
        <p>I'm struggling in the area of <span>
          <select value={struggleArea.text} onChange={handleStruggleArea}>
            <option value="">Select a topic...</option>
            {encourages.map((item, index) => (
              <option key={index} value={item.text}>
                {item.text}
              </option>
            ))}
          </select>
        </span>. Please encourage me...
        </p>
        <div>
         <h5 className="darkBlue">TOPICS - <span className="purple">Remember:</span> YOU ARE NOT ALONE</h5>
          {/* Need to fix Lists */}
          {/* <List title="Topics" liArr={encourage} /> */}
          <h5 >
            If you want to pray more specifically, go to <Link className="text-purple" to="/prayer" >Prayer Request</Link> and we would love to pray with you right now.
          </h5>
        <ul className="encourage-list">
          {encourages.map((item, index) => (
            <li key={index} id={item.text} onClick={handleStruggleArea2}>{item.text}</li>
          ))}
        </ul>
        </div>
          <p className="white"><u className="" data-tooltip-id="tooltip" data-html="true" data-tooltip-content="MEDITATE:
          1. Reading
          2. Believing
          3. Absorbing (Thinking over and over again)
          4. Applying
          5. Obeying">Meditate</u> on these truths in your struggle and be encouraged that God will never leave you or
            forsake you in your time of need.</p>
          <p className="white">If you feel a greater need for help please click <Link  to="/hotline" className='text-red'>Hotline</Link> to
            get to an actual person for deeper intervention.</p>


        </div>

        <Modal show={showEncourage}
              onHide={handleClose}
              container={contentRef.current}
              dialogClassName='custom-modal'>
          <Modal.Header closeButton>
            <Modal.Title>Encouragement for: {struggleArea.text}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <blockquote>
              <p className='border text-start '><b>Scripture:</b> {struggleArea.quote}</p>
              <p className='border text-start p-2'><b>Encouragement</b>: {struggleArea.scripture}</p>
              <p className='border text-start p-2'><b>Prayer</b>: {struggleArea.prayer}</p>

            </blockquote>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <div>
        <ul>
          {encourages.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div> */}


      {/* tooltip */}
      <Tooltip className='' id="tooltip" place="right"
        style={{
          fontSize: '1.25rem',
          maxWidth: '30rem',
          // minWidth: '200px',
          // maxWidth: '400px',
          whiteSpace: 'pre-line',
          color: 'red',
          backgroundColor: '#333',
          borderRadius: '8px',
          padding: '10px',
          textAlign: 'left',
        }} />

    </section>
  )
}

export default Encourage
