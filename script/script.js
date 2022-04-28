function nomeJogador(nomePlayer) {
    nomePlayer =  prompt (`Quem se atreve a desbravar os mitos de Pandora?`);

    while (true){
    if (nomePlayer == ''){
        alert('Insira seu nome!');
        nomePlayer =  prompt (`Quem se atreve a desbravar os mitos de Pandora?`);
    } else {
        window.location.assign('./escolhachar/escolhachar.html');
        break;
    }
}
}

function decisaoPandora(){
    var opcao = prompt(`Como Pandora irá agir?`);

    while (true){
        if (opcao.toUpperCase() == 'A'){
            alert (`Será que fora a melhor escolha?`);
            window.location.assign('./pandora2.a.html');
            break;
        } else if (opcao.toUpperCase() == 'B'){
            alert (`O que acontecerá?`);
            window.location.assign('./pandora2.b.html');
            break;
        } else if (opcao.toUpperCase() != 'A' || 'B' || 'C' && null){
            alert (`Entrada inválida. Digite apenas as letras correspondentes às alternativas!`);
            opcao = prompt(`Qual decisão Pandora deve tomar?`);
        }
    }
}

function decisaoZeus1(){
    var opcao = prompt(`Qual decisão Zeus deve tomar?`);

    while (true){
        if (opcao.toUpperCase() == 'A'){
            alert (`O que será que houve?`);
            window.location.assign('./zeus/fimzeus1.html');
            break;
        } else if (opcao.toUpperCase() == 'B'){
            alert (`Zeus venceu?`);
            window.location.assign('./zeus/fimzeus2.html');
            break;
        } else if (opcao.toUpperCase() == 'C'){
            alert (`Não consegue, né, Moisés?`);
            window.location.assign('./zeus/zeus4.html');
            break;
        } else if (opcao.toUpperCase() != 'A' || 'B' || 'C' && null){
            alert (`Entrada inválida. Digite apenas as letras correspondentes às alternativas!`);
            opcao = prompt(`Qual decisão Zeus deve tomar?`);
        }
    }
}

function decisaoEpimeteu1(){
    var opcao = prompt(`O que Epimeteu irá fazer?`);

    while (true){
        if (opcao.toUpperCase() == 'A'){
            alert (`O que esperar do futuro?`);
            window.location.assign('./epimeteu/epimeteu2.html');
            break;
        } else if (opcao.toUpperCase() == 'B'){
            alert (`Será que foi a escolha certa?`);
            window.location.assign('./epimeteu/fimepimeteu2.html');
            break;
        } else if (opcao.toUpperCase() != 'A' || 'B' || 'C' && null){
            alert (`Entrada inválida. Digite apenas as letras correspondentes às alternativas!`);
            opcao = prompt(`Qual decisão Zeus deve tomar?`);
        }
    }
}

function decisaoEpimeteu2(){
    var opcao = prompt(`O que Epimeteu irá fazer?`);

    while (true){
        if (opcao.toUpperCase() == 'A'){
            alert (`O que será de Epimeteu?`);
            window.location.assign('./epimeteu/epimeteu3.html');
            break;
        } else if (opcao.toUpperCase() == 'B'){
            alert (`Será que foi a escolha certa?`);
            window.location.assign('./epimeteu/fimepimeteu2.html');
            break;
        } else if (opcao.toUpperCase() != 'A' || 'B' || 'C' && null){
            alert (`Entrada inválida. Digite apenas as letras correspondentes às alternativas!`);
            opcao = prompt(`Qual decisão Zeus deve tomar?`);
        }
    }
}

function decisaoEpimeteu3(){
    var opcao = prompt(`Epimeteu deve...`);

    while (true){
        if (opcao.toUpperCase() == 'A'){
            alert (`O que esperar do futuro?`);
            window.location.assign('/epimeteu/epimeteu2.html');
            break;
        } else if (opcao.toUpperCase() == 'B'){
            alert (`Será que foi a escolha certa?`);
            window.location.assign('/epimeteu/fimepimeteu3.html');
            break;
        } else if (opcao.toUpperCase() != 'A' || 'B' || 'C' && null){
            alert (`Entrada inválida. Digite apenas as letras correspondentes às alternativas!`);
            opcao = prompt(`Qual decisão Zeus deve tomar?`);
        }
    }
}

