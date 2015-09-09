$(document).ready(function () {
  var formWell = $('#form-well');
  var formGroups = $('div.form-group');
  var helpBlocks = $('span.help-block');

  formWell.hide();
  $('#botao-nova-categoria').click(function () {
    formWell.slideToggle();
  });

  function limparErros() {
    formGroups.removeClass('has-error');
    helpBlocks.text('');
  }

  $('#form-categoria').submit(function(evento){
    evento.preventDefault();
    limparErros();
  });

});
