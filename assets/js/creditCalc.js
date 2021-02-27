
const credit = 200000;

const term = 24;

const rate = 12;

const monthRate = rate / 12 / 100;

let annuity = +(credit * (monthRate * ((1 + monthRate)**term)) / (((1 + monthRate)**term) - 1)).toFixed(2);

console.log('Ежемесячный платеж:', annuity);

let debt = credit;

let percentPart = 0;

let percentSum = 0;

let repayment = 0;

for (let i = 1; i <= term; i++){

    debt -= repayment;
   percentPart = +(debt * monthRate).toFixed(2);
   repayment = +(annuity - percentPart).toFixed(2);
   debt = +debt.toFixed(2);
   percentSum += percentPart;

   console.log( `# ${i}`, 'Задолженность:', debt, "Погашение кредита:", repayment,  "Проценты по кредиту:", percentPart);

}

console.log("Сумма переплаты:", percentSum);




