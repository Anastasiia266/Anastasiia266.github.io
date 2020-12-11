

let m = +prompt("Введите вашу массу в кг.!");

let h = +prompt("Введие ваш рост в метрах!");


let index = m / (h ** 2);

index = Math.round(index * 10) / 10;

alert( `Ваш индекс ${index}`);

if(index <= 16){
    alert( "Выраженный дефицит массы тела");
}else if((index > 16)&& (index <= 18.5)){
    alert("Недостаточная (дефицит) масса тела");
}else if((index > 18.5) && (index <= 25)){
    alert("Норма");

}else if((index > 25) && (index <= 30)){
    alert("Избыточная масса тела (предожирение)");
}else if((index > 30) && (index <=35)){
    alert('Ожирение');
}else if((index > 35) && (index <= 40)){
    alert('Ожирение резкое');
}else if(index > 40){
    alert('Очень резкое ожирение');
}




