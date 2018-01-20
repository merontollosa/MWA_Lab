const {promisify} = require('util');
const fs = require('fs');

const readFileAsync = promisify(fs.readFile);

readFileAsync('D:\\MWA\\StreamFile\\input.txt', {encoding : 'utf8'})
     .then((text) => { console.log('CONTENT: ', text);})
     .catch((err) => {console.log('ERROR: ', err);});