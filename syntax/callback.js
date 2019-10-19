// function a() {
//     console.log('A');
// }

var a = function () {
    console.log('A');
    console.log('call')
    console.log('back');
}


function slowFunc(callback){
    console.log('123123');
    callback();
    console.log('321321');
}

console.log('aaabbb');
slowFunc(a);
console.log('bbbaaa');