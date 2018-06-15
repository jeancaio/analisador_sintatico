$('.btn-detalhes').click(function() {
  $('.area-detalhes').toggleClass('hidden')
  if ($(this).find('span').text() === 'Ocultar detalhes') {
    $(this).find('span').text('Mostrar detalhes');
  } else {
    $(this).find('span').text('Ocultar detalhes');
  }
})

var click = 0
var $tabela = $('.tbody-sintatico')

$('.botao-passos').click(function() {
  click += 1
  if (click <= 1) {
    $tabela.append(trSintatico())
    $('.tr-sintatico').append(tdPilha("$S"))
    $('.tr-sintatico').append(tdEntrada(($('.token').val()) + "$"))
    var cedula = $(".tabela-automato").find('.linha-s').find(".coluna-" + $('.token').val().split('')[0]).text()
    $('.tr-sintatico').append(tdAcao(cedula))
    testaGramatica();
  }
})

function testaGramatica() {
  var ultima_letra_pilha = $('.td-pilha').last().text().split('').pop()
  var primeira_letra_entrada = $('.td-entrada').last().text().split('')[0]

  if (primeira_letra_entrada === ultima_letra_pilha) {
    var texto_pilha = $('.td-pilha').last().text()

    $('.tr-sintatico').last().append(tdAcao("Lê " + ultima_letra_pilha + ' e desempilha'))
    $tabela.append(trSintatico())
    $('.tr-sintatico').last().append(tdPilha(texto_pilha.substr(0, (texto_pilha.length - 1))))
    $('.tr-sintatico').last().append(tdEntrada($('.td-entrada').last().text().substr(1)))

    var texto_entrada = $('.td-entrada').last().text();
    cedulaComparavel($('.td-pilha').last().text().split('').pop().toLowerCase(), texto_entrada.split('')[0])
  } else {
    $('.botao-passos').click(function() {
      empilha();
    });
  }

  debugger
  if ($('.td-acao').last().text() === '') {
    var ultima_seq = $('.td-acao').last().text().split('> ')[1].split('').reverse().join('')
    var texto_pilha = $('.td-pilha').last().text()

    $tabela.append(trSintatico())
    $('.tr-sintatico').last().append(tdPilha(texto_pilha.substr(0, (texto_pilha.length - 1)) + ultima_seq))
    $('.tr-sintatico').last().append(tdEntrada($('.td-entrada').last().text()))
  }
}

function empilha() {
  var ultima_seq = $('.td-acao').last().text().split('> ')[1].split('').reverse().join('')
  var texto_pilha = $('.td-pilha').last().text()

  $tabela.append(trSintatico())
  $('.tr-sintatico').last().append(tdPilha(texto_pilha.substr(0, (texto_pilha.length - 1)) + ultima_seq))
  $('.tr-sintatico').last().append(tdEntrada($('.td-entrada').last().text()))
  testaGramatica();
}

function cedulaComparavel(linha, coluna) {
  var cedula = $(".tabela-automato").find('.linha-' + linha).find(".coluna-" + coluna).text()
  if (cedula != '') {
    return $('.tr-sintatico').last().append(tdAcao(cedula))
  } else {
    return $('.tr-sintatico').last().append(tdAcao("Erro em x iterações"))
  }

}

function tdPilha(elemento) {
  return "<td class='td-pilha'>" + elemento + "</td>"
}

function tdEntrada(elemento) {
  return "<td class='td-entrada'>" + elemento + "</td>"
}

function tdAcao(elemento) {
  return "<td class='td-acao'>" + elemento + "</td>"
}

function trSintatico() {
  return "<tr class='tr-sintatico'></tr>"
}
