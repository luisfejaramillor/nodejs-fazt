const eventEmitter =require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', (data)=> {
    console.log(data)
})

customEmitter.emit('response','hola mundo')