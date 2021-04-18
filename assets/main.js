//TRIANGLE CICLE
for(str='#';str.length<=7;str+='#') console.log(str);

//FIZZBUZZ part 1
for(i=1;i<=100;i++){
    let str = '';
    if(i%3==0) str+='Fizz'
    else if(i%5==0) str+='Buzz'
    else str=i;
    console.log(str);
}
//FIZZBUZZ part 2
for(i=1;i<=100;i++){
    let str = '';
    if(i%3==0) str+='Fizz'
    if(i%5==0) str+='Buzz'
    console.log(str||i);
}

//CHESS TABLE
let a=8;b=8;str='';
for(x=0;x<a;x++){
    for(y=0;y<b;y++) (x+y)%2==0?str+=' ':str+='#';
    str+='\n'
}
console.log(str)

