function cong() {
    let x = + document.getElementById('a').value;
    let y = + document.getElementById('b').value;
    let z = x + y;
    document.getElementById('kq').innerHTML = z;
}
function  tru() {
    let x = document.getElementById('a').value;
    let y = document.getElementById('b').value;
    let z = x - y;
    document.getElementById('kq').innerHTML = z;
}
function nhan() {
    let x = document.getElementById('a').value;
    let y = document.getElementById('b').value;
    let z = x * y;
    document.getElementById('kq').innerHTML = z;
}
function chia() {
    let x = document.getElementById('a').value;
    let y = document.getElementById('b').value;
    let z = x / y;
    document.getElementById('kq').innerHTML = z;
}