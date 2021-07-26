$(document).ready(function() {
    $('#staticBackdrop').modal('show');

    $('#button_start_game').click(function(){
        capturaDadosJogadores();
    });

    $("td").click(function(){
        if($(this).html() == ""){
            preencheColunaJogoDaVelha(this);
        }
    });

    $("#button_player_one_win").click(function(){
        adicionaValorAoRak("one");
    })

    $("#button_player_two_win").click(function(){
        adicionaValorAoRak("two");
    })

    $("#button_player_nobody_win").click(function(){
        adicionaValorAoRak("nobody");
    })

    $('#resultGame').on('show.bs.modal', function (event) {
        numeroDeRodadas = 0;
      })
});

function capturaDadosJogadores(){
    var playerOne = $('input[name="input_player_one"]').val();
    var playerTwo = $('input[name="input_player_two"]').val();

    var startGame = true;

    if(playerOne == ''){
        alert("Preencha o campo com o nome do primeiro jogador")
        startGame = false;
    }

    if(playerTwo == ''){
        alert("Preencha o campo com o nome do segundo jogador")
        startGame = false;
    }

    if(startGame == true){
        $('#staticBackdrop').modal('hide');
        preencheNmeJogadores();
        $('#game').show('slow')
    }
}

function preencheNmeJogadores() {
    var playerOne = $("input[name='input_player_one']").val();
    var playerTwo = $("input[name='input_player_two']").val();

    $("#span_player_one, #button_player_one_win").html(playerOne);
    $("#span_player_two, #button_player_two_win").html(playerTwo);
}

var ultimaJogada = "";
var numeroDeRodadas = 0;

function preencheColunaJogoDaVelha(coluna){
    var jogadaAtual;
    if(ultimaJogada == ""){
        jogadaAtual = "X";
    }
    if(ultimaJogada == "O")
    {
        jogadaAtual = "X";
    }
    if(ultimaJogada == "X"){
        jogadaAtual = "O";
    }
    ultimaJogada = jogadaAtual;

    $(coluna).html(jogadaAtual);

    numeroDeRodadas = numeroDeRodadas+1;

    if(numeroDeRodadas == 9){
        $("#resultGame").modal('show');
    }
}

var scorePlayerOne = 0;
var scorePlayerTwo = 0;

function adicionaValorAoRak(vencedor){

    if(vencedor == "one"){
        scorePlayerOne = scorePlayerOne +1;
    }

    if(vencedor == "two"){
        scorePlayerTwo = scorePlayerTwo +1;
    }

    $("#span_player_one_score").html(scorePlayerOne);
    $("#span_player_two_score").html(scorePlayerTwo);

    $("#resultGame").modal('hide');

    $("td").html("");
}