/**
 * Created by hiroko on 10/5/15.
 */


var a = ("00" + 1234).slice (-3);
console.log(a);


var b = ("000" + 1234).slice(-4);
console.log(b);

/*
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}
*/

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

console.log(pad(1234567, 5));