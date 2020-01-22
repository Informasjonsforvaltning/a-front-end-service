const axios = require('axios');

const TEST_DATA = {
    "name": "a-backend-service",
    "url": "http://localhost:8021"
}

axios.get('http://localhost:8084/jwt/admin'). then(result=>{
  const datastr = result.data.toString();
  const start = datastr.search('ey');
  const stop = datastr.search('}')
  const token = datastr.substring(start,stop)
  axios.post('http://localhost:8021/serviceendpoints', TEST_DATA,  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: '*/*'
    }
  }).then(result => { console.log(result.status)})
    .catch(error => { console.log(error)});
});