$(document).ready(function () {
  var $formWell = $('#form-well');
  var $formGroups = $('div.form-group');
  var $helpBlocks = $('span.help-block');
  var $nomeInput=$('#nome-input');

  $formWell.hide();
  $('#botao-nova-categoria').click(function () {
    $formWell.slideToggle();
  });

  function limparErros() {
    $formGroups.removeClass('has-error');
    $helpBlocks.text('');
  }

  function mostrarErros(erros){
    var helpBlockPrefixo='#help-block-';
    var formGroupPrefixo='#form-group-';
    for(var propriedade in erros){
      $(helpBlockPrefixo+propriedade).text(erros[propriedade]);
      $(formGroupPrefixo+propriedade).addClass('has-error');
    }
  }

  $('#form-categoria').submit(function(evento){
    evento.preventDefault();
    limparErros();
    var nome=$nomeInput.val();
    if(nome===''){
      mostrarErros({'nome':'Campo Obrigatório'})
    }

  });

});
