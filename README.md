## helpdesk
helpdesk is IT issue ticket system for small companies and groups that is build with MEAN ( MongoDB, Express, Angular, Node). It is running on [Heroku](https://www.heroku.com/) cloud server. I developed it to learn Angular.js and could understand Angular key technologies such as Controller, Router, Service, Filter and Directive.

### Live URL 
**https://hirokoymj-helpdesk.herokuapp.com/**

### Front-End technologies
- **Bootstrap 3** : a framework to build a responsive web page. this application is used [sticky footer with navbar](http://getbootstrap.com/examples/sticky-footer-navbar/) template. 
- **Angular.js**: JavaScript MVC framework. Helpdesk has a beautiful MVC architecture!!
- **Sass**: This application is one custom SASS file called `helpdesk-style.scss`.
- **Grunt** : Grunt watched my css change and automatically complied SASS with CSS in command line. `helpdesk-style.scss` to `heldesk-style.css`.


### Back-End technologies
- **Node.js**: it provides HTTP web server and package.json in which we can see the software lists for this application.
- **Express.js**
- **MongoDB**: Database
- **mongoose**
- **Heroku**: Cloud platform to be able to run Node application.

### Architecture 
![Helpdesk Architecture](http://www.hirokoymj.com/images/Git/helpdesk_diagram.png)

### Generating Test Data
[JSON GENERATOR](http://www.json-generator.com/) is very useful site and I generated 100 test data at once! The cool thing is to be able to use `Array`. For example, if `deparment` value should generated randamly among "IT", "HR" and "Marketing", a syntax is following.
```
department: '{{random("IT", "HR", "Marketing")}}'
```
Test data is very helpful when I developed a pagination in the ticket list page.

### References:
- [Has Mongoose support findAndModify Mongodb method?](http://stackoverflow.com/questions/7334390/has-mongoose-support-findandmodify-mongodb-method)
- [Create an Auto-Incrementing Sequence Field](http://docs.mongodb.org/manual/tutorial/create-an-auto-incrementing-field/)
- [Highlight Active Menu] (http://coder1.com/articles/angularjs-managing-active-nav-elements)
- [Pagination Sample 1](http://stackoverflow.com/questions/13364091/angularjs-custom-filter-errors-due-to-undefined-arrays-and-still-filters-prope)
- [Pagination Sample 2](https://gist.github.com/kmaida/06d01f6b878777e2ea34)
- [Pagination Sample 3](http://stackoverflow.com/questions/13364091/angularjs-custom-filter-errors-due-to-undefined-arrays-and-still-filters-prope)
