import { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddStudy = () => {
    const [studyData, setStudyData] = useState({});

    const handleChange = (e) => {
        setStudyData({
            ...studyData,
            [e.target.name]: e.target.value
        });
    };
    const handleQuillChange = (content, delta, source, editor) => {
        setStudyData({
            ...studyData,
            lesson: editor.getContents()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInfo = {
            docId: studyData.docId,
            docTitle: studyData.docTitle,
            docType: studyData.docType,
            calendar: studyData.calendar,
            lesson: studyData.lesson
        }
        // const newStudy = {
        //     title: studyData.title,
        //     newInfo: newInfo
        // }
        console.log('newStudy data ready to submit:', {
            title: studyData.title,
            newInfo: newInfo
        });
        axios.put('http://localhost:4040/add_study_info', {
            newSudy: {
                title: studyData.title,
                newInfo: newInfo
            }
        })
            .then(response => {
                console.log('Response:', response.data);
            }).then(() => {
                setStudyData({})
                // window.location.href = '/one-less';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log('Submitted data:', newInfo);
    }

    // quill options
    const modules = {
        toolbar: [
            // Font selection
            [{ font: [1,2,3, false] }],
            // Header sizes
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            // Formatting options
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            // List and indentation
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            // Links, images, and videos
            ['link', 'image', 'video'],
            // Color and background color
            [{ color: [] }, { background: [] }],
            // Text align
            [{ align: [] }],
            // Remove formatting button
            ['clean']
        ]
    };

    const formats = [
        'font', 'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video',
        'color', 'background', 'align'
    ];

    return (
        <div className='container-fluid border border-primary rounded add-study m-4 p-4 w-75'>
            <form onSubmit={handleSubmit} className="container-fluid mt-5">
                <div className='row align-items-center'>
                    <div className="col-6">
                        <div className="row align-items-center">
                            <label htmlFor="catagory" className="p-0 m-1 col-4">Catagory:</label>
                            <input
                                type="text"
                                name="catagory"
                                id="catagory"
                                className="p-1 m-1 col-5 border rounded"
                                value={studyData.catagory}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row align-items-center">
                            <label htmlFor="docId" className="p-1 m-1 col-4">Doc ID:</label>
                            <input
                                type="text"
                                name="docId"
                                id="docId"
                                className="p-1 m-1 col-5 border rounded"
                                value={studyData.docId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row align-items-center">
                            <label htmlFor="title" className="p-1 m-1 col-4">Title:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="p-1 m-1 col-5 border rounded"
                                value={studyData.title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row align-items-center">
                            <label htmlFor="docTitle" className="p-1 m-1 col-4">Doc Title:</label>
                            <input
                                type="text"
                                name="docTitle"
                                id="docTitle"
                                className="p-1 m-1 col-5 border rounded"
                                value={studyData.docTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row align-items-center">
                            <label htmlFor="docType" className="p-1 m-1 col-4">Doc Type:</label>
                            <input
                                type="text"
                                name="docType"
                                id="docType"
                                className="p-1 m-1 col-5 border rounded"
                                value={studyData.docType}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row align-items-center">
                            <label htmlFor="calendar" className="p-1 m-1 col-4">Day:</label>
                            <input
                                type="text"
                                name="calendar"
                                id="calendar"
                                className="p-1 m-1 col-5 border rounded"
                                value={studyData.calendar}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className='d.flex flex-column  align-items-center justify-content-center'>
                    <label htmlFor="lesson" className="form-label">Study Text</label>
                    <ReactQuill
                        className='border rounded p-1 m-2 min-vh-100 '
                        name="lesson"
                        id="lesson"
                        modules={modules}
                        formats={formats}
                        value={studyData.lesson}
                        onChange={handleQuillChange}
                        placeholder="Enter your study text with formatting..."
                        style={{ width: '100%', height: '100%' }}
                    />
                    {/* <button type="submit" className="w-50 btn btn-primary"></button> */}
                </div>
                <div className="row align-items-center justify-content-center">
                    <button type="submit" className="text-center w-25 btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudy;
