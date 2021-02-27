
let units = ['', 'одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', "десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать"];


let tn = ['', '',"двадцать", 'тридцать', 'сорок', 'пятьдесят','шестьдесят', 'семьдесят', 'весемьдесят', 'девяносто'];


let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

let hr = ['', 'гривна', 'гривны', 'гривен'];


    let price = prompt("Введите сумму:");

    let value = price.toString();

    console.log(value);

    let wordPrice;


   
    if(value.length == 2 && value[1] == 1){
      
        wordPrice =  tn[value[0]] + ' ' + units[value[1]] + ' ' +  hr[1];        
    
    }else if(value.length == 2 && value[1] >= 2 && value[1] <= 4){
        wordPrice =  tn[value[0]] + ' ' + units[value[1]] + ' ' +  hr[2]; 
    
    }else if(value.length == 2 && value[1] > 4){
        wordPrice =  tn[value[0]] + ' ' + units[value[1]] + ' ' +  hr[3]; 
    }
    


    if(value.length == 3 && value[2] == 1){
        wordPrice = hundreds[value[0]] + ' ' + tn[value[1]] + ' ' + units[value[2]] + ' ' + hr[1];
    
    }else if(value.length == 3 && value[2] >= 2 && value[2] <= 4){
        wordPrice = hundreds[value[0]] + ' ' + tn[value[1]] + ' ' + units[value[2]] + ' ' + hr[2];
    
    }else if(value.length == 3 && value[2] > 4){
        wordPrice = hundreds[value[0]] + ' ' + tn[value[1]] + ' ' + units[value[2]] + ' ' + hr[3];
    }





    if (price == 1) {
        wordPrice = units[price] + ' ' +  hr[1];
       
    }else if(price >= 2 && price <= 4){
        wordPrice = units[price] + ' ' +  hr[2];

    }else if(price < 20){
        wordPrice = units[price] + ' ' + hr[3];
    }

   
        alert(wordPrice);
    


   
    
    

    
    

   
    


