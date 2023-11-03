 window.scrollBy(1, 0);

function scroll(){

let valor_rolagem = window.pageYOffset
console.log(valor_rolagem)
  if (valor_rolagem > 430){
    document.getElementById("up").className = "fa-solid fa-circle-up fa-beat fa-2xl";
  } else {
    document.getElementById("up").className = "x";
  }

  if (valor_rolagem < 86) {
    document.getElementById("barra_branca").style.backgroundColor = "transparent";
    document.getElementById("menu1").style.color = "white";
    document.getElementById("menu2").style.color = "white";
    document.getElementById("menu3").style.color = "white";
    document.getElementById("menu4").style.color = "white";
  }
  else{
    document.getElementById("barra_branca").style.backgroundColor = "white";
    document.getElementById("menu1").style.color = "black";
    document.getElementById("menu2").style.color = "black";
    document.getElementById("menu3").style.color = "black";
    document.getElementById("menu4").style.color = "black";
  }
}






