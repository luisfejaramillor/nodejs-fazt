const fs = require('fs')

const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

const title= 'Soy el nuevo texto del archivo del cuarto'

fs.writeFileSync('./data/fourth.txt', title)