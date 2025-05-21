/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';


// assume `delta` and `scrips` come in via props
const WordStudy = ({ content, studyDay, scrips }) => {
    const [delta, setDelta] = useState({});
  const data = content ? content.content : {};

  // Process the content data and update state.
  const dataFunc = async () => {
    if (content.title === 'Small Bite' || content.title === 'Big Bite') {
      let deltaLesson = data.info[0].lesson;
      setDelta(deltaLesson);
      console.log('Delta', deltaLesson);
    } else if (content.category === 'Theme') {
      // Process topics if needed.
      console.log('Topics ready to display', data.topics);
    }
    console.log('Content to be displayed in WordStudy', data);
  };
  const selectStudyItem = async (e) => {
    console.log ('list of study items', data.info)
    console.log ('Study item selected', e.target.id);

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
    <div id="wordStudyContainer" style={{ height: '100vh' }}>
    {data?.info && (
        <div className="quillHeader">
          <Dropdown className="w-50 text-start">
            <Dropdown.Toggle variant="primary" id="dropdown-info">
              Select another Small Bite Document
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {data.info.map((item,idx) => (
                <Dropdown.Item key={idx} id={item.docTitle} onClick={selectStudyItem}>{item.docTitle}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
      {content ? <h2>{content.title}</h2> : <h2>Nothing to display</h2>}
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

      {/* inject your processed HTML */}

    </div>
  );
};




// ------------------------------------------------------------------






export default WordStudy;
