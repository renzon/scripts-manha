$(document).ready(function () {
  var formWell = $('#form-well');
  var formGroups = $('.form-group');

  formWell.hide();
  $('#botao-nova-categoria').click(function () {
    formWell.slideToggle();
  });

  function limparErros() {
    formGroups.removeClass('has-error');
  }

  $('#form-categoria').submit(function(evento){
    evento.preventDefault();
    limparErros();
  });

});
