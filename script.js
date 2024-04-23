var DATE = new Date()
var hora = DATE.getHours()
var textos_home = document.getElementById('txt_principais')
var botão_projetos = document.getElementById('btn_projetos')
var a = document.getElementById('rod')
var titulo = document.getElementById('titulo')
var contador_easter2 = 0
titulo.addEventListener('click', easter1)
titulo.addEventListener('contextmenu', easter2)
botão_projetos.addEventListener('click', ir_paraProjetos)

function easter1(){
    var texto = titulo.innerHTML
    if (texto == '<center>KAY<span>OFFICE</span></center>'){
        titulo.innerHTML = '<center>K<span>F</span></center>'
    }else{
        titulo.innerHTML = '<center>KAY<span>OFFICE</span></center>'
    }
}

function enviar_ideias(){
    var textoDigitado = document.getElementById("caixa_ideias").value;
    var texto = textoDigitado
    var emailDestinatario = "devkauanbr@gmail.com";
    var url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + emailDestinatario + "&su=Ideia%20Do%20Projeto The Apocalipse Game&body=" + encodeURIComponent(texto);
    window.open(url, "_blank");
}

function ir_paraProjetos() {
    window.location.href = 'projetos.html';
}

function easter2(){
    if(contador_easter2 >= 15){
        prompt('command: ')
        contador_easter2 = 0
    }else{
        contador_easter2++
    }
}



//Tirando a telinha que aparece quando o usuario
//clica com o botão direito do mouse sobre o site
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

//Configurando tema do site
if(hora >= 6 && hora < 18){
    document.body.style.backgroundColor = 'white'
    titulo.style.color = 'black'
    textos_home.style.color = 'black'
}else{
    document.body.style.backgroundColor = 'black'
    titulo.style.color = 'white'
    textos_home.style.color = 'white'

}
