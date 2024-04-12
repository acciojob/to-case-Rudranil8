function toCase(text) {
	let s="";
	let a="";
	let b="";
	a=text.toLowerCase();
	b=text.toUpperCase();
	s=a+"-"+b;
	return s;
}
// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
