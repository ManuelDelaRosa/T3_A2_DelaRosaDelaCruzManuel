function convertir(){
	var cadena = document.form_cadena.caja_cadena.value;
	var letra = document.form_cadena.caja_letra.value;

	document.write("<br> Total de vocales: " + contarVocales(cadena));
	document.write("<br> Total de consonantes: " + contarConsonantes(cadena));
	document.write("<br> Total de veces que aparece la letra: " + contarLetra(cadena, letra));
	document.write("<br> Cadena loca: " + cadenaLoca(cadena));
}

function contarVocales(cadena){
	var contador = 0;

	for(var i = 0; i<cadena.length; i++){
		if(cadena.charAt(i) == 'A'|| cadena.charAt(i) == 'E'|| cadena.charAt(i) == 'I'|| cadena.charAt(i) == 'O'|| cadena.charAt(i) == 'U'||
		 cadena.charAt(i) == 'a'|| cadena.charAt(i) == 'e'|| cadena.charAt(i) == 'i'|| cadena.charAt(i) == 'o'|| cadena.charAt(i) == 'u'){
			contador ++;
		}
	}
	return contador;
}

function contarConsonantes(cadena){
	var contador = 0;

	for(var i = 0; i<cadena.length; i++){
		if(cadena.charAt(i) == 'A'|| cadena.charAt(i) == 'E'|| cadena.charAt(i) == 'I'|| cadena.charAt(i) == 'O'|| cadena.charAt(i) == 'U'||
		 cadena.charAt(i) == 'a'|| cadena.charAt(i) == 'e'|| cadena.charAt(i) == 'i'|| cadena.charAt(i) == 'o'|| cadena.charAt(i) == 'u' || cadena.charAt(i) == ' '){
			
		}else{
			contador ++;
		}
	}
	return contador;
}

function contarLetra(cadena, letra){
	var contador = 0;

	for(var i = 0; i<cadena.length; i++){
		if(cadena.charAt(i) == letra){
			contador ++;
		}
	}
	return contador;
}

function cadenaLoca(cadena){
	var cadLoca = "";
	for(var i = 0; i < cadena.length; i++ ){
		if(i%2 == 0){
			cadLoca = cadLoca + cadena.charAt(i).toUpperCase();
		}else{
			cadLoca = cadLoca + cadena.charAt(i).toLowerCase();
		}

	}
	return cadLoca;
}