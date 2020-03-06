const https = require('https')
const url = 'https://api.darksky.net/forecast/243910959bea61412b00a20f4ef70b9c/37.8267,-122.4233'

const request = https.request(url, (response) => {

    let data = ''
    response.on('data',(chunk) =>{
        data = data + chunk.toString()
    })

    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error',() =>{
    console.log('An Error', error)
})
request.end()
