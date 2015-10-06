var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/test5');

var Counters = mongoose.Schema({
  _id: String,
  next: Number     
});

// Added increment funtion in Schema.
// Model.findByIdAndUpdate(id, [update], [options], [callback])
// @param [update] - increment 
// @param [options] 
// new: true to return the modified document rather than the original. 
// upsert: creates the object if it doesn't exist.
// select: sets the document fields to return
Counters.statics.increment = function (counter, callback) {
    return this.findByIdAndUpdate(counter, { $inc: { next: 1 } }, {new: true, upsert: true, select: {next: 1}}, callback);
};

var Counter = mongoose.model('counters', Counters);

Counter.increment('ticketId', function (err, result) {
    if (err) {
        console.error('Counter on photo save error: ' + err); return;
    }
	console.log(result.next);
});

// MongoDB Auto-Incrementing 
// http://docs.mongodb.org/manual/tutorial/create-an-auto-incrementing-field/
// http://stackoverflow.com/questions/7334390/has-mongoose-support-findandmodify-mongodb-method
// http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate


//http://2-hats.hateblo.jp/entry/Mongoose%E3%81%A7auto_increment%E3%81%AE%E5%AE%9F%E8%A3%85
//https://www.npmjs.com/package/mongoose
//http://stackoverflow.com/questions/24023912/avoid-unstable-releases-of-mongoose-in-npm-package-json
/*
C:\works\Hiroko\AngularJS-sample10>npm install mongoose@3.8.x --save
npm WARN package.json AngularJS-sample10@1.0.0 No description
npm WARN package.json AngularJS-sample10@1.0.0 No repository field.
npm WARN package.json AngularJS-sample10@1.0.0 No README data
*/