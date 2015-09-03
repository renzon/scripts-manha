function construtorObservador() {
  var lista = [];
  var evento = {contador:1};
  var objeto = {
    contar: function () {
      lista.forEach(function (valor) {
        valor(evento);
      });
      evento.contador ++;
    }
  };

  function adicionarOuvinte(funcao) {
    lista.push(funcao);

  }

  objeto.adicionarOuvinte = adicionarOuvinte;

  return objeto;
}
function observador(evento) {
  console.log('Contando...' + evento.contador);
}

function observador2(evento) {
  console.log('Contando de novo...' + evento.contador);
}

var contadorObservador = construtorObservador();
console.log(contadorObservador);

contadorObservador.adicionarOuvinte(observador);
contadorObservador.adicionarOuvinte(observador2);

contadorObservador.contar();
contadorObservador.contar();