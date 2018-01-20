function* gen(){
    yield `CS572`;
    yield `is`;
    yield `the`;
    yield `best`;
    yield `course`;
    yield `ever!`;
}
const generate = gen();

for(const word of generate){
    console.log(word);
}

const courses = [
    {course : 'WAP', prof : 'Asaad', code : 'CS472'},
    {course : 'WAP', prof : 'Asaad', code : 'CS472'},
    {course : 'WAP', prof : 'Asaad', code : 'CS542'}
];

function* loop(arr){
    console.log("Start");
    for(const item of arr){
        yield item;
    }
    console.log('End');
}
loop(courses);
const courseGen = loop(courses);
for(const item of courseGen){
    console.log(item.course);
}