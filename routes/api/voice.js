const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');
const multer = require('multer')
const path = require ('path')

module.exports = router;

//Set storage engine
const storage = multer.diskStorage({
    destination: 'client/public/voices/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


//Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /audio|mp3|m4a|wav|aac|aiff/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mimetype
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Audio Only!');
    }
}


// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('uservoice');

router.route('/')
.get((req, res) => {
    res.json({status: 'ok'})
})
.post((req, res, next) => {
    const currentUser = req.user.username
    upload(req, res, (err) => {
        console.log(req.body)
        if (err) {
            console.log(err)
            res.json(err)
        }
        else {
            if (req.file == undefined) {
                res.json({'error': "No File Submitted"});
                console.log('No File Submitted')
            } else {
                db.Users
                .findOneAndUpdate({username: currentUser}, {
                    uservoice : "/voices/" + req.file.filename + req.user.username
                }, {useFindAndModify: false})
                .then((user) => {
                    res.json(user)})
                .catch(err => res.json(err))
                .catch((error) =>res.json(error))                }
        }
    })
})