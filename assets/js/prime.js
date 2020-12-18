
for( i = 3; i <= 1000; i++){
    for( x =2; x < i; x++ ){
        if(i % x == 0){
             break;
        }else if(i == x +1 ){
            alert(`${i}`);
        }
    }
}