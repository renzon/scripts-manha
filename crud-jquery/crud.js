$(document).ready(function () {
  var $formWell = $('#form-well');
  var $formGroups = $('div.form-group');
  var $helpBlocks = $('span.help-block');
  var $nomeInput = $('#nome-input');
  var $tabelaCategoria = $('#tabela-categoria');
  var $listarAjaxLoader = $('#listar-ajax-loader');

  $formWell.hide();
  $('#botao-nova-categoria').click(function () {
    $formWell.slideToggle();
  });

  function limparErros() {
    $formGroups.removeClass('has-error');
    $helpBlocks.text('');
  }


  function adicionarCategoria(categoria) {
    var linha = '<tr>';
    linha += '<td>' + categoria.id + '</td>';
    linha += '<td>' + categoria.creation + '</td>';
    linha += '<td>' + categoria.nome + '</td>';
    linha += '<td>';
    linha += '<button class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button>';
    linha += '<img src="../img/ajax-loader.gif" hidden="hidden"/>';
    linha += '</td ></tr>';

    var $linhaObjeto = $(linha);
    var $botao = $linhaObjeto.find('button.btn');
    var $ajaxLoader = $linhaObjeto.find('img');
    $botao.click(function () {
      $botao.hide();
      $ajaxLoader.fadeIn();
      $.post('http://localhost:8080/categorias/rest/delete',
        {'id': categoria.id}).success(function () {
          $linhaObjeto.remove();
        }).error(function (erros) {
          alert('Não é possível apagar no momento')
          $ajaxLoader.hide();
          $botao.fadeIn();
        });

    });

    $tabelaCategoria.append($linhaObjeto);

  }

  function listarCategorias(categorias) {
    $.each(categorias, function (i, cat) {
      adicionarCategoria(cat);
    });
  }

  $listarAjaxLoader.show();
  $.get('http://localhost:8080/categorias/rest').success(
    listarCategorias
  ).error(function () {
      alert('Não foi possível listar categorias');
    }).always(function () {
      $listarAjaxLoader.fadeOut();
    });

  function mostrarErros(erros) {
    var helpBlockPrefixo = '#help-block-';
    var formGroupPrefixo = '#form-group-';
    $.each(erros, function (propriedade, valorDaPropriedade) {
      $(helpBlockPrefixo + propriedade).text(valorDaPropriedade);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

  $('#form-categoria').submit(function (evento) {
    evento.preventDefault();
    limparErros();
    var nome = $nomeInput.val();
    $.post('http://localhost:8080/categorias/rest/new',
      {'nome': nome}).success(function (categoria) {
        adicionarCategoria(categoria);
        $nomeInput.val('');
      }).error(function (erros) {
        mostrarErros(erros.responseJSON);
      });
  });
});
