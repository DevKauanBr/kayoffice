var DATE = new Date()
var hora = DATE.getHours()
var textos_home = document.getElementById('txt_principais')
var botão_projetos = document.getElementById('btn_projetos')
var botão_sobre = document.getElementById('btn_sobre')
var a = document.getElementById('rod')
var titulo = document.getElementById('titulo')
var contador_easter2 = 0
titulo.addEventListener('click', easter1)
titulo.addEventListener('contextmenu', easter2)
var span = document.getElementById('span')
botão_projetos.addEventListener('click', ir_paraProjetos)
botão_sobre.addEventListener('click', ir_paraSobre)

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

function ir_paraSobre(){
    window.location.href = 'sobre.html'
}

function easter2(){
    if(contador_easter2 >= 5){
        var cmd = prompt('command: ')
        contador_easter2 = 0

        if (cmd == '**delete'){
            document.write('deleted');
        }
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



// ID do seu Gist no GitHub
const gistId = "b98d4df632b542fd197668735eb27573";

// URL da API do GitHub para acessar o conteúdo de um Gist
const gistApiUrl = `https://api.github.com/gists/${gistId}`;

// Variável global para armazenar o conteúdo do Gist
let data;

// Função para buscar o conteúdo do Gist usando a API do GitHub
async function fetchGistContent(url) {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    // Extrair o conteúdo do arquivo do Gist
    const content = responseData.files[Object.keys(responseData.files)[0]].content;
    return content;
  } catch (error) {
    console.error("Erro ao buscar o conteúdo do Gist:", error);
    return null;
  }
}

// Função para processar o conteúdo do Gist
async function processGistContent() {
  const gistContent = await fetchGistContent(gistApiUrl);
  if (gistContent) {
    // Armazenar o conteúdo na variável global
    data = gistContent;
    //alert(data);
    // Faça o que for necessário com o conteúdo aqui
  } else {
    console.error("Não foi possível obter o conteúdo do Gist.");
  }
}

// Chamar a função para processar o conteúdo do Gist
processGistContent().then(() => {

  // Usar a variável global data aqui, após a resolução da Promise
  
    var item1 = document.getElementById('aviso_serve')
    item1.innerText = `${data}`
});



