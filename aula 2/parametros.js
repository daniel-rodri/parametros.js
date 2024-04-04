function nomeIdade(nome, idade) {
    return `meu nome e ${nome} e minha idade e ${idade}`;
}
nomeIdade ("jose",18);

console.log(nomeIdade(16, "Daniel"))
console.log(nomeIdade( "Daniel", 16))


function soma (numero1, numero2) {
    return numero1 + numero2;
}
                          //colocando um valor definido nao gera o erro dos parametros 
  function multiplica( numero1 = 1, numero2 = 1) {
return numero1 * numero2;
  }
  console.log(soma(2)) //se nao colocar os dois parametros nao realiza o calculo
                              //9
 console.log(multiplica(soma(4,5)))
