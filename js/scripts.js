var a = 5,
	b = 6;

var value = ((a*a)+(2*a*b)-(b*b));

if (value<0) {
	console.log('Wynik jest ujemny');
} else if (value>0) {
	console.log('Wynik jest dodatni');
}else {
	alert('wynik równa się 0');
}

console.log('wynik dziłania: (a*a)+(2*a*b)-(b*b) to: '+value);
