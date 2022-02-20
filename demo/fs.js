import fs from 'fs';
import path from 'path';

// fs.mkdir(path.join('./demo', 'test'), (err) =>{
//     if (err){
//         throw err
//     }
//     console.log('Папк создана')
// })

const filePath = path.join('./demo', 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJs!', (err) =>{
//     if (err){
//         throw err
//     }

//     console.log('Файл создан')
// })

// fs.appendFile(filePath, '\nHello Again NodeJs!', (err) =>{
//     if (err){
//         throw err
//     }

//     console.log('Файл создан')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }
    console.log(content);
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
})