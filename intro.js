
a=[1,2,3];

console.log(a);
a.push(4);
a.unshift(0);
a.splice(1,1);

for(var i in a){
  console.log(a[i])
}

console.log(a);

console.log(null==undefined);
console.log(null===undefined);

function f(x, y){
  console.log(x);
  console.log(y);
  console.log(arguments)
}
f();
f(1);
f(1,2);
f(1,2,3);
f(1,2,3,4);

function Pessoa(idade){
  this.idade=idade;
}


Pessoa.prototype={
  cumprimentar:function(){
    throw 'Método abstrato';
  }
}
function Homem(idade, barba) {
  Pessoa.call(this,idade);
  this._barba = barba
}


Homem.prototype=
{
  get barba(){
    console.log('Get executado');
    return this._barba
  },
  set barba(_barba){
    console.log('Set executado');
    this._barba=_barba
  },
  cumprimentar:function cumprimentar(){
    return 'Apertar a mão, barba: '+this.barba
  }
};

Homem.prototype.prototype=Pessoa;

//pessoa=new Homem(32,);
//pessoa.cumprimentar();
var h = new Homem(32, false);
console.log(h.idade);
//console.log(h.barba)
//h.barba=true;
//console.log(h.barba)
//
//
//console.log(h.cumprimentar())
