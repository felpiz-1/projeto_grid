import { usuarios } from "./contatos.js";

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

const elemento = {
    listaContatos: document.querySelector(".container-mensagens"),
    gridMensagens: document.querySelector(".grid-msg"),
    nomeTopo: document.querySelector(".container-topo-mensagens h2"),
    fotoTopo: document.querySelector(".container-topo-mensagens .foto-perfil")
};

function carregarMensagens(contato, fotoUrl) {
    elemento.nomeTopo.innerText = contato.name;
    elemento.fotoTopo.src = fotoUrl;
    elemento.gridMensagens.innerHTML = "";

    contato.messages.forEach((msg) => {
        const divMsg = document.createElement('div');
        const divSeta = document.createElement('div');
        const pTexto = document.createElement('p');
        const spanHora = document.createElement('span');

        const ehMinhaMsg = msg.sender === "me";

        if (ehMinhaMsg) {
            divMsg.className = "msg-enviada";
            divSeta.className = "affs-enviadas";
        } else {
            divMsg.className = "msg-recebida";
            divSeta.className = "affs";
        }

        pTexto.innerText = msg.content;
        spanHora.innerText = msg.time;

        divMsg.append(divSeta, pTexto, spanHora);
        elemento.gridMensagens.appendChild(divMsg);
    });
}

function criarontatos(srcFoto, nome, hora, ultima, naoLidas, idContato, aoClicar) {
    const cardContatos = document.createElement('div');
    const fotoContato = document.createElement('img');
    const nomeContato = document.createElement('p');
    const horaMsg = document.createElement('p');
    const previaMensagem = document.createElement('p');
    const containerNotificacao = document.createElement('div');
    const msgNaoLidas = document.createElement('p');
    
    cardContatos.className = "card-mensagem";
    fotoContato.className = "foto-perfil";
    nomeContato.className = "nomeContato";
    horaMsg.className = "horario-mensagem";
    previaMensagem.className = "previa-mensagem";
    containerNotificacao.className = "notificacao-mensagem";
    msgNaoLidas.className = "msgNaoLidas";
    
    fotoContato.src = srcFoto;
    nomeContato.innerText = nome;
    horaMsg.innerText = hora;
    previaMensagem.innerText = ultima;
    msgNaoLidas.innerText = naoLidas;
    cardContatos.id = idContato;
    
    cardContatos.addEventListener('click', aoClicar);

    containerNotificacao.appendChild(msgNaoLidas);
    cardContatos.append(fotoContato, nomeContato, horaMsg, previaMensagem, containerNotificacao);
    
    elemento.listaContatos.appendChild(cardContatos);
}

function carregarContatos() {
    elemento.listaContatos.innerHTML = "";

    const usuario = usuarios["whats-users"][0];

    usuario.contacts.forEach((contato, index) => {
        const ultimasMensagens = contato.messages;
        const ultimaMsg = ultimasMensagens[ultimasMensagens.length - 1];

        const textoUltimaMsg = ultimaMsg.content;
        const horaUltimaMsg = ultimaMsg.time;

        const fotoUrl = `https://i.pravatar.cc/150?img=${index + 12}`;

        const aoClicar = () => carregarMensagens(contato, fotoUrl);

        if (index === 0) {
            carregarMensagens(contato, fotoUrl);
        }

        criarontatos(fotoUrl, contato.name, horaUltimaMsg, textoUltimaMsg, "1", `contato-${index}`, aoClicar);
    });
}

carregarContatos();