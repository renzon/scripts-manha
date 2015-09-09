$(document).ready(function () {
  var formWell=$('#form-well');
  formWell.hide();

  $('#botao-nova-categoria').click(function(){
    formWell.slideToggle();
  })

});
