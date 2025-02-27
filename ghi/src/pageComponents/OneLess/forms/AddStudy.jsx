import { useState } from 'react';
import axios from 'axios';

const AddStudy = () => {
    const [studyData, setStudyData] = useState({
        catagory: '',
        docId: '',
        title: '',
        docTitle: '',
        docType: '',
        calendar: '',
        lesson: ''
    });

    const handleChange = (e) => {
        setStudyData({
            ...studyData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = {
            title: studyData.title,
            docId: studyData.docId,
            docTitle: studyData.docTitle,
            docType: studyData.docType,
            calendar: studyData.calendar,
            lesson: studyData.lesson
        }
        axios.post('http://localhost:4040/study_info', newInfo)
            .then(response => {
                console.log('Response:', response.data);
            }).then(() => {
                setStudyData({
                    catagory: '',
                    docId: '',
                    title: '',
                    docTitle: '',
                    docType: '',
                    calendar: '',
                    lesson: ''
                })
                window.location.href = '/one-less';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log('Submitted data:', newInfo);
    }

    // Add your submit logic here

    return (
        <div className='container border border-primary rounded add-study'>
            <form onSubmit={handleSubmit} className="container mt-5 w-50">
                <div className="mb-3">
                    <label htmlFor="catagory" className="form-label">Catagory</label>
                    <input
                        type="text"
                        name="catagory"
                        id="catagory"
                        className="form-control"
                        value={studyData.catagory}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="docId" className="form-label">Doc ID</label>
                    <input
                        type="text"
                        name="docId"
                        id="docId"
                        className="form-control"
                        value={studyData.docId}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        value={studyData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="docTitle" className="form-label">Doc Title</label>
                    <input
                        type="text"
                        name="docTitle"
                        id="docTitle"
                        className="form-control"
                        value={studyData.docTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="docType" className="form-label">Doc Type</label>
                    <input
                        type="text"
                        name="docType"
                        id="docType"
                        className="form-control"
                        value={studyData.docType}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="calendar" className="form-label">Calendar</label>
                    <input
                        type="text"
                        name="calendar"
                        id="calendar"
                        className="form-control"
                        value={studyData.calendar}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lesson" className="form-label">Study Text</label>
                    <textarea
                        name="lesson"
                        id="lesson"
                        className="form-control"
                        size="50"
                        value={studyData.lesson}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddStudy;
