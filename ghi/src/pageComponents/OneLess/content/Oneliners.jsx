import { useState} from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import axios from 'axios';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import statementsData from '../../../assets/Statements';
import cross from './one-less-assets/cross.jpeg';

const Oneliners = () => {

    const sticky = { className: 'sticky-top sticky', onClick: () => window.refresh() }
    const [oneLiner, setOneLiner] = useState(null)
    const [showOne, setShowOne] = useState(false)
    const [showAll, setShowAll] = useState(true)
    const [selectedStatement, setSelectedStatement] = useState('');

    const handleSelect = (eventKey) => {
        setSelectedStatement(statementsData.oneliners[eventKey]);
      };
    const handleShowOne = (e) => {
        e.preventDefault();
        const randNumber = Math.floor(Math.random() * statementsData.oneLiners.length);
        setOneLiner(statementsData.oneLiners[randNumber])
        console.log(statementsData.oneLiners[randNumber])
        setShowOne(true)
    }

    const handleClickAll = (e) => {
        e.preventDefault();
        const randNumber = `The Entire List of Meditation Topics:`;
        // setShowAll(!showAll)
    }

    return (
        <div className="">
            <h2><b>One Liners for the Day</b></h2>

            <div className="shootPics row justify-content-between m-0 p-2">
                <img className="col-md-4 p-4 img cloud " src={cross} alt="church" />
                <img className="col-md-4 p-4 img cloud " src={cross} alt="church" />
                <img className="col-md-4 p-4 img cloud " src={cross} alt="church" />
            </div>
            <p className="rndm pix20">Psalms 19 asks that the meditation of our heart be pleasing in the sight of the Lord. Pick a One Liner or "Post-it-Note" for your <u className="toolTipHover" data-tooltip-id="tooltip" data-html="true" data-tooltip-content="MEDITATE 1. Reading 2. Believing 3. Absorbing (Thinking over and over again) 4. Applying 5. Obeying">Meditation</u> Thoughts today.</p>
            <p className="white">There are over 150 to choose from. Click until one speaks to your spirit.</p>
            <p className="rojo pix15">NOTE: PLACEHOLDER, this feature works but is not yet fully functional.</p>

            {/* <div>
                {statementsData.statements.map((statement, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: statement }} />
                ))}
            </div> */}
            <div className="">
                <Button className="rand" id="click" onClick={handleShowOne} >See a oneliner</Button>
                <blockquote className='oneLiner' dangerouslySetInnerHTML={{ __html: oneLiner }} />
            </div>

            <div  >
                <DropdownButton
                    id="dropdown-basic-button"
                    className = "custom-dropdown"
                    data-tooltip-content="Click for All"
                    onSelect={handleSelect}
                >
                    {statementsData.oneLiners.map((statement, index) => (

                        <Dropdown.Item className ='' key={index} dangerouslySetInnerHTML={{ __html: statement }} eventKey={index} />
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
