const request = require('request');

request.post('http://54.213.244.155:3001/evocoin/balanceOf', {
  json: {
    email_from: 'yakkay@gmail.com',
    score: 3
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

request.get('http://54.213.244.155:3001/evocoin/supply', {

}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});

request.post('http://54.213.244.155:3001/evocoin/transfer', {
  json: {
    email_from: 'yakkay@gmail.com',
    email_to: 'smilenaguevara@gmail.com',
    value: "1"
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }else console.log(body);
});
