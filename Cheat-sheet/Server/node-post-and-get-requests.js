//---------------------------HTTPS POST REQUEST-----------------------------


const http = require('http')

const data = JSON.stringify('Insert the data that needs to be posted as a string, object or array')

const options = {
    hostname: 'Insert API or hostname up to the .com/.co.uk/.org',
    port: 'Insert port number, typically 80 for http or 443 for https',
    path: 'Insert the rest of the address after the first /',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    //--Stitches the response packets together--
    let string = ""

    res.on('data', d => {
        string += d
        console.log(d)
    })
    //--Logs the whole response when all the data has been sent back--
    res.on('end', d => {
        console.log(string)
    })
})

req.on('error', error => {
    console.error(error)
})
//--req.write sends the data to be posted--
req.write(data)
req.end()



//---------------------------HTTPS GET REQUEST-----------------------------


const http = require('http')
const options = {
    hostname: 'Insert API or hostname up to the .com/.co.uk/.org',
    port: 'Insert port number, typically 80 for http or 443 for https',
    path: 'Insert the rest of the address after the first /',
    method: 'GET'
}

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)


    //--Stitches the response packets together--
    let string = ""

    res.on('data', d => {
        string += d
        console.log(d)
    })
    //--Logs the whole response when all the data has been sent back--
    res.on('end', d => {
        console.log(string)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()

--------------------------



