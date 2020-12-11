

let secret = Math.random();
secret = Math.floor(secret * 100) + 1;

isUserWin = false;


for(let i = 1; i <= 10; i++){
    let number = +prompt(`Ваше число? (${i} / 10)`);

    if(number == secret){

        alert('Вы угадали!!!');
        isUserWin = true;
        break;

    }else if(number > secret){
        alert('Нет, мое число меньше вашего');
    }else{
        alert('Нет, мое число больше вашего');
    }
}

if(isUserWin){

}else{
    alert('Game Over, you looser!');
    alert(`Ответ был: ${secret}`);
}