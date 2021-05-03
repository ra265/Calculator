function clr(){
    document.getElementById('scr').value = "";
}
function num(a){
    document.getElementById('scr').value += a;
}
function equal(){
    var a = document.getElementById('scr').value;
    var b = eval(a);
    document.getElementById('scr').value = b;
}
// function foo(a,b){
//     return a+b /2;
// }
// alert(foo(2,1));