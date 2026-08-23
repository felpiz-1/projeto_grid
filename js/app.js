import { usuarios, listarUser, listarContats, litarMensagensContats} from "./contatos.js";

const iconeMensagensNav = document.getElementById('icone-msg');
const fotoPerfilNav = document.getElementById('secao-perfil');

const secaoMensagens = document.querySelector('.section');
const secaoPerfil = document.querySelector('.container_perfil');

function abrirPerfil() {
  secaoMensagens.classList.add('ocultar');
  secaoPerfil.classList.remove('ocultar');
}

function abrirMensagens() {
  secaoPerfil.classList.add('ocultar');
  secaoMensagens.classList.remove('ocultar');
}

fotoPerfilNav.addEventListener('click', abrirPerfil);
iconeMensagensNav.addEventListener('click', abrirMensagens);

listarUser()
listarContats(2)
litarMensagensContats(0,3)



const elemento = {
    listaContatos: document.querySelector("container-mensagens")
}



function criarontatos(srcFoto, nome, hora, ultima, naoLidas, idContato){
    const cardContatos = document.createElement('div');
    const fotoContato = document.createElement('img');
    const nomeContato = document.createElement('p');
    const horaMsg = document.createElement('p')
    const previaMensagem = document.createElement('p');
    const msgNaoLidas = document.createElement('p')
    
    cardContatos.className = "card-mensagem"
    fotoContato.className = "foto-perfil"
    nomeContato.className = "nomeContato"
    horaMsg.className = "horario-mensagem"
    previaMensagem.className = "previa-mensagem"
    msgNaoLidas.className = "msgNaoLidas"
    
    fotoContato.src = srcFoto
    nomeContato.innerText = nome
    horaMsg.innerText = hora
    previaMensagem.innerText = ultima
    msgNaoLidas.innerText = naoLidas
    
    cardContatos.id = idContato
    
    cardContatos.append(fotoContato, nomeContato, horaMsg, previaMensagem, msgNaoLidas);
    
    elemento.listaContatos.append(cardContatos);
}

// criarontatos(listarContats(2));
