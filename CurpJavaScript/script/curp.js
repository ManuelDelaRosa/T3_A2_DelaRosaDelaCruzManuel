function obtenerCurp(){
	var apPat = document.form_curp.caja_apPat.value;
	var apMat = document.form_curp.caja_apMat.value;
	var nombre = document.form_curp.caja_nombre.value;
	var anac = document.form_curp.caja_anac.value;
	var mes = document.form_curp.selectmes.value;
	var dia = document.form_curp.selectdia.value;
	var sexo = document.form_curp.selectsexo.value;
	var estado = document.form_curp.selectestado.value;
	apPat = apPat.toUpperCase();
	apMat = apMat.toUpperCase();
	nombre = nombre.toUpperCase();
		
	var curp;
	curp = apPat.substr(0, 1);
	var primerVocal;
	var caracter;
	var cont = 1;
	do{
		caracter = apPat.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter != 'A' && caracter != 'E' && caracter != 'I' && caracter != 'O' && caracter != 'U' && caracter != ' ');
	curp = curp + primerVocal + apMat.substr(0,1) + nombre.substr(0,1) + anac.substr(-2, 2) + mes + dia + sexo + estado;
	
	cont = 1;
	do{
		caracter = apPat.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	cont = 1;
	do{
		caracter = apMat.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	cont = 1;
	do{
		caracter = nombre.charAt(cont);
		primerVocal = caracter;
		cont++;
	}while(caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter == 'O' || caracter == 'U' || caracter == ' ');
	curp = curp + primerVocal;

	var x = Math.floor((Math.random() * 9) + 1);
	var y = Math.floor((Math.random() * 9) + 1);
	curp = curp + x + y;
	alert("La CURP es: " + curp );

	document.write("La CURP es: " + curp);
	
}