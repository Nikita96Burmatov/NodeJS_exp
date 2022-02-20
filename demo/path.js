import path from "path"; // импортируем библиотеку из node modules

console.log('Название файла: ', path.basename('/demo/path.js'));

console.log('Название директории: ', path.dirname('/demo/path.js'))

console.log('Расширение файла: ', path.extname('/demo/path.js'))

console.log('Parse: ', path.parse('/demo/path.js'))

console.log(path.join('/demo/', 'server', 'index.html'))
