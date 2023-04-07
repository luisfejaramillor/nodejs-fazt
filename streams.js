// const  {writeFile}= require('fs/promises')

// const write = async()=> {
//     await writeFile('./data/bigFile.txt', 'Hola mundo'.repeat(1000))
// }

// write()


const  {createReadStream} = require('fs')

const stream = createReadStream('./data/bigFile.txt', 'utf-8')

stream.on('data', (chunk)=> {
    console.log(chunk)
})

stream.on('end',()=> {
    console.log('Read has finished')
})