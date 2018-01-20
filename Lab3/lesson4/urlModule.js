//how to pare query string object
const url = require('url');
const myUrl = url.parse('https://github.com/nodejs/node/issues/4179?user=meron',true);
console.log("protocol :"+ myUrl.protocol);
console.log("hostName :"+ myUrl.hostname);
console.log( myUrl.query);
//format URL
const urlObject ={
    protocol : 'http',
    host : 'www.mum.edu',
    search : '?q=CS572',
    pathname : '/search'
}
console.log(url.format(urlObject));

//using queryString module

const querystring = require('querystring');
const query = querystring.stringify({
    name : 'Asaad Saad' ,
    course : 'cs572 Modern web Application'

});

console.log(query);
const queryObj = querystring.parse(query);

console.log(queryObj)