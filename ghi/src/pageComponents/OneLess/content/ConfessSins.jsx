/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import crossStart from './one-less-assets/crossStart.png'
import finish from './one-less-assets/cross10.png'

const ConfessSins = () => {

  // Allow scriptures to  display 'onHover'
  const [scrips, setScrips] = useState([]);
  const [sin, setSin] = useState('');
  const [sinList, setSinList] = useState(["Lust"]);
  const crossStartRef = useRef(null); // Create a ref for the element with id='crossStart'
  const crossEndRef = useRef(null); // Create a ref for the element with id='crossStart'
  const forgiveTextRef = useRef(null); // Create a ref for the element with id='crossStart'

  const getData = async () => {
    const resp = await fetch('http://localhost:4040/get_scriptures')
    const data = await resp.json()
    setScrips(data)
  }
  useEffect(() => {
    getData()
  }, [])

  let scripObj = {}
  for (let s of scrips) {
    scripObj[s.quote] = <span data-tooltip-id="tooltip" className="testHover" data-tooltip-content={s.scripture}>{s.quote}</span>
  }
  const addSin = () => {
    const updateList = sinList ? [...sinList, sin] : [sin];
    sinList ? setSinList(updateList) : setSinList([sin]);
    setSin('');
  }
  const cleanseSins = () => {
    if (crossStartRef.current && crossEndRef.current) {
      // Calculate the difference between the two elements
      const startRect = crossStartRef.current.getBoundingClientRect();
      const endRect = crossEndRef.current.getBoundingClientRect();
      const deltaX = endRect.left - startRect.left;
      const deltaY = endRect.top - startRect.top;
      // Set CSS custom properties to be used in the keyframes
      crossStartRef.current.style.setProperty('--delta-x', `${deltaX}px`);
      crossStartRef.current.style.setProperty('--delta-y', `${deltaY}px`);
      // Add the class to trigger the animation
      crossStartRef.current.classList.add('float-arc');
      // Optionally remove the class after the animation is done (3s in this example)
      setTimeout(() => {
        crossStartRef.current.classList.remove('float-arc');
      }, 5000);
    }
  };

  return (
    <div className="confess-content">
      <div className='border content-header'>
        <h3>Confess my Sins</h3>
      </div>

      <div className='border confessSin'>
        <p className="confessSin">Sin is real and something everyone faces on a "many times a day" basis. Accepting that we live in a fallen world and that we all sin and fall short of God's glory ({scripObj['Romans 3:23']}) it is important that we <u className="define point vocab" data-tooltip-id="tooltip" data-tooltip-content="Confess - CONFESS YOUR SINS -
          1. To freely agree or acknowledge that you violated God's law by your willful act.
          2. Display real sorrow over your sin.
          3. Ask God to cover your sin with the blood of Jesus and forgive you.
          4. Faithfully believe that God has heard you and will restore you.">Confess</u> our sins, repent our sins, and
          transfer or move past our sins. We do this willingly and voluntarily because as {scripObj['Romans 8:1-2']} says, there is no
          condemnation for those who are in Jesus Christ and that God will never be angry with us again ({scripObj['Isaiah 54:9-10']}). Try this animated exercise to help you visualize the process from
          confession to forgiveness and
          then walk forward under <u className="define point vocab" data-tooltip-id="tooltip" data-html="true" data-tooltip-content="Grace:
           1. God's unmerited favor.
           2. Receiving a gift from God that you do not deserve. For Example see Romans 11:5-6.">grace</u>.
        </p>
        <p className="confessSin">This is the animaition only. It is an opportunity for you to see and feel in action what you are
          doing through prayer. Watch as you send your repented sin to the cross how it darkens your blanket and then is
          washed by the blood of Jesus at the cross and returns clean and pure to you representing your status as forgiven and righteous to match your always righteous state.
          Repeat this activity as often as you need or like but remembering that you need to pray sincerely to God for true
          forgiveness of your sins.</p>
      </div>
      <div className="confessAnimator">
        <section className="sinCross1 sinCross">
          <div className='border' ref={crossStartRef} id='crossStart'>
            <div className='sins text-white p-4'>
              <h6 className=''>{sinList && sinList.map((item, idx) => <p className='text-center' key={idx}>{item}</p>)}</h6>
            </div>
            {/* <img src={crossStart} alt="Cross start"/> */}
          </div>
          <div></div>

          <div>
            <h5>Enter a Sin</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your sin"
              value={sin}
              onChange={(e) => setSin(e.target.value)}
            />
            <Button onClick={addSin}>Send to Cross</Button>
            <Button onClick={cleanseSins}>Cleanse Sins</Button>
          </div>
        </section>
        <section className="sinCross2 sinCross">
          <div ref={crossEndRef} className='border' id='crossEnd'><img src={finish} alt="Cross finish"/></div>
          <div></div>
          <div ref={forgiveTextRef} className='d-none forgiveText text-white'>

            <h5>God is faithful to forgive</h5>
            <ul>
              {sinList && sinList.map((item, idx) => <li className='text-center' key={idx}>{item}</li>)}
            </ul>

            <h5>JESUS Nailed your SINS to the CROSS and WASHED them with his BLOOD</h5>
            <h4 className='text-shadow text-warning'>IT IS FINISHED</h4></div>
        </section>
      </div>
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
    </div>
  )

}

export default ConfessSins
