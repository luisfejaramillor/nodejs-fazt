const {readFile} =require('fs/promises')

const read = async()=> {
    try {
       const result = await readFile('./data/first.txt', 'utf-8') 
       console.log(result)
       const result2 = await readFile('./data/second.txt', 'utf-8') 
       console.log(result2)
       const result3 = await readFile('./data/third.txt', 'utf-8') 
       console.log(result3) 
       const result4 = await readFile('./data/fourth.txt', 'utf-8')
       console.log(result4)
    } catch (error) {
        console.log(error)
    }
}

read()