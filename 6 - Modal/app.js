let alterar_modal = document.getElementsByClassName('conteudo')[0];

function abrir() {
alterar_modal.style.zIndex = "1";
alterar_modal.style.opacity = "100%";
}

function fechar(){
alterar_modal.style.zIndex = "-1";
alterar_modal.style.opacity = "0";	
}

