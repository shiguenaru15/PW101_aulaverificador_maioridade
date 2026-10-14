function verificarIdade() {
  
  const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);
  const nomeDigitado = document.getElementById("campoNome").value;
  
    const idadefalta = 18 - idadeDigitada;

  const elementoResultado = document.getElementById("mensagemResultado");

  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText = "Por favor, digite uma idade numérica válida.";
    elementoResultado.style.color = "#dc2626";
    return;
  }


  if (idadeDigitada >= 18) {
    elementoResultado.innerText = `Olá, ${nomeDigitado}! Você tem ${idadeDigitada} anos e seu acesso foi liberado com sucesso.`;
    elementoResultado.style.color = "#16a34a";
    console.log(`Olá, ${nomeDigitado}! Você tem ${idadeDigitada} anos e seu acesso foi liberado com sucesso.`);
  } else {
    elementoResultado.innerText = `Acesso negado para ${nomeDigitado}: você tem ${idadeDigitada} anos e ainda não possui a idade mínima permitida. Faltam ${idadefalta} anos para atingir a maior idade.`;
    elementoResultado.style.color = "#d90606ff";
    console.log(` ${idadeDigitada} anos (Menor de idade)`);
  }
}