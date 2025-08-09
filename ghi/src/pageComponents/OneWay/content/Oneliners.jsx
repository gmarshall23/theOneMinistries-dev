/* eslint-disable react/no-unescaped-entities */
import { useState} from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import {loadStatement, oneLiners} from './one-less-assets/one-liners.js'
import cross from './one-less-assets/cross.jpeg';

const Oneliners = () => {
    const [oneLiner, setOneLiner] = useState(loadStatement())
    const handleSelect = (eventkey) => {
        setOneLiner(oneLiners[eventkey]);
      };
    const handleShowOne = (e) => {
        e.preventDefault();
        const randNumber = Math.floor(Math.random() * oneLiners.length);
        setOneLiner(oneLiners[randNumber])
    }

    const handleClickAll = (e) => {
        e.preventDefault();
        const randNumber = `The Entire List of Meditation Topics:`;
        // setShowAll(!showAll)
    }

    return (
        <div className="p-4">
            <h2><b>One Liners for the Day</b></h2>

            <div className="shootPics row justify-content-between m-0 p-2">
                <img className="col-md-4 p-4 img cloud " src={cross} alt="church" />
                <img className="col-md-4 p-4 img cloud " src={cross} alt="church" />
                <img className="col-md-4 p-4 img cloud " src={cross} alt="church" />
            </div>
            <p className="">Psalms 19 asks that the meditation of our heart be pleasing in the sight of the Lord. Pick a One Liner or "Post-it-Note" for your <u className="toolTipHover" data-tooltip-id="tooltip" data-html="true" data-tooltip-content="MEDITATE 1. Reading 2. Believing 3. Absorbing (Thinking over and over again) 4. Applying 5. Obeying">Meditation</u> Thoughts today.</p>
            <p className="white">There are over 200 to choose from. Click until one speaks to your spirit.</p>

            {/* <div>
                {statementsData.statements.map((statement, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: statement }} />
                ))}
            </div> */}
            <div className="p-4">
                <blockquote className='oneLiner' dangerouslySetInnerHTML={{ __html: oneLiner }} />
                <Button className="rand w-50" id="click" onClick={handleShowOne} >See another oneliner</Button>

            </div>

            <div  className='p-4'>
                <DropdownButton
                    id="dropdown-basic-button"
                    className = "custom-dropdown border"
                    data-tooltip-content="Click for All"
                    onSelect={handleSelect}
                    title="See All One Liners"
                >
                    {oneLiners.map((statement, index) => (
                        <Dropdown.Item
                        className =''
                        key={index}
                        dangerouslySetInnerHTML={{ __html: statement }}
                        eventKey={index}
                        onClick={(handleSelect)}/>
                    ))}
                </DropdownButton>

                {/* {selectedStatement && (
                    <div className="mt-3">
                        <div dangerouslySetInnerHTML={{ __html: selectedStatement }} />
                    </div>
                )} */}
            </div>
            <Tooltip className='tooltipComponent' id="tooltip" place="right"
                style={{

                }} />
        </div>
    )
}

export default Oneliners;
