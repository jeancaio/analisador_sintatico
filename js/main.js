$('.btn-detalhes').click(function() {
  $('.area-detalhes').toggleClass('hidden')
  if ($(this).find('span').text() === 'Ocultar detalhes') {
    $(this).find('span').text('Mostrar detalhes');
  } else {
    $(this).find('span').text('Ocultar detalhes');
  }
})

var click = 0
$('.botao-passos').click(function() {
  click += 1
  if (click <= 1) {
    $('.tbody-sintatico').append("<tr class='tr-sintatico'></tr>")
    $('.tr-sintatico').append("<td>$S</td>")
    $('.tr-sintatico').append("<td>" + $('.token').val() + "$</td>")
    var cedula = $(".tabela-automato").find('.linha-s').find(".coluna-"+$('.token').val().split('')[0]).text()
    $('.tr-sintatico').append("<td class='td-acao'>" + cedula + "</td>")
  }
  testaGramatica();
})

function testaGramatica() {
}
