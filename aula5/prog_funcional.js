var f = function () {
  console.log('Executando F');
};

g = f;

g();

f = 1;

g();

function h(funcao) {
  console.log('Execuntando H');

  function j() {
    console.log('Execuntando J');
    funcao();
  }

  return j;

}
h(g);


h(function () {
  console.log('Execuntando Anonima');
});


var jExterna=h(g);

jExterna();