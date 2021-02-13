
function action(){

    let map = new Map;

    map.set("A", "Alfa" );
    map.set("a", "Alfa" );
    map.set('B', "Bravo");
    map.set('b', "Bravo");
    map.set('C', 'Charlie');
    map.set('c', 'Charlie');
    map.set('D','Delta');
    map.set('d','Delta');
    map.set('E','Echo');
    map.set('e','Echo');
    map.set('F','Foxtrot');
    map.set('f','Foxtrot');
    map.set('G','Golf');
    map.set('g','Golf');
    map.set('H','Hotel');
    map.set('h','Hotel');
    map.set('I','India');
    map.set('i','India');
    map.set('J','Juliet');
    map.set('j','Juliet');
    map.set('K','Kilo');
    map.set('k','Kilo');
    map.set('L','Lima');
    map.set('l','Lima');
    map.set('M','Mike');
    map.set('m','Mike');
    map.set('N','November');
    map.set('n','November');
    map.set('O','Oscar');
    map.set('o','Oscar');
    map.set('P','Papa');
    map.set('p','Papa');
    map.set('Q','Qebec');
    map.set('q','Qebec');
    map.set('R','Romeo');
    map.set('r','Romeo');
    map.set('S','Sierra');
    map.set('s','Sierra');
    map.set('T','Tango');
    map.set('t','Tango');
    map.set('U','Unifirm');
    map.set('u','Unifirm');
    map.set('V','Victor');
    map.set('v','Victor');
    map.set('W','Whiskey');
    map.set('w','Whiskey');
    map.set('X','X-ray');
    map.set('x','X-ray');
    map.set('Y','Yankee');
    map.set('y','Yankee');
    map.set('Z','Zulu');
    map.set('z','Zulu');
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
