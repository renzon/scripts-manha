/**
 * Created by renzo on 8/27/15.
 */
function Pessoa(nome) {
  this.nome = nome || 'Renzo';
}

var pessoaPrototipo = {
  cumprimentar: function () {
    throw 'Método cumprimentar precisa ser implementado';
  }
};

Pessoa.prototype = pessoaPrototipo;

function Homem(nome, idade){
  Pessoa.call(this,nome);
  this.idade = idade || 18;
}

var homemPrototipo =new Pessoa();
homemPrototipo.cumprimentar=function(){
  return 'Olá '+this.nome;
};
homemPrototipo.prototype=Pessoa.prototype;
Homem.prototype=homemPrototipo;

var renzo = new Homem();
var roger = new Pessoa('Roger');

console.log(renzo.cumprimentar());
console.log(roger.cumprimentar());

function Pessoa2(nome) {
  var obj = {
    'nome': nome || 'Renzo',
    cumprimentar: function () {
      return 'Olá, meu nome é ' + this.nome;
    }
  };

  return obj;
}
//var estefania = Pessoa2('Estefania');
//
//var veronica = Pessoa2('Veronica');
//console.log(estefania.cumprimentar());
//console.log(veronica.cumprimentar());
