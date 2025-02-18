/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { Accordion } from 'react-bootstrap';
import axios from 'axios';

// function deepcopy(obj) {
//   return JSON.parse(JSON.stringify(obj))
// }

const Morals = () => {
  const [scrips, setScrips] = useState([]);
  const getData = async () => {
    const response = await axios.get('http://localhost:4040/get_scriptures');
    // const resp = await fetch('http://localhost:4040/get_scriptures')
    const data = await response.data
    setScrips(data)
    console.log('data is: ', data)
  }
  useEffect(() => {
    console.log('Morals component mounted');
    console.log("user: ")
    // get scriptures from the database and put them on the page //
    getData()
  }, [])

  const submit = async e => {
    e.preventDefault();
    // let newItem = $("#list").val();
    // if (newItem === "") {
    //   return true
    // }
    // let obj = { moral: newItem }
    // const resp = await fetch(`http://localhost:4040/add_moral/${user._id}`,
    //   {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(obj)
    //   })
    // const data = await resp.json()
    // setUser(data)
    // $(":input").val("");
  }
  const handleDelete = async (e) => {
    e.preventDefault();
    // const resp = await fetch(`http://localhost:4040/delete_moral/${user._id}/${e.target.id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     "Content-Type": 'application/json'
    //   }
    // });
    // const data = await resp.json()
    // setUser(data)
  }

  const scripObj = {}
  for (let s of scrips) {
    scripObj[s.quote] = <span data-tooltip-id="tooltip" className="testHover" data-tooltip-content={s.scripture}>{s.quote}</span>
  }
  const moralArr = [];
  // const moralArr = user.morals?user.morals.map((item, index) => <li key={index}>{item}<button id={index} className="moralInvBtn" onClick={handleDelete}>Delete</button></li>):[]
  // if (user.morals) {
  //   moralArr = user.morals.map((item, index) => <li key={index}>{item}<button id={index} className="moralInvBtn" onClick={handleDelete}>Delete</button></li>)
  // }

    return (

      <div className="morals-content">
          <h3>Moral Inventory</h3>


          <br />
          <p className="">Often times my environment, timing, participants help guide my choices also. For example, I would not
            have a drink with a recovering alcoholic. I would not dance loosely in ways that might tempt others but would
            absolutely enjoy an appropriate dance with my wife. Make sense ??? Continue to pray when facing similar choices and
        let God, through the Holy Spirit, Guide your thinking.</p>

          <p className="chartreuse pix10">** NOTE: I suggest that you involve yourself with the things on this page privately
            between you and God as these are personal to you specifically. It's certainly fine to share as I have shared mine
            with you as an example or for accountability with a trusted companion but you need to be free to be totally honest
        and sincere with your thoughts, feelings and inputs.</p>

          <div className="inventory">
            <form className="form-group white moralForm" onSubmit={submit}>
              <label className="pink pix20" htmlFor='list'><span className="yellow">{user.firstName}'s</span> MORAL INVENTORY</label>
              <input className="form-control param newUserSign" id="list" placeholder="Your List Here" required></input>
              <br />
              <button type='submit' className='button' id='submitBtn'>Submit</button><br />
            </form>
            <br />

            <ol className="listing white">{moralArr}</ol>
          </div>
          {/* End Parent Div */}
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

export default Morals
