function somaGasto(conta1, conta2){
    return conta1 + conta2
}

function estaEndividado(){
   const salario = 6500
   const gastos = somaGasto(500, 700)

   if (gastos > salario){
      console.log("Sua conta está VERMELHA")
   }
   else{
      console.log("Sua conta esta AZUL")
   }
}

estaEndividado()