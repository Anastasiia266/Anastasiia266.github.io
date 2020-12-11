

let y = +prompt("Введите год");

let a = y % 400;
let b = y % 100;
let c = y % 4;



if((b == 0) && (a >0)){
    alert('невисокосный');
}else if(a == 0){
    alert("високосный");
}else if(c == 0){
    alert('високосный');
}else{
    alert('невисокосный');
}