import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddStudy = () => {
    const [studyData, setStudyData] = useState({
        title: '',
        category: '',
        docTitle: '',
        docId: '',
        docType: '',
        calendar: '',
        lesson: { ops: [{ insert: "\n" }] } // empty delta for Quill
    });
    const [allStudies, setAllStudies] = useState([]);
    const [searchCategory, setSearchCategory] = useState('');
    const [search, setSearch] = useState('');
    const [resultId, setResultId] = useState('');
    // refs
    const docTitleRef = useRef();
    const docIdRef = useRef();
    const titleRef = useRef();
    const categoryRef = useRef();
    const docTypeRef = useRef();
    const calendarRef = useRef();
    const lessonRef = useRef();



    const fetchStudies = async () => {
        try {
            const response = await axios.get('http://localhost:4040/get_studies');
            setAllStudies(response.data);
        } catch (error) {
            console.error('Error fetching studies:', error);
        }
    };
    const searchData = async () => {
        console.log('searching for:', searchCategory, search);
        console.log('studies to search:', allStudies);
        let result = []
        switch (searchCategory) {
            case 'docTitle':
                result = allStudies.filter(study => study.content?.docTitle && study.content.docTitle.toLowerCase() === search.toLowerCase());
                break;
            case 'docId':
                result = allStudies.filter(study => study.content?.docId && study.content.docId.toLowerCase() === search.toLowerCase())
                break;
            case 'title':
                result = allStudies.filter(study => study.title.toLowerCase().includes(search.toLowerCase()));
                break;
            default:
                result = ['Invalid search category'];
                break;
        }
        console.log('resultId:', result[0] ? result[0]._id : 'No results found');
        console.log('search result:', result[0] ? result[0] : 'No results found');
        if (result[0]) {
            const flatStudyData = {
                title: result[0].title,
                category: result[0].category,
                // pull nested content properties explicitly:
                docTitle: result[0].content?.docTitle,
                docId: result[0].content?.docId,
                docType: result[0].content?.docType,
                calendar: result[0].content?.calendar,
                lesson: result[0].content?.lesson.ops || { ops: [{ insert: "\n" }] } // ensure lesson is a delta

            };

            setStudyData({ ...flatStudyData});
            setResultId(result[0]._id);
        }
    }
    const updateDocument = async () => {


        axios.put(`http://localhost:4040/update_study/${resultId}`, {
                title: studyData.title,
                content: {
                    docId: studyData.docId,
                    docTitle: studyData.docTitle,
                    docType: studyData.docType,
                    calendar: studyData.calendar,
                    lesson: studyData.lesson
                },
                category: studyData.category
            })
            .then(response => {
                console.log('Response:', response.data);
            }).then(() => {
                setStudyData({
                    category: '',
                    title: '',
                    docId: '',
                    docTitle: '',
                    docType: '',
                    calendar: '',

                })
            })
            .then(() => {
                fetchStudies();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log('Updated data:', studyData);
    }
    useEffect(() => {
        fetchStudies();
    }, []);
    useEffect(() => {
        console.log('Study data updated:', studyData);
    }, [studyData]);
    // useEffect(() => {
    //     console.log('All studies:', allStudies);
    // }, [allStudies]);
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
        const category = studyData.category;
        const title = studyData.title;
        const content = {
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
        const newStudy = {
            category: category,
            title: title,
            content: content
        }
        console.log('newStudy data ready to submit:', newStudy);
        axios.post('http://localhost:4040/create_study',
            {
                title: title,
                content: content,
                category: category
            })
            .then(response => {
                console.log('Response:', response.data);
            }).then(() => {
                setStudyData({
                    category: '',
                    title: '',
                    docId: '',
                    docTitle: '',
                    docType: '',
                    calendar: '',

                })
                fetchStudies();
                // window.location.href = '/one-less';
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log('Submitted data:', newStudy);
    }

    // quill options
    const modules = {
        toolbar: [
            // Font selection
            [{ font: [1, 2, 3, false] }],
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
            <div className='row border m-0 p-0 align-items-center justify-content-center'>
                <p className='col-lg-2 m-0 text-end p-2'><b>Search by:</b></p>
                <select
                    className="col-lg-3 p-2"
                    aria-label="Default select example"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                >
                    <option defaultValue>Choose Category</option>
                    <option value="docTitle">Doc Title (in Study Group)</option>
                    <option value="docId">Doc ID</option>
                    <option value="title">Title (not in Study Group)</option>
                </select>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="p-2 m-1 col-4 border rounded"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="button" onClick={searchData} className="text-center w-25 btn btn-warning">Search</button>
            </div>
            <form onSubmit={handleSubmit} className="container-fluid mt-5">
                <div className='row align-items-center'>
                    <div className="col-6">
                        <div className="row align-items-center">
                            <label htmlFor="category" className="p-0 m-1 col-4">category:</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                ref={categoryRef}
                                className="p-1 m-1 col-5 border rounded"
                                value={studyData.category}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row align-items-center">
                            <label htmlFor="docId" className="p-1 m-1 col-4">Doc ID:</label>
                            <input
                                type="text"
                                name="docId"
                                id="docId"
                                ref={docIdRef}
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
                                ref={titleRef}
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
                                ref={docTitleRef}
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
                                ref={docTypeRef}
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
                                ref={calendarRef}
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
                        ref={lessonRef}
                        modules={modules}
                        formats={formats}
                        value={studyData.lesson}
                        onChange={handleQuillChange}
                        placeholder="Enter your study text with formatting..."
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className="row align-items-center justify-content-center">
                    <button type="submit" className="text-center w-25 btn btn-primary">Submit</button>
                    <button type="button" onClick={updateDocument} className="text-center w-25 btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default AddStudy;
