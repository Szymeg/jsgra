//creating id list
var id_list = [];
for (var i = 1; i <= 9; i++) {
    id_list.push(i);
}
console.log(id_list);
console.log(id_list[8])
console.log(15);
console.log('15 ale tekst');
//looping the appear function
id_list.forEach(element => {
    console.log(element)
    var n = element.toString();
    console.log(n)
    document.getElementById(n).classList.remove('hide');
    
    setTimeout(close, 1000);
    function close(){
    document.getElementById(n).className += ' hide';
    }
    
});

/*appear and disappear without interacting
setTimeout(appear, 500);
    function appear(){
    document.getElementById('1').classList.remove('hide');
    }
setTimeout(close, 1000);
    function close(){
    document.getElementById('1').className += ' hide';
    }*/

//score counter
var a = 0;
console.log(a);
function score (id) {
document.getElementById("score").innerHTML = a+=1;
document.getElementById(id).classList.add('hide');
}