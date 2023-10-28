let atual = 1
let aleatorio = Math.round(Math.random() * 4)
console.log(aleatorio)

function rdm(){

	let aleatorio = Math.round(Math.random() * 4)

	switch(aleatorio){
	case 0:
		pessoa1()
		break;
	case 1:
		pessoa2()
		break;
	case 2:
		pessoa3()
		break;
	case 3:
		pessoa4()
		break;
	case 4:
		pessoa5()
		break;				
	}

	console.log(aleatorio)

}


function incremento() {
	if(atual != 5){
		atual++
		change()
	} else {
		atual = 1
		change()
	}
	console.log(atual)
}

function decremento() {
	if(atual != 1){
		atual--
		change()
	} else {
		atual = 5
		change()

	}
	console.log(atual)
}

function pessoa1() {document.getElementById('imagem').style.backgroundImage = "url('assets/foto.jpeg')"
	document.getElementById('nome').innerHTML = "Susan Somebody"
	document.getElementById('profissao').innerHTML = "WEB DEVELOPER"
	document.getElementById('descricao').innerHTML = "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse<br>before they sold out chambray pop-up. Shaman humblebrag pickled<br>coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
	document.getElementById('imagem').style.backgroundSize = "150%"
}

function pessoa2() {
	document.getElementById('imagem').style.backgroundImage = "url('assets/foto1.jpg')"
	document.getElementById('nome').innerHTML = "Izabelly Florencio"
	document.getElementById('profissao').innerHTML = "Vendedora"
	document.getElementById('descricao').innerHTML = "TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY<br> TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY<br> TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY<br> TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY TESTE IZABELLY"
	document.getElementById('imagem').style.backgroundSize = "100%"
}

function pessoa3() {
	document.getElementById('imagem').style.backgroundImage = "url('assets/foto2.jpg')"
	document.getElementById('nome').innerHTML = "Iury D'avila"
	document.getElementById('profissao').innerHTML = "Desenvolvedor"
	document.getElementById('descricao').innerHTML = "TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY<br> TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY<br> TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY<br> TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY TESTE IURY"
	document.getElementById('imagem').style.backgroundSize = "100%"
}

function pessoa4() {
	document.getElementById('imagem').style.backgroundImage = "url('assets/foto3.jpg')"
	document.getElementById('nome').innerHTML = "Pettison Tomazar"
	document.getElementById('profissao').innerHTML = "Pote"
	document.getElementById('descricao').innerHTML = "TESTE POTE TESTE POTE  TESTE POTE TESTE POTE TESTE POTE TESTE POTE TESTE POTE<br> TESTE POTE TESTE POTE TESTE POTE TESTE POTE TESTE POTE<br> TESTE POTE TESTE POTE TESTE POTE TESTE POTE TESTE POTE TESTE POTE<br> TESTE POTE TESTE POTE TESTE POTE TESTE POTE TESTE POTE TESTE POTE TESTE POTE"
	document.getElementById('imagem').style.backgroundSize = "100%"
}

function pessoa5() {
	document.getElementById('imagem').style.backgroundImage = "url('assets/foto4.jpg')"
	document.getElementById('nome').innerHTML = "CR7"
	document.getElementById('profissao').innerHTML = "jogador"
	document.getElementById('descricao').innerHTML = "TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7<br> TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7br> TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7<br> TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7 CR7 TESTE CR7"
}

function change(){
	switch(atual){

	case 1: pessoa1()
		break;
	case 2: pessoa2()
		break;
	case 3: pessoa3()
		break;
	case 4: pessoa4()
		break;
	case 5: pessoa5()
		break;				

	}
}




