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