function timeDesempenho(pontos, golSofrido){
   return pontos / golSofrido
}

function timeCampeao(){
   const pontoNecessario = 80
   const desempenhoFinal = timeDesempenho(280, 3.4)
   console.log(desempenhoFinal)

   if (desempenhoFinal >= pontoNecessario){
      console.log("Seu time foi campeão")
   }
   else{
      console.log("Seu time perdeu")
   }
}

timeCampeao()

