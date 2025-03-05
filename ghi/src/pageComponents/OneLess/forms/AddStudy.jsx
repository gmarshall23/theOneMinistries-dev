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
    // const handleQuillChange-old = (value) => {
    //     setStudyData({
    //         ...studyData,
    //         lesson: value
    //     });
    // };
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
        axios.put('http://localhost:4040/add_study_info', { newSudy: {
            title: studyData.title,
            newInfo: newInfo
        }})
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
          [{ font: [] }],
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
        <div className='container border border-primary rounded add-study'>
            <form onSubmit={handleSubmit} className="container mt-5 w-50">
                <div className='row align-items-center'>
                    <div className="col-6">
                        <div className="row align-items-center">
                            <label htmlFor="catagory" className="border p-1  col-5">Catagory</label>
                            <input
                                type="text"
                                name="catagory"
                                id="catagory"
                                className="p-1  col-5"
                                value={studyData.catagory}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row m-0 p-0 aligb-items-center">
                            <label htmlFor="docId" className="p-1  col-5">Doc ID</label>
                            <input
                                type="text"
                                name="docId"
                                id="docId"
                                className="p-1  col-5"
                                value={studyData.docId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row m-0 p-0 aligb-items-center">
                            <label htmlFor="title" className="p-1  col-5">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="p-1  col-5"
                                value={studyData.title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row m-0 p-0 aligb-items-center">
                            <label htmlFor="docTitle" className="p-1  col-5">Doc Title</label>
                            <input
                                type="text"
                                name="docTitle"
                                id="docTitle"
                                className="p-1  col-5"
                                value={studyData.docTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row m-0 p-0 aligb-items-center">
                            <label htmlFor="docType" className="p-1  col-5">Doc Type</label>
                            <input
                                type="text"
                                name="docType"
                                id="docType"
                                className="p-1  col-5"
                                value={studyData.docType}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row m-0 p-0 aligb-items-center">
                            <label htmlFor="calendar" className="p-1  col-5">Calendar</label>
                            <input
                                type="text"
                                name="calendar"
                                id="calendar"
                                className="p-1  col-5"
                                value={studyData.calendar}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="lesson" className="form-label">Study Text</label>
                    <textarea
                        name="lesson"
                        id="lesson"
                        className="form-control"
                        size="50"
                        value={studyData.lesson}
                        onChange={handleChange}
                    ></textarea>
                </div> */}
                <div>
                <label htmlFor="lesson" className="form-label">Study Text</label>
                    <ReactQuill
                        name="lesson"
                        id="lesson"
                        modules={modules}
                        formats={formats}
                        value={studyData.lesson}
                        onChange={handleQuillChange}
                        placeholder="Enter your study text with formatting..."
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddStudy;
