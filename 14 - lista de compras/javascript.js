let alert = document.getElementById('alerta')
let enviar = document.getElementById('botao')
let edit = document.getElementById('editar')
let del = document.getElementById('deletar')
let DivisaoPai = document.getElementById("lista")
let variavelid = 0
var teste = "x"
var modoalterar = false 
var alterarinicial = true
let valorparametro = "teste"
var valorparametroatualizado


document.getElementById("botao").addEventListener("click", function() {

	if(modoalterar == true){
		console.log("Modo Alterar:"+modoalterar)
		valorajustado = document.getElementById("entrada").value
		console.log(valorajustado)
		document.getElementById("entrada").value = null
		modoalterar = false
		alterarinicial = false
		console.log("valor paramatro lá em cima: "+valorparametro)

		alterar()
		} 

	else if(modoalterar == false){

	let NossoValor = document.getElementById("entrada").value
		if(NossoValor === ""){
			window.alert("Digite algum texto")

		} else {
	
		let CriarDiv = document.createElement("div")
		CriarDiv.innerHTML = 
			`
			<span id="" class="item">${NossoValor}</span>
			<span class="botons">
			<button class="testeedit" onclick="alterar(this.id)"><span id=""><i class="fa-solid fa-pen-to-square" style="color: #73ff00;"></i></span></button>
			<button class="testedelete" onclick="deletar(this.id)"><span id=""><i class="fa-solid fa-trash" style="color: red;"></i></span></button></span>
			`
	DivisaoPai.appendChild(CriarDiv)		
	CriarDiv.classList.add("lista")
	/* console.log(variavelid) */
	let variaveleditar = document.getElementsByClassName("testeedit")[variavelid]
	let variaverlapagar = document.getElementsByClassName("testedelete")[variavelid]
	let variavelitem = document.getElementsByClassName("item")[variavelid]
	variavelid++
	console.log(variavelid)
	variaveleditar.setAttribute("id", "edit"+variavelid)
	variaverlapagar.setAttribute("id", "apagar"+variavelid)
	variavelitem.setAttribute("id", "item"+variavelid)
	document.getElementById("entrada").value = null
}}})


 function deletar(parametroapagar) {
 	switch(parametroapagar){
 	case "apagar1":
 		document.getElementById("item1").remove()
 		document.getElementById("apagar1").remove()
 		document.getElementById("edit1").remove()
 		break

 	case "apagar2":
 		document.getElementById("item2").remove()
 		document.getElementById("apagar2").remove()
 		document.getElementById("edit2").remove()
 		break

 	case "apagar3":
 		document.getElementById("item3").remove()
 		document.getElementById("apagar3").remove()
 		document.getElementById("edit3").remove()
 		break

 	case "apagar4":
 		document.getElementById("item4").remove()
 		document.getElementById("apagar4").remove()
 		document.getElementById("edit4").remove()
 		break

 	case "apagar5":
 		document.getElementById("item5").remove()
 		document.getElementById("apagar5").remove()
 		document.getElementById("edit5").remove()
 		break


 	case "apagar6":
 		document.getElementById("item6").remove()
 		document.getElementById("apagar6").remove()
 		document.getElementById("edit6").remove()
 		break

 	case "apagar7":
 		document.getElementById("item7").remove()
 		document.getElementById("apagar7").remove()
 		document.getElementById("edit7").remove()
 		break

 	case "apagar8":
 		document.getElementById("item8").remove()
 		document.getElementById("apagar8").remove()
 		document.getElementById("edit8").remove()
 		break

 	case "apagar9":
 		document.getElementById("item9").remove()
 		document.getElementById("apagar9").remove()
 		document.getElementById("edit9").remove()
 		break

 	case "apagar10":
 		document.getElementById("item10").remove()
 		document.getElementById("apagar10").remove()
 		document.getElementById("edit10").remove()
 		break

 	case "apagar11":
 		document.getElementById("item11").remove()
 		document.getElementById("apagar11").remove()
 		document.getElementById("edit11").remove()
 		break

 	case "apagar12":
 		document.getElementById("item12").remove()
 		document.getElementById("apagar12").remove()
 		document.getElementById("edit12").remove()
 		break

 	case "apagar13":
 		document.getElementById("item13").remove()
 		document.getElementById("apagar13").remove()
 		document.getElementById("edit13").remove()
 		break

 	case "apagar14":
 		document.getElementById("item14").remove()
 		document.getElementById("apagar14").remove()
 		document.getElementById("edit14").remove()
 		break

 	case "apagar15":
 		document.getElementById("item15").remove()
 		document.getElementById("apagar15").remove()
 		document.getElementById("edit15").remove()
 		break

 		 	case "apagar16":
 		document.getElementById("item16").remove()
 		document.getElementById("apagar16").remove()
 		document.getElementById("edit16").remove()
 		break
 	}

 }


 function alterar(paramento) {
	modoalterar = true
	console.log("Alterar inicial dentro do parametro: "+alterarinicial)
		if(paramento != undefined){
			valorparametroatualizado = paramento
		} else {
			valorparametroatualizado = valorparametro
			}
			console.log('Atualizado lá em baixo: '+valorparametroatualizado) 

				if (paramento == "edit1" || valorparametroatualizado == "edit1"){
				if(alterarinicial == true){
				teste = document.getElementById("item1").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit1"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item1").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit2" || valorparametroatualizado == "edit2"){
				if(alterarinicial == true){
				teste = document.getElementById("item2").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit2"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item2").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit3" || valorparametroatualizado == "edit3"){
				if(alterarinicial == true){
				teste = document.getElementById("item3").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit3"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item3").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit4" || valorparametroatualizado == "edit4"){
				if(alterarinicial == true){
				teste = document.getElementById("item4").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit4"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item4").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit5" || valorparametroatualizado == "edit5"){
				if(alterarinicial == true){
				teste = document.getElementById("item5").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit5"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item5").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit6" || valorparametroatualizado == "edit6"){
				if(alterarinicial == true){
				teste = document.getElementById("item6").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit6"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item6").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit7" || valorparametroatualizado == "edit7"){
				if(alterarinicial == true){
				teste = document.getElementById("item7").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit7"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item7").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit8" || valorparametroatualizado == "edit8"){
				if(alterarinicial == true){
				teste = document.getElementById("item8").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit8"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item8").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit9" || valorparametroatualizado == "edit9"){
				if(alterarinicial == true){
				teste = document.getElementById("item9").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit9"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item9").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit10" || valorparametroatualizado == "edit10"){
				if(alterarinicial == true){
				teste = document.getElementById("item10").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit10"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item10").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit11" || valorparametroatualizado == "edit11"){
				if(alterarinicial == true){
				teste = document.getElementById("item11").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit11"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item11").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit12" || valorparametroatualizado == "edit12"){
				if(alterarinicial == true){
				teste = document.getElementById("item12").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit12"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item12").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit13" || valorparametroatualizado == "edit13"){
				if(alterarinicial == true){
				teste = document.getElementById("item13").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit13"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item13").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit14" || valorparametroatualizado == "edit14"){
				if(alterarinicial == true){
				teste = document.getElementById("item14").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit14"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item14").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit15" || valorparametroatualizado == "edit15"){
				if(alterarinicial == true){
				teste = document.getElementById("item15").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit15"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item15").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
				if (paramento == "edit16" || valorparametroatualizado == "edit16"){
				if(alterarinicial == true){
				teste = document.getElementById("item16").innerText
				document.getElementById("entrada").value = teste
				valorparametro = "edit16"
				console.log(teste)
				} else if (alterarinicial == false){
				
				document.getElementById("item16").innerText = valorajustado
				alterarinicial = true
				modoalterar = false
		} 
	}
																			
}








