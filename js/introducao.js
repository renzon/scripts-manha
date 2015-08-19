var hello = 'Hello Worlds';
console.log(hello);
console.log(1+'1');
console.log(1.0+'1');
console.log(null);
console.log(undefined);
console.log(null==undefined);
console.log(null==0);
console.log('0'==0);

var alunos= ['Natanny', 'Arthur'];
alunos.push('Jefrei');

alunos.splice(1,0);
alunos.unshift('Lucas');
console.log(alunos);
for(var i=0; i<alunos.length;++i){
  console.log(alunos[i]);

}




