const http = require('http')
const  {createReadStream} = require('fs')

const server = http.createServer((req, res)=> {
    const fileStream = createReadStream('./data/bigFile.txt', 'utf-8')

    fileStream.on('data', (chunk)=> {
        // console.log(chunk)
        // fileStream.pipe(res)
        res.write(chunk)
    })

})

server.listen(3000)
console.log('listening on port 3000')