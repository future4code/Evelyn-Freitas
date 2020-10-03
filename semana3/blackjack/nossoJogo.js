console.log("Bem-vindo(a) ao jogo de Blackjack!");

let jogo = confirm("Quer iniciar uma nova rodada?");

if (jogo) {
   let primeiraCartaUsuario = comprarCarta();
   let segundaCartaUsuario = comprarCarta();
   let primeiraCartaPc = comprarCarta();
   let segundaCartaPc = comprarCarta();

   let pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;
   let pontuacaoPc = primeiraCartaPc.valor + segundaCartaPc.valor;
    
   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${pontuacaoUsuario}`);
   console.log(`Computador - cartas: ${primeiraCartaPc.texto} ${segundaCartaPc.texto} - ${pontuacaoPc}`);

   if (pontuacaoUsuario > pontuacaoPc) {
      console.log("Você ganhou!");
   } else if (pontuacaoPc > pontuacaoUsuario) {
      console.log("O computador ganhou!");
   } else if (pontuacaoUsuario === pontuacaoPc) {
      console.log("Deu empate!");
   } 

} else {
   console.log("O jogo acabou!");
}