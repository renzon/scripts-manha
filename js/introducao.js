var hello = 'Hello Worlds';
console.log(hello);
console.log(1 + '1');
console.log(1.0 + '1');
console.log(null);
console.log(undefined);
console.log(null == undefined);
console.log(null == 0);
console.log('0' == 0);

var alunos = ['Natanny', 'Arthur'];
alunos.push('Jefrei');

alunos.splice(1, 0);
alunos.unshift('Lucas');
console.log(alunos);
for (var i = 0; i < alunos.length; ++i) {
  console.log(alunos[i]);

}


function f(x, y) {
  var a = 1;
  if (y === undefined) {
    y = 1;
  }
  console.log('X: ' + x);
  console.log('Y: ' + y);
  console.log(arguments);
  //return x + y;

}

console.log(f(1, 2));
console.log(f(1));
console.log(f());
console.log(f(1, 2, 3));
//console.log(a);

var obj = {
  nome: 'Renzo', 'sobrenome': 'Nuccitelli',
  1: [1, 2, 3]
};

console.log(obj);

console.log(obj[1]);
console.log(obj.sobrenome);
console.log(obj['sobrenome']);


console.log(f());






