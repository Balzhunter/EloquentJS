//FUNCTION MENOS
const menos = (a,b) => b===undefined?-a:a-b; 
console.log(menos(4));
console.log(menos(4,2));
//FUNCTION EXPONENTIAL
const pot = (base, exp = 2) => {
    let out = 1;
    for(i=0;i<exp;i++) out*=base;
    return out;
}
console.log(pot(4))
console.log(pot(2,6),menos(pot(3))==menos(9), pot(4,3))