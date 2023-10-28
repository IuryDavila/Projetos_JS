let aberto = 0
console.log(aberto)


function ativo() {
switch(aberto){
	case 1:
		document.getElementById("icon1").innerHTML = '<a onclick="primeira()"><i class="fa-solid fa-square-minus"></i></a>'
		document.getElementById("icon2").innerHTML = '<a onclick="segunda()"><i class="fa-solid fa-square-plus"></i></a>'
		document.getElementById("icon3").innerHTML = '<a onclick="terceira()"><i class="fa-solid fa-square-plus"></i></a>'

		break
	case 2:
		document.getElementById("icon2").innerHTML = '<a onclick="segunda()"><i class="fa-solid fa-square-minus"></i></a>'
		document.getElementById("icon1").innerHTML = '<a onclick="primeira()"><i class="fa-solid fa-square-plus"></i></a>'
		document.getElementById("icon3").innerHTML = '<a onclick="terceira()"><i class="fa-solid fa-square-plus"></i></a>'
		break
	case 3:
		document.getElementById("icon3").innerHTML = '<a onclick="terceira()"><i class="fa-solid fa-square-minus"></i></a>'
		document.getElementById("icon2").innerHTML = '<a onclick="segunda()"><i class="fa-solid fa-square-plus"></i></a>'
		document.getElementById("icon1").innerHTML = '<a onclick="primeira()"><i class="fa-solid fa-square-plus"></i></a>'
		break		

}
}


function primeira(argument) {
	if(aberto === 1){
	document.getElementById("oculto1").style.opacity = "0"
	document.getElementById("linha1").style.opacity = "0"
	document.getElementById("bloco1").style.height = "60px"
	document.getElementById("icon1").innerHTML = '<a onclick="primeira()"><i class="fa-solid fa-square-plus"></i></a>'
	aberto = 0	
	} else{
document.getElementById("oculto1").style.opacity = "100%"
document.getElementById("linha1").style.opacity = "100%"
document.getElementById("bloco1").style.height = "150px"
document.getElementById("oculto2").style.opacity = "0"
document.getElementById("linha2").style.opacity = "0"
document.getElementById("bloco2").style.height = "60px"
document.getElementById("oculto3").style.opacity = "0"
document.getElementById("linha3").style.opacity = "0"
document.getElementById("bloco3").style.height = "60px"
aberto = 1
console.log(aberto)
ativo()
}
}

function segunda(argument) {
	if(aberto === 2){
	document.getElementById("oculto2").style.opacity = "0"
	document.getElementById("linha2").style.opacity = "0"
	document.getElementById("bloco2").style.height = "60px"
	document.getElementById("icon2").innerHTML = '<a onclick="segunda()"><i class="fa-solid fa-square-plus"></i></a>'
	aberto = 0	
	} else{
document.getElementById("oculto2").style.opacity = "100%"
document.getElementById("linha2").style.opacity = "100%"
document.getElementById("bloco2").style.height = "150px"
document.getElementById("oculto1").style.opacity = "0"
document.getElementById("linha1").style.opacity = "0"
document.getElementById("bloco1").style.height = "60px"
document.getElementById("oculto3").style.opacity = "0"
document.getElementById("linha3").style.opacity = "0"
document.getElementById("bloco3").style.height = "60px"
aberto = 2
console.log(aberto)
ativo()
}
}


function terceira(argument) {
	if(aberto === 3){
	document.getElementById("oculto3").style.opacity = "0"
	document.getElementById("linha3").style.opacity = "0"
	document.getElementById("bloco3").style.height = "60px"
	document.getElementById("icon3").innerHTML = '<a onclick="terceira()"><i class="fa-solid fa-square-plus"></i></a>'
	aberto = 0	
	} else{
document.getElementById("oculto3").style.opacity = "100%"
document.getElementById("linha3").style.opacity = "100%"
document.getElementById("bloco3").style.height = "150px"
document.getElementById("oculto2").style.opacity = "0"
document.getElementById("linha2").style.opacity = "0"
document.getElementById("bloco2").style.height = "60px"
document.getElementById("oculto1").style.opacity = "0"
document.getElementById("linha1").style.opacity = "0"
document.getElementById("bloco1").style.height = "60px"
aberto = 3
console.log(aberto)
ativo()
}
}
