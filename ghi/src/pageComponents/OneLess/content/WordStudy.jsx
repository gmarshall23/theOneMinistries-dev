/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import './content.css';

const WordStudy = ({ content, studyDay, scrips }) => {
    // set variable for content
    const [docContent, setDocContent] = useState(content ? content.content : {});
    // prepare delta for quill
    const [info, setInfo] = useState([]);
    const [deltaInfo, setDeltaInfo] = useState({});
    const data = content ? content.content : {};
    const scripObj = {};
    const testme = (e) => {
        console.log('testme clicked, verse:', e.target.getAttribute('data-verse'));
    };
    for (let s of scrips) {
        scripObj[s.quote] = `<span id=${s.quote} className="verse-span" data-verse="${s.quote}">${s.quote}</span>`;
    }

    const dataFunc = async () => {
        // set docContent to content field
        // if content is Small/Big Bite, set info to array of deltas
        if (content.title === 'Small Bite' || content.title === 'Big Bite') {
            setInfo(data.info);
            console.log('List of Deltas ready to display in WordStudy', data.info);
            let deltaLesson = data.info[0].lesson;
            const convertedDelta = await convertVerses(deltaLesson);
            setDeltaInfo(convertedDelta);
            console.log('deltaLesson', convertedDelta);
        } else if (content.category === 'Theme') {
            setInfo(data.topics);
            console.log('List of Topics ready to display in WordStudy', data.topics);
        }
        console.log('data to be displayed in WordStudy', content.content);

    }
    const convertVerses = (delta) => {
        if (!delta || !delta.ops) return;
        // Create a shallow copy if needed (for a deep copy you can use JSON.parse(JSON.stringify(delta)))
        let newDelta = JSON.parse(JSON.stringify(delta));
        newDelta.ops.forEach((item, idx) => {
            if (item.insert.includes(':') && !item.insert.includes(': ')) {
                newDelta.ops[idx].insert = scripObj[item.insert];
                console.log('Converted verse:', item.insert, 'at index', idx);
            }
        });
        return newDelta;
    }
    useEffect(() => {
        console.log('WordStudy component mounted')
        dataFunc();
        console.log('content info to display in WordStudy', content);
    }, [content]);
    useEffect(() => {
        deltaInfo && console.log('delta changed: deltaInfo to display in WordStudy', deltaInfo);
        // Tooltip.rebuild();
    }, [deltaInfo]);
    // Helper function to convert delta to HTML
    const generateHtmlFromDelta = (delta) => {
        if (delta && delta.ops) {
            const converter = new QuillDeltaToHtmlConverter(delta.ops, { encodeHtml: false });
            return converter.convert();
        }
        return '';
    };
    return (

        <div id = 'myTest' style={{ height: '100vh' }}  onClick={(e) => {
            const target = e.target;
            // if (target.tagName === 'SPAN' && target.classList.contains('tipText')) {
            //     // You can access data-verse attribute if needed:
                const verse = target.getAttribute('data-verse');
            //     testme({ target });
            //     // or simply call testme(verse) if you modify testme accordingly.
            // }
            console.log('clicked on WordStudy', e.target);
            console.log('data-verse', verse);
        }}>
            {data?.info && <div className="quillHeader">
                <Dropdown className="w-50 text-start">
                    <Dropdown.Toggle variant="primary" id="dropdown-info" >
                        Select another Small bite Document
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {data.info.map((item, index) => (
                            <Dropdown.Item key={index}>
                                {item.docTitle}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>}
            {content ? <h2>{content.title}</h2> : <h2>Nothing to display</h2>}
            <div>
                {data?.info ? (
                    <ReactQuill
                        value={generateHtmlFromDelta(deltaInfo)}
                        readOnly={true}
                        theme="bubble"
                    />
                ) : data?.topics ? (<div className="p-2"><ul>{(data.topics).map((item, idx) => (<li key={idx}>{item.name}</li>))}</ul></div>) : <h2>Nothing to display</h2>}
            </div>
            {/* react-bootstrap ToolTip component used for scriptures and definitions */}
            <Tooltip id="tooltip" place="right"
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
        </div>

    )
}

export default WordStudy
