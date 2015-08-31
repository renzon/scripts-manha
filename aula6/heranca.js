/**
 * Created by renzo on 8/27/15.
 */
function Pessoa(nome){
  this.nome=nome || 'Renzo';
}

var pessoaPrototipo={cumprimentar:function(){
  return 'Olá, meu nome é '+this.nome;
}};

Pessoa.prototype=pessoaPrototipo;

var renzo = new Pessoa();
var roger = new Pessoa('Roger');

console.log(renzo.cumprimentar());
console.log(roger.cumprimentar());