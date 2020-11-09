const axios = require('axios');
const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');
const multer = require('multer')
const path = require ('path')
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')

module.exports = router;

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: 'us-east-1'
});

const s3 = new aws.S3();

//Set storage engine
// const storage = multer.diskStorage({
//     destination: 'client/build/images/',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });


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


// // Init upload
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 10000000 },
//     fileFilter: function (req, file, cb) {
//         checkFileType(file, cb);
//     }
// }).single('avatar');

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME,
        key: function (req, file, cb) {
            console.log(file);
            cb(null,  file.fieldname + '-' + Date.now() + path.extname(file.originalname)); //use Date.now() for unique file keys
        }
    })
});




router.route('/')
.get((req, res) => {
    res.json({status: 'ok'})
})
.post((req, res, next) => {
    console.log(req.user.username)
    const currentUser = req.user.username
    upload(req, res, (err) => {
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
                    console.log(`Avatar update complete, ${user.username}`)
                    res.redirect('/account')})
                .catch(err => res.json(err))
                .catch((error) =>res.json(error))}
        }
    })
})
