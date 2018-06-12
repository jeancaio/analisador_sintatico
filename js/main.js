$('.btn-detalhes').click(function() {
  $('.area-detalhes').toggleClass('hidden')
  if ($(this).find('span').text() === 'Ocular detalhes') {
    $(this).find('span').text('Mostrar detalhes');
  } else {
    $(this).find('span').text('Ocultar   detalhes');
  }
})
