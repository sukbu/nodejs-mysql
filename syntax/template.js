// select multi-word: ctrl+shift+L, select next instance: ctrl+D
// multi-line: ctrl+alt+down
var name='sukbu';
var str='Dear '+name+'\n Velit fugiat officia pariatur '+name+' duis ea occaecat et dolor esse nulla '+name+' aute et officia.';
console.log(str);
var str2='Dear '+name+'\
\ Velit fugiat officia pariatur '+name+' duis ea occaecat et dolor esse nulla '+name+' aute et officia.';
console.log(str2);

// template literal : ` `

var str3=`Dear ${name}

Velit fugiat officia pariatur ${name} duis ea occaecat et dolor esse nulla ${name} aute et officia.`;

console.log(str3);