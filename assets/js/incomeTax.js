
function calc(){ 

    let rate = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

    let taxBrackets = [9950, 40525, 86375, 164925, 209426, 523600]

    let inc = +usersIncome.value;

    const deduction = 12550;

    let income = +usersIncome.value - deduction;

    let tax;
    
    let cat1= taxBrackets[0]* rate[0];
    let cat2 = cat1 + (taxBrackets[1] -taxBrackets[0] ) * rate[1];
    let cat3 = cat2 + (taxBrackets[2] - taxBrackets[1]) * rate[2];
    let cat4 = cat3 + (taxBrackets[3] - taxBrackets[2]) * rate[3];
    let cat5 = cat4 + (taxBrackets[4] - taxBrackets[3]) * rate[4];
    let cat6 = cat5 + (taxBrackets[5] - taxBrackets[4]) * rate[5];
    let cat7 = cat6 + (taxBrackets[6] - taxBrackets[5]) * rate[6];


    if(+usersIncome.value <= deduction){
        tax = 0;


    }else if(income < taxBrackets[0]){
        tax = income * rate[0];
       

    }else if(income > taxBrackets[0] && income <= taxBrackets[1]){
        tax = cat1+ (income - taxBrackets[0]) * rate[1];
        

    }else if(income > taxBrackets[1] && income <= taxBrackets[2]) {
        tax = cat2 + (income - taxBrackets[1]) * rate[2];
       

    }else if(income > taxBrackets[2] && income <= taxBrackets[3]){
        tax =  cat3 + (income - taxBrackets[2]) * rate[3];

    }else if(income > taxBrackets[3] && income <= taxBrackets[4]){
        tax =  cat4 + (income - taxBrackets[3]) * rate[4];

    }else if(income > taxBrackets[4] && income <= taxBrackets[5]){
        tax = cat5 + (income - taxBrackets[4]) * rate[5];

    }else if(income > taxBrackets[5]){
        tax = cat6 + (income - taxBrackets[5]) * rate[6];
    }

    resultPlace.innerHTML = tax;

}