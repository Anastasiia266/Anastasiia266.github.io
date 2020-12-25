
let secret = Math.random();
secret = Math.floor(secret * 100) + 1;

 let attempts = 1;

function number(){

    let  guess = +usersNumber.value;


    attempt.innerHTML = `${attempts} / 10`;

        if(attempts > 10){
            return;
        }
     
        if(guess == secret){
        guessNumber.innerHTML = `Вариант: ${guess}`;            
        helpPlace.innerHTML = 'Вы угадали!!!';        
           
        }else if(guess > secret){
           
            guessNumber.innerHTML = `Вариант: ${guess}`;
            helpPlace.innerHTML = 'больше загаданного';
        }else{
            guessNumber.innerHTML = `Вариант: ${guess}`;
            helpPlace.innerHTML = 'меньше загаданного';
        }

    
    if(attempts++ < 10){
    
    }else{
        
        helpPlace.innerHTML ='Вы проиграли!';
        guessNumber.innerHTML =`Ответ был: ${secret}`;
        
    }

  

    

}