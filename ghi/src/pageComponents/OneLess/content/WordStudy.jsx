/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'

const WordStudy = ({ content }) => {
    const [wordStudy, setWordStudy] = useState({});
    // const [pdfUrl, setPdfUrl] = useState("");
    const pdfUrl = "http://localhost:4040/study_content";
    const dataFunc = async () => {
        console.log('dataFunc accessed');
        await setWordStudy(content.content);

        // const resp = await axios.get('http://localhost:4040/study_content', { responseType: 'blob' });
        // const fileURL = URL.createObjectURL(resp.data);
        // setPdfUrl(fileURL);

        // const resp = await axios.get('http://localhost:4040/study_content');
        // await setPdfUrl(resp.data);
        console.log('data to be displayed in WordStudy', wordStudy);
    }

    useEffect(() => {
        console.log('WordStudy component mounted')
        dataFunc();
        console.log('content info to display in WordStudy', wordStudy);
        // content.topics&&console.log('content topics to display in WordStudy', content.topics);

    }, [wordStudy, content, pdfUrl]);
    return (

        <div style={{ height: '100vh' }}>
            {wordStudy.info?<iframe
            src={pdfUrl}
            title="You Matter PDF"
            style={{ width: '100%', height: '100%', border: 'none' }} />:wordStudy.topics?<h2>Ready for Topics</h2>:<h2>Nothing to display</h2>}
        </div>
    )
}

export default WordStudy
