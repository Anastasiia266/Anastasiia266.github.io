
function action(){

    let map = new Map;

    map.set("A", "Alfa" );   
    map.set('B', "Bravo");    
    map.set('C', 'Charlie');    
    map.set('D','Delta');    
    map.set('E','Echo');    
    map.set('F','Foxtrot');
    map.set('G','Golf');    
    map.set('H','Hotel');    
    map.set('I','India');    
    map.set('J','Juliet');    
    map.set('K','Kilo');    
    map.set('L','Lima');    
    map.set('M','Mike');    
    map.set('N','November');    
    map.set('O','Oscar');    
    map.set('P','Papa');    
    map.set('Q','Qebec');    
    map.set('R','Romeo');    
    map.set('S','Sierra');    
    map.set('T','Tango');    
    map.set('U','Unifirm');    
    map.set('V','Victor');    
    map.set('W','Whiskey');    
    map.set('X','X-ray');    
    map.set('Y','Yankee');    
    map.set('Z','Zulu');    
    map.set('0','Zero');
    map.set('1','One');
    map.set('2','Two');
    map.set('3','Three');
    map.set('4','Four');
    map.set('5','Five');
    map.set('6','Six');
    map.set('7','Seven');
    map.set('8','Eight');
    map.set('9','Nine');
    map.set('00','Hundred');
    map.set('000','Thousand');

    let message = usersMessage.value;

    message = message.toUpperCase();

    let arr = [...message];

    console.log(arr);

    let meaning = '';

    for(let value of arr){
        if(map.has(value)){
           meaning += map.get(value) +" ";

        }
    }


    resultPlace.innerHTML = meaning;
    
}
