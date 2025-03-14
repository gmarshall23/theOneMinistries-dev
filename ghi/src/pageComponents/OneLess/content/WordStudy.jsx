/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

const WordStudy = ({ content, studyDay }) => {
    // set variable for content
    const [docContent, setDocContent] = useState(content?content.content:{});
    // prepare delta for quill
    const [info, setInfo] = useState([]);
    const [deltaInfo, setDeltaInfo] = useState({});
    const data = content?content.content:{};

    // const [pdfUrl, setPdfUrl] = useState("");
    // const pdfUrl = "http://localhost:4040/study_content";
    const dataFunc = async () => {
        console.log('dataFunc accessed');
        // set docContent to content field
        // if content is Small/Big Bite, set info to array of deltas
        if (content.title === 'Small Bite' || content.title === 'Big Bite') {
            setInfo(data.info);
            console.log('List of Deltas ready to display in WordStudy', data.info);
            setDeltaInfo(data.info[0].lesson); // set deltaInfo to first delta in array
        } else if (content.category === 'Theme') {
            setInfo(data.topics);
            console.log('List of Topics ready to display in WordStudy', data.topics);
        }


        console.log('data to be displayed in WordStudy', content.content);

    }

    useEffect(() => {
        console.log('WordStudy component mounted')
        dataFunc();
        console.log('content info to display in WordStudy', content);
    }, [content]);
    useEffect(() => {
        console.log('delta changed: deltaInfo to display in WordStudy', deltaInfo);
    }, [deltaInfo]);
    // Helper function to convert delta to HTML
    const generateHtmlFromDelta = (delta) => {
        if (delta && delta.ops) {
            const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
            return converter.convert();
        }
        return '';
    };
    return (

        <div style={{ height: '100vh' }}>
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
                ):data?.topics ? (<div className="p-2"><ul>{(data.topics).map((item,idx)=>(<li key={idx}>{item.name}</li>))}</ul></div>):<h2>Nothing to display</h2>}
            </div>
        </div>

    )
}

export default WordStudy
