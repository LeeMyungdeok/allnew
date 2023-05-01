const axios = require('axios');

axios
    .post('http://192.168.1.18/todos', {
        todo:"Buy the milk"
    })
    .then(res => {
        console.log(`statusCode : ${res.status}`)
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })