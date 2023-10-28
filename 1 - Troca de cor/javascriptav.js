let cor = 0
let aleatorio = Math.random() * 10;
let CorAtual = 'preto'
console.log(CorAtual)



function arredondar() {

	if (aleatorio>9){
		aleatorio = 9;
	} else if(aleatorio>8){
		aleatorio = 8;
	} else if(aleatorio>7){
		aleatorio = 7;
	}else if(aleatorio>6){
		aleatorio = 6;
	}else if(aleatorio>5){
		aleatorio = 5;
	}else if(aleatorio>4){
		aleatorio = 4;
	} else if(aleatorio>3){
		aleatorio = 3;
	}else if(aleatorio>2){
		aleatorio = 2;
	}else if(aleatorio>1){
		aleatorio = 1;
	}else{
		aleatorio = 0;
	}
}

arredondar()
document.write(aleatorio)


function trocar(){
	switch(aleatorio){

	case 0:
		document.body.style.backgroundColor = "#faff54"
		CorAtual = "#faff54"
		break;
	case 1:
		document.body.style.backgroundColor = "#ffb9a5"
		CorAtual = "#ffb9a5"
		break;
	case 2:
		document.body.style.backgroundColor = "#96ff7a"
		CorAtual = "#96ff7a"
		break;
	case 3:
		document.body.style.backgroundColor = "#7fffef"
		CorAtual = "#7fffef"
		break;
	case 4:
		document.body.style.backgroundColor = "#9e5cff"
		CorAtual = "#9e5cff"
		break;	
	case 5:
		document.body.style.backgroundColor = "#ff12e4"
		CorAtual = "#ff12e4"
		break;
	case 6:
		document.body.style.backgroundColor = "#efefff"
		CorAtual = "#efefff"
		break;
	case 7:
		document.body.style.backgroundColor = "#406800"
		CorAtual = "#406800"
		break;
	case 8:
		document.body.style.backgroundColor = "#380040"
		CorAtual = "#380040"
		break;
	case 9:
		document.body.style.backgroundColor = "#b4bb00"
		CorAtual = "#b4bb00"
		break;			


	}

	document.getElementById('corAtualTexto').innerHTML = CorAtual
}

trocar()
