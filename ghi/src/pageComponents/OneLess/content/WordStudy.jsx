/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import './content.css'


// assume `delta` and `scrips` come in via props
const WordStudy = ({ content, studyDay, scrips, studies }) => {
  console.log('WordStudy loaded', content);
  const [delta, setDelta] = useState({});
  const [displayedContent, setDisplayedContent] = useState({});

  const data = content.content?content.content:{};

  // Process the content data and update state.
  const dataFunc = async () => {
    if (content.title === 'Small Bite' || content.title === 'Big Bite') {
      let deltaLesson = data.lesson;
      setDelta(deltaLesson);
      setDisplayedContent(content)
      console.log('Delta', deltaLesson);
    } else if (content.category === 'Theme') {
      // Process topics if needed.
      console.log('Topics ready to display', data);
    }
    console.log('Content to be displayed in WordStudy', studies);
  };
  const selectStudyItem = async (e) => {
    console.log ('list of study items', studies)
    console.log ('Study item selected', e.target.id);
    const newStudy = await studies.filter(item => item.content.docTitle === e.target.id);
    setDelta(newStudy[0].content.lesson);
    setDisplayedContent(newStudy[0].content);

  }
  useEffect(() => {
    console.log('WordStudy component mounted');
    dataFunc();
  }, [content]);
  // build a lookup map
  const scripMap = useMemo(() => {
    const m = {};
    scrips.forEach(s => { m[s.quote] = s.scripture });
    return m;
  }, [scrips]);

  // convert Delta → HTML with your spans
  const html = useMemo(() => {
    if (!delta?.ops) return '';
    const converter = new QuillDeltaToHtmlConverter(delta.ops, { encodeHtml: false });
    return converter.convert().replace(
      /\b([1-3]?\s?[A-Za-z]+\s\d+:\d+)\b/g,
      m => {
        const scripture = scripMap[m] || '';
        return `<span class="tipText"
                       data-tooltip-id="tooltip"
                       data-tooltip-content="${scripture.replace(/"/g,'&quot;')}">
                  ${m}
                </span>`;
      }
    );
  }, [delta, scripMap]);

  return (

    <div id="wordStudyContainer" >
    {data.lesson&& (
        <div className="row justify-content-between quillHeader ">
          <Dropdown className="col-lg-6 text-start">
            <Dropdown.Toggle variant="primary" id="dropdown-info">
              Select another Small Bite Document
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {studies.map((item,idx) => (
                <Dropdown.Item key={idx} id={item.content.docTitle} onClick={selectStudyItem}>{item.content.docTitle}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div className=" col-lg-4 quillTitle">
            <p className='border text-end'>current study day: {displayedContent.calendar|| studyDay}</p>
            </div>
        </div>
      )}
      <div
        className="quill-viewer"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* only one Tooltip needed */}
      <Tooltip
        id="tooltip"
        place="right"
        style={{
          fontSize: '1.25rem',
          maxWidth: '30rem',
          whiteSpace: 'pre-line',
          color: 'red',
          backgroundColor: '#333',
          borderRadius: '8px',
          padding: '10px',
          textAlign: 'left'
        }}
      />
    </div>
  );
};




// ------------------------------------------------------------------






export default WordStudy;
