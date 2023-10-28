let cor = 0
let aleatorio = Math.random() * 5;
let CorAtual = 'preto'
console.log(CorAtual)



function arredondar() {

	if (aleatorio>4){
		aleatorio = 4;
	} else if(aleatorio>3){
		aleatorio = 3;
	} else if(aleatorio>2){
		aleatorio = 2;
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
		document.body.style.backgroundColor = "red"
		CorAtual = "Vermelho"
		break;
	case 1:
		document.body.style.backgroundColor = "gray"
		CorAtual = "Cinza"
		break;
	case 2:
		document.body.style.backgroundColor = "pink"
		CorAtual = "Rosa"
		break;
	case 3:
		document.body.style.backgroundColor = "yellow"
		CorAtual = "Amarelo"
		break;
	case 4:
		document.body.style.backgroundColor = "white"
		CorAtual = "Branco"
		break;			


	}

	document.getElementById('corAtualTexto').innerHTML = CorAtual
}



function resetar(){
	aleatorio = 0
	trocar()
}

trocar()