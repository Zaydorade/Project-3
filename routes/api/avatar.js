const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');
const multer = require('multer')
const path = require ('path')

module.exports = router;

//Set storage engine
const storage = multer.diskStorage({
    destination: 'client/build/images/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


//Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // check mimetype
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}


// Init upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('avatar');

router.route('/')
.get((req, res) => {
    res.json({status: 'ok'})
})
.post((req, res, next) => {
    console.log(req.user.username)
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
                    avatar : "/images/" + req.file.filename
                }, {useFindAndModify: false})
                .then((user) => {
                    console.log(`Update complete, ${user.username}`)
                    res.json(user)})
                .catch(err => res.json(err))
                .catch((error) =>res.json(error))                }
        }
    })
})