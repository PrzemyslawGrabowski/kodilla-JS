var a = 2;
var b = 4;
var value = (a * a) + (2 * a * b) - (b * b);


if (value === 0) {
    alert('wynik działania: (a*a)+(2*a*b)-(b*b) równa się 0');
} else {
    (value > 0) ? alert('wynik dziłania jest dodatni') : alert('wynik działania jest ujemny');
}

console.log(value);