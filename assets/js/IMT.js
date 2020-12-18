
function calc(){
        let h = +userHeight.value;
        let m = +userWeight.value;

        if(+userHeight.value > 3){
            h = userHeight.value / 100;
        }else{
            
        }

        let index = m / (h ** 2);

        



        resultIndex.innerHTML = Math.round(index * 100) / 100 ;

        if(index <= 16){
            resultPlace.innerHTML = "Выраженный дефицит массы тела";
        }else if((index > 16)&& (index <= 18.5)){
            resultPlace.innerHTML = "Недостаточная (дефицит) масса тела";
        }else if((index > 18.5) && (index <= 25)){
            resultPlace.innerHTML ="Норма"; 
        }else if((index > 25) && (index <= 30)){
            resultPlace.innerHTML ="Избыточная масса тела (предожирение)";
        }else if((index > 30) && (index <=35)){
            resultPlace.innerHTML ='Ожирение';
        }else if((index > 35) && (index <= 40)){
            resultPlace.innerHTML ='Ожирение резкое';
        }else if(index > 40){
            resultPlace.innerHTML ='Очень резкое ожирение';
        }

}