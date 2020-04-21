const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/gsn';


mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.listen(PORT, function() {
	console.log(`App running on port ${PORT}`);
});
