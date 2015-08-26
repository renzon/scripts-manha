function derivar(funcao, deltaX) {
  if (deltaX === undefined) {
    deltaX = 0.00000000001;
  }

  function derivada(x) {
    return (funcao(x + deltaX) - funcao(x)) / deltaX;
  }

  return derivada

}

function reta(x){
  return x;
}

var reta_derivada=derivar(reta);

console.log(reta_derivada(1));
console.log(reta_derivada(2));

function parabola(x){
  return x*x;
}


var parabola_derivada= derivar(parabola);

console.log(parabola_derivada(1));
console.log(parabola_derivada(2));


function a(){
  console.log('Execuntando A');
  return 'A';
}


function decorador(funcao){
  function funcaoDecorada(){
    console.log('Antes');
    var retornoDeFuncao=funcao.apply(funcao,arguments);
    console.log('Depois');
    return retornoDeFuncao;
  }

  return funcaoDecorada;

}

a=decorador(a);

console.log(a());

function f(a, b, c){
  console.log(a+b+c);
  return a, b, c;
}

f=decorador(f);

console.log(f(1,2,3));










