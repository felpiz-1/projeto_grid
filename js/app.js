import { usuarios, listarUser, listarContats, litarMensagensContats} from "./contatos.js";

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
