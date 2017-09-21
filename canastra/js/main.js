var mao = [
];

var jogo = [
    {
        "jogador1":"--",
        "jogador2":"--",
        "jogador3":"--",
        "jogador4":"--"
    }
];

function setPartida(jogo){

    var cabecalho = '<tr>'
        cabecalho +=    '<th scope="row">#</th>';
        cabecalho +=    '<th>'+jogo[0].jogador1+' <br/> '+jogo[0].jogador2+'</th>';
        cabecalho +=    '<th>x</th>';
        cabecalho +=    '<th>'+jogo[0].jogador3+' <br/> '+jogo[0].jogador4+'</th>';
        cabecalho +=    '<th></th>';
        cabecalho += '</tr>';

        document.getElementById('cabecalho_duplas').innerHTML = cabecalho;

}

function setMao(mao){

    var corpo = "";
    var i = 1;
    for(var key in mao){
        
            corpo += '<tr>';
            corpo +=        '<th scope="row">'+i+'Âº</th>';
            corpo +=        '<td>'+mao[key].pt1+'</td>';
            corpo +=        '<td>x</td>';
            corpo +=        '<td>'+mao[key].pt2+'</td>';
            corpo +=        '<td></td>';
            corpo +=  '</tr>';
        i++;
    }

    var totalPtsDupla1 = 0;
    var totalPtsDupla2 = 0;

    for(var key in mao){

        totalPtsDupla1 += parseInt(mao[key].pt1);
        totalPtsDupla2 += parseInt(mao[key].pt2);

    }

            corpo += '<tr>';
            corpo +=        '<th scope="row">Placar</th>';
            corpo +=        '<td><strong>'+totalPtsDupla1+'</strong></td>';
            corpo +=        '<td>x</td>';
            corpo +=        '<td><strong>'+totalPtsDupla2+'</strong></td>';
            corpo +=        '<td></td>';
            corpo +=  '</tr>';

    document.getElementById('corpo_mao').innerHTML = corpo;

}

function novoJogo(){
   var jogador1 = document.getElementById("jogador1").value;
   var jogador2 = document.getElementById("jogador2").value;
   var jogador3 = document.getElementById("jogador3").value;
   var jogador4 = document.getElementById("jogador4").value;

   jogo.pop();
   jogo.unshift({"jogador1": jogador1, "jogador2": jogador2, "jogador3": jogador3, "jogador4":jogador4});
   limparMao();
   setPartida(jogo);

}

function addMao(){
   var pts1 = document.getElementById("pts1").value;
   var pts2 = document.getElementById("pts2").value;
   mao.push({"pt1": pts1, "pt2": pts2});
   setMao(mao);
}

function limparMao(){
    mao = [];
    setMao(mao);
}

setPartida(jogo);
setMao(mao);