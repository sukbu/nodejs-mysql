// 함수는 값이 될 수 있다.

var f = function(){
    console.log(1+1);
    console.log(1+2);
}
// console.log(f);

// f();
// 배열의 원소로서의 함수
var a = [f];
a[0]();

var o = {
    func:f
}

o.func();

// 함수도 배열과 객체에 담을 수 있음

// 일반적으로 객체에 담아 이름으로 꺼내 사용함
