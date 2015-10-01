var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/helpdesk');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('MongoDB connection success.');
});

// Schema
var profileSchema = mongoose.Schema({
    firstName: String,
	lastName: String,
});

// Compiling Schema into Model
var Profile = mongoose.model('Profile', profileSchema);

var profileData = [
	{firstName: 'Hiroko', lastName: 'Yamaji'},
	{firstName: 'test1', lastName: 'test1'},
	{firstName: 'test2', lastName: 'test2'},
];

// Insert Data
Profile.collection.insert(profileData, onInsert);

// Insert function
function onInsert(err, docs){
	if(err){
		console.log('ERROR Insert Profile');
	}else{
		console.log('Insert Success')
	}
}

//http://mongoosejs.com/docs/index.html
// http://stackoverflow.com/questions/16726330/mongoose-mongodb-batch-insert