const https = require('express')

const data = JSON.stringify({
    ttdo: 'Buy the milk'
})

const potions = {
    hostname : '192.168.1.18',
    port : 8000,
    path : '/todos',
    method : 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode : ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    })
})

req.on('error', error => {
    console.log(error)
})

req.end()