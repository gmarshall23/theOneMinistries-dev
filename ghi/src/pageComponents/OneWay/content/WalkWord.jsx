/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';
import WordStudy from './WordStudy';

const WalkWord = ({ user, setUser, studyDay, scrips }) => {
  // variable to hold the study items
  const [studies, setStudies] = useState([]);

  // vairiable for study journal entries
  const [journalEntry, setJournalEntry] = useState({
    date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD for date input
    subject: '',
    content: ''
  });
  const [journalEntries, setJournalEntries] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track which entry is being edited

  //  configuration for Dropdown options
  const [studyTitle, setStudyTitle] = useState('Choose an option');
  const [studiesGroup, setStudiesGroup] = useState([]);
  const [currentStudy, setCurrentStudy] = useState({});

  const handleSelect = async (eventKey, e, parentId) => {
    // handleSelect will assign catagory and title(eventKey) to be passed to WordStudy component
    e.preventDefault();
    // set study selected to display on page
    setStudiesGroup(parentId);
    setStudyTitle(eventKey);
    // await setStudyTitle(eventKey);
    // check for category and title to determine which study to display
    if (parentId === 'Study Group') {
      const studyGroup = await studies.filter(item => item.title === eventKey);
      const studyByDay = await studyGroup.filter(item => item.content.calendar == studyDay && item.title === eventKey);
      setCurrentStudy(studyByDay[0] || studyGroup[0]);
    } else if (parentId === 'Theme') {
      // set study selected to display on page
      console.log(`Theme data to send to WordStudy`, studyGroup);
    } else if (parentId === 'Prophets') {
      const prophetData = await studies.filter(item => item.title === eventKey);
      console.log(`Prophets data to send to WordStudy`, prophetData);
    } else {
      console.log(`study data`, parentId);
    }
  }

  const getData = async () => {
    // Get study items from database and puts them on the page: Note: this may be removed later if too large//
    const resp = await axios.get('http://localhost:4040/get_studies');
    const data = resp.data;
    setStudies(data);
    console.log('Studies from database', data);
  }
  useEffect(() => {
    console.log("WalkWord component mounted")
    // Get study items from database //
    studies.length < 1 && getData();
  }, [studies]);
  // useEffect for when currentStudy changes
  useEffect(() => {
    console.log('Current user journal entry', journalEntry);
    setJournalEntries(user?.journal || []);
  }, [user, journalEntry]);

  const handleJournalEntry = async (event) => {
    event.preventDefault();

    // Check if user exists
    if (!user) {
      console.error('User not found');
      return;
    }

    // Create the entry object
    const entryData = {
      date: journalEntry.date,
      subject: journalEntry.subject,
      content: journalEntry.content
    };

    let newJournal;

    // Check if we're editing an existing entry or creating a new one
    if (editingIndex !== null) {
      // Update existing entry
      newJournal = [...journalEntries];
      newJournal[editingIndex] = entryData;
    } else {
      // Add new entry
      newJournal = [...journalEntries, entryData];
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:4040/update_user`,
        { journal: newJournal },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      console.log('Update response:', response.data);

      // Update local user state and localStorage
      const updatedUser = response.data.user;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      // Update local journal entries
      setJournalEntries(newJournal);

      // Clear the form and reset editing state
      setJournalEntry({
        date: new Date().toISOString().split('T')[0],
        subject: '',
        content: ''
      });
      setEditingIndex(null);

    } catch (error) {
      console.error('Error updating user with journal entry:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
    }
  }

  const handleSelectJournalEntry = (entry, index) => {
    setJournalEntry({
      date: entry.date,
      subject: entry.subject,
      content: entry.content
    });
    setEditingIndex(index); // Set which entry we're editing
  }

  const handleDeleteJournalEntry = async () => {
    if (editingIndex === null) return;

    // Remove the entry at the editing index
    const newJournal = journalEntries.filter((_, index) => index !== editingIndex);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:4040/update_user`,
        { journal: newJournal },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      console.log('Delete response:', response.data);

      // Update local user state and localStorage
      const updatedUser = response.data.user;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      // Update local journal entries
      setJournalEntries(newJournal);

      // Clear the form and reset editing state
      setJournalEntry({
        date: new Date().toISOString().split('T')[0],
        subject: '',
        content: ''
      });
      setEditingIndex(null);

    } catch (error) {
      console.error('Error deleting journal entry:', error);
      console.error('Error response:', error.response?.data);
      console.error('Error status:', error.response?.status);
    }
  }


  return (
    <div> {/* Parent Div */}
      <div>
        <h2><b>A Walk in the Word</b></h2>
        <h3>Daily Devotionals and Bible Study</h3>
      </div>

      <div className='study-menu'>
        <p>Study By: {studyTitle} selected</p>
        <div className='row'>
          <Dropdown onSelect={(eventKey, e) => handleSelect(eventKey, e, 'Study Group')} id={'study-group'} className='col-2'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Study Group
            </Dropdown.Toggle>
            <Dropdown.Menu className='scrollable-menu'>
              <Dropdown.Item eventKey="Small Bite" id="Small Bite">Small Bite (one verse)</Dropdown.Item>
              <Dropdown.Item eventKey="Big Bite" id="Big Bite">One Passage of Cohesive Scripture</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={handleSelect} id='bible' className='col-2'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              By Bible
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Placeholder" id="Placeholder">Placeholder</Dropdown.Item>
              <Dropdown.Item eventKey="Old Testement" id="Old Testement">Old Testement</Dropdown.Item>
              <Dropdown.Item eventKey="New Testement" id="New Testement">New Testement</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={(eventKey, e) => handleSelect(eventKey, e, 'Theme')} id={'theme'} className='col-2'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              By Theme
            </Dropdown.Toggle>
            <Dropdown.Menu className='scrollable-menu'>
              <Dropdown.Item eventKey="Need For The New Life" >Need For The New Life</Dropdown.Item>
              <Dropdown.Item eventKey="Sharing Our Faith" >Sharing Our Faith</Dropdown.Item>
              <Dropdown.Item eventKey="Suffering" >Suffering</Dropdown.Item>
              <Dropdown.Item eventKey="Human Government" >Human Government</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={handleSelect} id={'book'} className='col-2'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              By Book
            </Dropdown.Toggle>

            <Dropdown.Menu className='scrollable-menu'>

              <Dropdown.Item eventKey="placeholder" className="rojo">PLACEHOLDER</Dropdown.Item>
              <Dropdown.Header>Old Testament</Dropdown.Header>
              <Dropdown.Item eventKey="genesis">Genesis</Dropdown.Item>
              <Dropdown.Item eventKey="exodus">Exodus</Dropdown.Item>
              <Dropdown.Header>New Testament</Dropdown.Header>
              <Dropdown.Item eventKey="matthew">Matthew</Dropdown.Item>
              <Dropdown.Item eventKey="mark">Mark</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={handleSelect} id={'character'} className='col-2'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              By Character
            </Dropdown.Toggle>

            <Dropdown.Menu className='scrollable-menu'>
              <Dropdown.Item eventKey="placeholder" className="rojo">PLACEHOLDER</Dropdown.Item>
              <Dropdown.Item eventKey="God">God</Dropdown.Item>
              <Dropdown.Item eventKey="Jesus">Jesus</Dropdown.Item>
              <Dropdown.Item eventKey="Moses">Moses</Dropdown.Item>
              <Dropdown.Item eventKey="Paul">Paul</Dropdown.Item>
              <Dropdown.Item eventKey="Elijah">Elijah</Dropdown.Item>
              <Dropdown.Item eventKey="Peter">Peter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={handleSelect} id={'prophet'} className='col-2'>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              By Prophet
            </Dropdown.Toggle>
            <Dropdown.Menu className='scrollable-menu'>
              <Dropdown.Item eventKey="Major Prophets">Major Prophets</Dropdown.Item>
              <Dropdown.Item eventKey="Minor Prophets">Minor Prophets</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className='mt-2 studies border border-primary border-4 rounded'>
        {!currentStudy && <h3>Select a Study</h3>}
        <WordStudy content={currentStudy} studyDay={studyDay} scrips={scrips} studies={studies.filter(item => item.title === studyTitle)} studyTitle={studyTitle} />
      </div>
      <div className='journal-content row m-0 p-0 border border-primary border-4 rounded'>
        <section className='col-8'>
          <Form id="entry" className='p-4' >
            <div className='row'>
              <Form.Group controlId="journalDate" className='col-3'>
                <Form.Label><strong>Date</strong></Form.Label>
                <Form.Control
                  type="date"
                  value={journalEntry.date}
                  onChange={(e) => setJournalEntry({ ...journalEntry, date: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="journalSubject" className='col-6'>
                <Form.Label><strong>Subject</strong></Form.Label>
                <Form.Control
                  type="text"
                  value={journalEntry.subject}
                  onChange={(e) => setJournalEntry({ ...journalEntry, subject: e.target.value })}
                />
              </Form.Group>
            </div>
            <Form.Group controlId="journalContent">
              <Form.Control
                as="textarea"
                rows={3}
                value={journalEntry.content}
                placeholder="Write your notes here..."
                onChange={(e) => setJournalEntry({ ...journalEntry, content: e.target.value })}
              />
            </Form.Group>

            <div className="d-flex gap-2">
              <Button type="button" className="btn btn-secondary mb-2" onClick={handleJournalEntry}>
                {editingIndex !== null ? 'Update' : 'Save'}
              </Button>

              {editingIndex !== null && (
                <Button
                  type="button"
                  className="btn btn-danger mb-2"
                  onClick={handleDeleteJournalEntry}
                >
                  Delete
                </Button>
              )}

              <Button
                type="button"
                className="btn btn-outline-info mb-2"
                onClick={() => {
                  setJournalEntry({
                    date: new Date().toISOString().split('T')[0],
                    subject: '',
                    content: ''
                  });
                  setEditingIndex(null);
                }}
              >
                New Entry
              </Button>
            </div>
          </Form>
        </section>

        <aside className="myEntry col-4 border-4 p-4">
          <p className='text-start journal-title'>My Journal Entries</p>
          {journalEntries && journalEntries.map((entry, index) => (
            <div
              key={index}
              className="entry"
              onClick={() => handleSelectJournalEntry(entry, index)}
              style={{ cursor: 'pointer', borderBottom: '1px solid #ddd' }}
            >
              <p className="mb-1 "><strong>{entry.subject}:</strong><span>
                <small className="text-center px-2 ">{entry.date}</small></span></p>
            </div>
          ))}
        </aside>
      </div>
      {/* End Parent Div */}
    </div>
  )
}

export default WalkWord
