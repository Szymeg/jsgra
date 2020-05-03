setTimeout(appear, 500);
function appear(){
document.getElementById('1').classList.remove('hide');
}
setTimeout(close, 1000);
function close(){
document.getElementById('1').className += ' hide';
}

var a = 0;
console.log(a);

function score () {
document.getElementById("score").innerHTML = a+=1;
document.getElementById("1").classList.add('hide');
}