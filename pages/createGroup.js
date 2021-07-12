var express = require('express');
var request = require('request');
const router = express.Router();
router.route('/').post((req, res, next) => {
const config = require('./config.json');
var name = "\""+ req.body.name+  "\""; 
var courseName = "\""+ req.body.coursename+  "\""; 
var decs = "\""+ req.body.coursedec+  "\""; 
var courseLink = "\""+ req.body.course_link+  "\""; 
var designId = req.body.design_id;
request({
  method: 'POST',
  uri: `${config.url}/v1/issuer/groups`,
  headers: {
	'Content-Type': 'application/json',
    Authorization: `Token token=${config.key}`
  },
  body: "{  \"group\": {    \"name\": "+name+",    \"course_name\": "+courseName+",    \"course_description\": "+decs+",    \"course_link\": "+courseLink+",    \"language\": \"en\",    \"attach_pdf\": true, \"blockchain\": false,    \"certificate_design_id\": null,    \"badge_design_id\": null,    \"design_id\": "+designId+",    \"learning_outcomes\": [      \"Reading Books\",      \"Writing Essays\"    ]  }}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  if(response.statusCode == 200){
	  res.render("success" , {msg: 'Your group has been created successfully'});
  }
  else{
	  res.render("error" , {msg: 'Something went wrong please try again'});
  }
});
});
router.route('/').get((req, res, next) => {
	res.render("Group");
});
module.exports = router;
