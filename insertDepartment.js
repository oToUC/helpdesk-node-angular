/**
 * Created by hyamaji on 9/1/2015.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test1');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('MongoDB connection success.');
});

// Schema
var departmentSchema = mongoose.Schema({
    name: String,
});

// Compiling Schema into Model
var Department = mongoose.model('Department', departmentSchema);

/*var DepartmentData = [
    {name: 'Marketing'},
    {name: 'IT'},
    {name: 'HR'},
    {name: 'Accounting'},
    {name: 'Design'},
    {name: 'Administration'},
];
*/

var d1 = new Department({
    name: 'Marketing',
});

d1.save(function(err, doc){
    if(err) console.log(err);



});


// Insert Data
//Department.collection.insert(DepartmentData, onInsert);

// Insert function
/*
function onInsert(err, docs){
    if(err){
        console.log('ERROR Insert Department');
    }else{
        console.log('Insert Success')
    }
}*/

//http://mongoosejs.com/docs/index.html
// http://stackoverflow.com/questions/16726330/mongoose-mongodb-batch-insert
//db.getCollection('profiles').find().sort({firstName: 1})