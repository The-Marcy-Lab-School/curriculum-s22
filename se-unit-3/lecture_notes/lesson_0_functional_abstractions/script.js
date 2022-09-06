function namedCallback(){
   console.log('namedCallback()');
}
function testFunction(callback){
   callback;
}
testFunction(namedCallback());