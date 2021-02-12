let request=require('request')
const http = require("http");
require('dotenv').config()
let myKey=process.env.myKey
let city="kars"

const url = `http://api.weatherstack.com/current?access_key=${myKey}&query=${city}`



const requestListener = function (req, res) {
  request(url, function (err, response, body) {
    if(err){
      console.log('error:', err);
    } else {
      // console.log('body:', body);
      let data=JSON.parse(body) 
      res.writeHead(200);
      res.write(`<h1>Today temperature is ${data.current.temperature}  in ${data.location.name}  </h1>`);
      res.end()
      console.log('body:',`Today temperature is ${data.current.temperature}  in ${data.location.name} ` );
    }
  });
  
  }
  const host = 'localhost';
  const port = 5000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});