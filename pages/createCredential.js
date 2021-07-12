var express = require('express');
const router = express.Router();
router.route('/').post((req, res, next) => {
var request = require('request');	
const config = require('./config.json');
var name = "\""+ req.body.name+  "\""; 
var email = "\""+ req.body.Email1+  "\""; 
var coursename = "\""+ req.body.coursename+  "\""; 
var groupname = "\""+ req.body.groupname+  "\""; 
var groupid = req.body.groupid;
var decs = "\""+ req.body.groupname+  "\"";
request({
  method: 'POST',
  uri: `${config.url}/v1/credentials`,
  headers: {
	'Content-Type': 'application/json',
    Authorization: `Token token=${config.key}`
  },
  body: "{  \"credential\": {    \"recipient\": { \"name\": "+name+",  \"email\": "+email+" },  \"name\": "+coursename+",    \"group_name\": "+groupname+",    \"group_id\": "+groupid+",	\"description\": "+decs+" }}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
  if(response.statusCode == 200){
	  res.render("success" , {msg: 'Your credential has been created successfully'});
  }else{
	  res.render("error" , {msg: 'Something went wrong please try again'});
  }
	
});
});
router.route('/').get((req, res, next) => {
	res.render("credentials");
});
module.exports = router;
