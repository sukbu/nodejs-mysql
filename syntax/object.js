var members = ['sukbu','tom','john','tiger']
console.log(members[1]);

var i=0;
while(i<members.length){
    console.log('array loop', members[i]);
    i++;
}

var roles = { 
    // 'key' : 'value'
    'programmer':'sukbu',
    'ceo':'tom',
    'project manager':'john',
    'technical assistant':'tiger'
}

console.log(roles.ceo);
console.log(roles['ceo']);

for(var name in roles){
    console.log('object =>',name, ', value =>', roles[name]);
}