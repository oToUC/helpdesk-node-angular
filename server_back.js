// Module dependencies
var express = require('express');	// call express
var bodyParser = require('body-parser');
/*
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');
*/

var mongoose = require('mongoose');
var path = require('path');


//Create server
var app = express();  // define our app using express

// Configure Server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conenct to datebase
var connection = mongoose.connect('mongodb://root:root@ds029814.mongolab.com:29814/heroku_wcpf9fxk');
//autoIncrement.initialize(connection);

// Schemas
var ticketSchema = mongoose.Schema({
  userName: String,
  department: String,
  problemType: String,
  priority: String,
  title: String,
  description: String,
  created_at: { type: Date},
  status: {type: String, default: 'open'},
  closedDate: String,
  resolution: String,
  workHours: String,
//  ticketNum: Number
});

var profile = mongoose.Schema({
  firstName: String,
  lastName: String,
});
var department = mongoose.Schema({
    name: String
});


//Compiling a schema into a Model
//ticketSchema.plugin(autoIncrement.plugin, 'Ticket');
var Ticket = mongoose.model('Ticket', ticketSchema);
var ProfileModel = mongoose.model('Profile', profile);
var DepartmentModel = mongoose.model('Department', department);

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

//Router
router.get('/api/tickets/:sortKey', findAllTickets);
router.get('/api/ticket/:id', findTicketById);
router.post('/api/ticket', addTicket);
router.get('/api/profiles', getProfiles);
router.put('/api/tickets/:id', updateTicket);
//router.delete('/api/tichets/:id', deleteContact);

router.get('/api/departments', getDepartments);


function getProfiles(req, res){
    ProfileModel.find(function(err, docs){
        if(err) res.send(err);
        res.json(docs);
    });
};

function getDepartments(req, res){
    DepartmentModel.find().sort({name: 1}).exec(function(err, docs){
        if(err) res.send(err);
        res.json(docs);
    });
};




/* Tiekct Model */
function addTicket(req, res){

  var ticket = new Ticket({
    userName: req.body.userName,
    department: req.body.department,
    problemType: req.body.problemType,
    priority: req.body.priority,
    title: req.body.title,
    description: req.body.description,
    created_at: new Date(),
  });

  // Get next _id
/*
  ticket.nextCount(function(err, count){
    if(err){
      console.log(err);
    } else{
      ticket.ticketNum = count + 100;
      console.log(ticket.ticketNum);
    }
  });
*/

  ticket.save(function(err){
    if(err) res.send(err);
    res.json(ticket);
  });
};

function findAllTickets(req, res){
  Ticket.find({status: req.params.sortKey}).sort({_id: 1, created_at:-1, firstName: 1, }).exec(function(err, docs){
    if(err) res.send(err);
    res.json(docs);
  });
};

function findTicketById(req, res){
  Ticket.findById(req.params.id, function(err, doc){
    if(err) res.send(err);
    res.json(doc);
  });
};

function updateTicket(req, res){
  Ticket.update(
    {_id: req.params.id},
    {status: req.body.status, resolution: req.body.resolution, closedDate: req.body.closedDate, workHours: req.body.workHours},
    function(err, doc){
      if(err) res.send(err);
      res.json({message: 'Sucessfully udated!'});
    }
  ) 
};

/*
function deleteContact(req, res){
  ContactModel.remove(
    {_id: req.params.id},
    function(err, doc){
      if(err) res.send(err);
      res.json({message: 'Sucessfully deleted!'});
    }
  )   
};
*/

// REGISTER OUR ROUTES
app.use('/', router);
//app.use('/api', router);


// START THE SERVER
var port = process.env.PORT || 8080;
app.listen(port);
console.log('listening server' + port);


