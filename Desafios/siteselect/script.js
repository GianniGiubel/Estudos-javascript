let numero = document.getElementById("txtnum")
let lista = document.getElementById("numlist")
let res = document.getElementById("res")
let valores = []

function ehnumero(n){
   if(Number(n)>=1 && Number(n)<=100){
      return true
   } else{
      return false
   }
}

function temnumero(n,v){
   if(v.indexOf(Number(n))==-1){
      return true
   } else{
      return false
   }
}

function adicionar(){

     if(ehnumero(numero.value) && temnumero(numero.value, valores)){
      let num = Number(numero.value) 
      valores.push(num)
      item = document.createElement('option')
      item.text=`O valor ${num} foi adicionado`
      lista.appendChild(item)
      res.innerHTML=' '
     } else{
        alert('Número inválido ou já adicionado na lista')
     }
     numero.value = ' ' //limpar o campo
     numero.focus() //manter o mouse no campo
     }

function finalizar(){
     if (valores.length==0){
      alert('Adicione um valor antes de finalizar')
     } else{
      let total = valores.length
      let maior = valores[0]
      let menor = valores[0]
      let soma = 0
      let media = 0 
      for(let i in valores){
         soma += valores[i]
         if(valores[i]>maior){
            maior = valores[i]}
         if(valores[i]<menor){
            menor = valores[i]}
         }         
      media = soma/total
      res.innerHTML = ' '
      res.innerHTML += `<p>O total de elementos adicionados é de ${total}</p>`
      res.innerHTML += `<p>O maior número adicionado foi ${maior}</p>`
      res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
      res.innerHTML += `<p>A soma de todos os valores adicionados é de ${soma}</p>`
      res.innerHTML += `<p>A média de todos os valores adicionados é de ${media}</p>`
     }
}     


