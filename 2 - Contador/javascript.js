let atual = document.getElementById('contagem').innerHTML

console.log(atual)

function Mudarcor(argument) {
if(atual<0){
	document.getElementById('contagem').style.color = 'red'
}else if(atual>0){
	document.getElementById('contagem').style.color = 'green'
}else{
	document.getElementById('contagem').style.color = 'black'
}
}






function incrementar(){
	atual++
	document.getElementById('contagem').innerHTML = atual
	Mudarcor()
}

function decrementar(){
	atual--
	document.getElementById('contagem').innerHTML = atual
	Mudarcor()
}

function resetar(){
	document.getElementById('contagem').innerHTML = 0
	atual = 0
	document.getElementById('contagem').style.color = 'black'

}