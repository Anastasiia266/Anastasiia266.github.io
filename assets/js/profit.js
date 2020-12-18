
let P = [10, 18, 33, 7, 31, 3, 8, 22, 29, 7, 8];

let diff;
let maxprofit = 0;



for(i = 0; i < P.length; i++){
    for(j = i; j <= P.length; j++){
        diff = P[j] - P[i];       

        if(maxprofit < diff ){ 
            maxprofit = diff;

        }


    }

    
}

console.log(`${maxprofit}`);
