const Study = require("../models/Study");
const path = require('path');

module.exports = {
    // For walkWord //
    createStudy(req, res) {
        const newStudy = new Study({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            date: req.body.date
        })
        newStudy.save()
            .then(resp => {
                res.json(resp)
            })
            .catch(e => {
                console.log(e)
                res.json(e)
            })
    },
    updateStudy(req, res) {
        Study.findByIdAndUpdate
            (req.params.id, req.body, { new: true })
            .then(resp => {
                res.json(resp)
            })
            .catch(e => {
                console.log(e)
                res.json(e)
            })
    },
    addStudyInfo(req, res) {
        const newInfoObj = req.body.newInfo;
    console.log('Object to add in newInfoObj', newInfoObj);

    Study.findOne({ title: 'Small Bite' })
        .then(doc => {
            if (!doc) {
                return res.status(404).json({ error: 'Document not found' });
            }
            // Ensure doc.content is an object and that info is an array
            if (!doc.content || !Array.isArray(doc.content.info)) {
                doc.content = { ...doc.content, info: [] };
            }
            doc.content.info.push(newInfoObj);
            return doc.save();
        })
        .then(resp => {
            res.json(resp);
        })
        .catch(e => {
            console.log(e);
            res.json(e);
        });
    },
    getStudies(req, res) {
        Study.find()
            .then(resp => {
                res.json(resp)
            })
            .catch(e => {
                console.log(e)
                res.json(e)
            })
    },
    getStudyContent(req, res) {
        const filePath = path.join(__dirname, '../assets/pdfs/youMatter.pdf');
        console.log('filePath', filePath)
        res.sendFile(filePath);
    }
}
