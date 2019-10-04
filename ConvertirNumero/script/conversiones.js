function conversiones() {
	
	var num = document.form_conversion.caja_num.value;
	document.write("El número en Decimal es: " + num+" <br>");
	document.write("El número en Binario es: " + (parseFloat(num).toString(2)));
	document.write("<br> El número en Octal es: " + (parseFloat(num).toString(8)));
	document.write("<br> El número en Hexadecimal es: " + (parseFloat(num).toString(16)));
}