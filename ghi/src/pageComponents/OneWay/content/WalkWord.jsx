/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import axios from 'axios';
import WordStudy from './WordStudy';
import "react-bootstrap-submenu/dist/index.css";

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
  // const [studiesGroup, setStudiesGroup] = useState([]);
  const [currentStudy, setCurrentStudy] = useState({});
  // const [prophets, setProphets] = useState([])

  const handleSelect = async (e, eventKey, parentId) => {
    // handleSelect will assign category and title(eventKey) to be passed to WordStudy component

    // setStudiesGroup(parentId);
    setStudyTitle(eventKey);
    // check for category and title to determine which study to display
    if (parentId === 'Study Group') {
      const studyGroup = studies.filter(item => item.title === eventKey);
      const studyByDay = studyGroup.filter(item => item.content.calendar == studyDay && item.title === eventKey);
      setCurrentStudy(studyByDay[0] || studyGroup[0]);
    } else if (parentId === 'Theme') {
      // set study selected to display on page
      const themeData = studies.filter(item => item.title === eventKey);
      console.log(studies);
      console.log('theme to get:', themeData[0])
      setCurrentStudy(themeData[0]);

    } else if (parentId === 'Where Is Jesus') {
      const whereIsJesusData = studies.filter(item => item.title === eventKey);
      console.log(`Where Is Jesus data to send to WordStudy`, whereIsJesusData);
      console.log('whereIsJesus to get:', e.currentTarget.innerText);
      // let obj1 = {};
      for ( const obj of whereIsJesusData) {

        if (obj.content.docTitle === e.currentTarget.innerText) {
          console.log("obj content to use", obj.content)
          setCurrentStudy(obj);
        }
      }
    } else if (parentId === 'Prophets') {
      // const parentIdTitle = e.currentTarget.closest('.DropdownSubmenu').id;

      const prophetData = studies.filter(item => item.title === eventKey);
      console.log(`Prophets data to send to WordStudy`, prophetData);
      console.log('prophet to get:', e.currentTarget.innerText);
      // let obj1 = {};
      for ( const obj of prophetData) {

        if (obj.content.docTitle === e.currentTarget.innerText) {
          console.log("obj content to use", obj.content)
          setCurrentStudy(obj);
        }
      }
      // const study = studies.filter(item => item.content.docTitle === e.eventKey);
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
        <Navbar bg="light" expand="lg" className="mb-3">
          <Nav className="w-100 d-flex flex-row flex-wrap">
            <NavDropdownMenu
              title="Study Group"
              id="study-group"
              className="col-2"
            >
              <NavDropdown.Item eventKey="Small Bite" onClick={(e) => handleSelect(e, 'Small Bite', 'Study Group')}>Small Bite (one verse)</NavDropdown.Item>
              <NavDropdown.Item eventKey="Big Bite" onClick={(e) => handleSelect(e, 'Big Bite', 'Study Group')}>One Passage of Cohesive Scripture</NavDropdown.Item>
            </NavDropdownMenu>
            <NavDropdownMenu
              title="By Theme"
              id="theme"
              className="col-2"
            >
              {studies&&(studies.filter(item => item.category === 'By Theme')).map((theme) => (<NavDropdown.Item
              key={theme._id}
              eventKey={theme.title}
              onClick={(e) => handleSelect(e, theme.title, 'By Theme')}>{theme.content.docTitle}</NavDropdown.Item>))}
            </NavDropdownMenu>
            <NavDropdownMenu
              title="Where Is Jesus?"
              id="whereIsJesus"
              className="col-2"
            >
              {studies&&(studies.filter(item => item.category === 'Where Is Jesus')).map((theme) => (<NavDropdown.Item
              key={theme._id}
              eventKey={theme.title}
              onClick={(e) => handleSelect(e, theme.title, 'Where Is Jesus')}>{theme.content.docTitle}</NavDropdown.Item>))}
            </NavDropdownMenu>
            <NavDropdownMenu
              title="By Prophet"
              id="prophet"
              className="col-2"
            >
              <DropdownSubmenu
                title="Major Prophets"
                id="Major-Prophets"
                className="DropdownSubmenu submenu-left"

              >
                {(studies.filter(item => item.title === 'Major Prophets')).map((prophet) => (<NavDropdown.Item key={prophet._id} eventKey={prophet.content.docTitle} onClick={(e) => handleSelect(e, 'Major Prophets', 'Prophets')}>{prophet.content.docTitle}</NavDropdown.Item>))}
              </DropdownSubmenu>
              <DropdownSubmenu
                title="Minor Prophets"
                id="Minor-Prophets"
                className="DropdownSubmenu submenu-left"

              >
                {(studies.filter(item => item.title === 'Minor Prophets')).map((prophet) => (<NavDropdown.Item key={prophet._id} eventKey={prophet.content.docTitle} onClick={(e) => handleSelect(e, 'Minor Prophets', 'Prophets')}>{prophet.content.docTitle}</NavDropdown.Item>))}
              </DropdownSubmenu>
            </NavDropdownMenu>
          </Nav>
        </Navbar>
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
