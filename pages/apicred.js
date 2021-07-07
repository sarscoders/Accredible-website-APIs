var express = require('express');
var request = require('request');
var path = require('path');
const router = express.Router();
const fs = require('fs');
var root = path.dirname(require.main.filename);
const fileName = root +'/pages/config.json';
const file = require(fileName);
router.route('/').post((req, res, next) => {
	var key = req.body.apikey
    console.log(key);
    console.log(root);
file.key = key;
var ret = true;
fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
  if (err) {
    console.log(err);
    ret = false;
  }
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});
if(ret){
  res.write('<html> <head> <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet"> </head>  <style> body { text-align: center;  padding: 40px 0; background: #EBF0F5;  } h1 { color: #88B04B; font-family: "Nunito Sans", "Helvetica Neue", sans-serif; font-weight: 900; font-size: 40px; margin-bottom: 10px; }  p { color: #404F5E; font-family: "Nunito Sans", "Helvetica Neue", sans-serif; font-size:20px; margin: 0; } i { color: #9ABC66; font-size: 100px; line-height: 200px; margin-left:-15px; } .card { background: white; padding: 60px; border-radius: 4px; box-shadow: 0 2px 3px #C8D0D8; display: inline-block; margin: 0 auto; } .home { color: #88B04B; font-family: "Nunito Sans", "Helvetica Neue", sans-serif; font-weight: 900; font-size: 40px; margin-bottom: 10px; }</style> <body> <div class="card"> <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;"> <i class="checkmark">✓</i> </div> <h1>Success</h1>  <p>Change Saved<br/> </p> <a class="home" href="/" />Home </a> </div> </body> </html>')
  res.end();
}
else{
  res.send('Error while saving try');
}

})
router.route('/').get((req, res, next) => {
	res.render("apicred");
});
module.exports = router;