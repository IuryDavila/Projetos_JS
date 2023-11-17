let segundos = 59
let minutos = 56
let horas = 15
let dias = 9 
let pegar = new Date()

function tempo() {
 
	document.getElementById("days").innerHTML = dias
	document.getElementById("hours").innerHTML = horas
	document.getElementById("minutes").innerHTML = minutos
	document.getElementById("seconds").innerHTML = segundos
	segundos--
}

setInterval(function resultadosegundos(){
	if (segundos >= 0){
		
	}
	 else{
		segundos = 59
		minutos--
	}

	if (minutos >= 0) {
		
	}
	else{
		minutos = 59
		horas--
	}
	 if (horas >= 0) {
		
	}
	else{
		horas = 24
		dias--
	}
	if (dias >= 0) {
		tempo()
	}
	else{
		dias = 31
		alert("Chegou a hora!! Parabéns")
	} 	

}, 1000)


