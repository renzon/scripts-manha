$(document).ready(function () {
  var $titulo = $('#titulo');
  var $divSuicida = $('#div-suicida');

  $('#btn-up').click(function () {
    $titulo.slideUp();
  });

  $('#btn-down').click(function () {
    $titulo.slideDown();
  });

  $('#btn-up-down').click(function () {
    $titulo.fadeToggle();
  });
  var contador=0;
  var removerBotoesSuicidas = function () {
    $divSuicida.empty();
    ++contador;
    console.log(contador);
  };

  $('.suicida').click(removerBotoesSuicidas);

  $('#btn-highlander').click(function () {
    var btnString = '<button  class="btn btn-danger suicida">';
    btnString += '<i class="glyphicon glyphicon-trash"></i>';
    btnString += '</button>';
    var $btn=$(btnString);
    $divSuicida.append($btn);
    $btn.click(removerBotoesSuicidas);
    console.log($btn.attr('class'))
  });


});
