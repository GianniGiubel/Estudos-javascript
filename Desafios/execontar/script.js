function contar(){
   var ini = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var passo = document.getElementById('txtp')

   if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('inválido')
   }else {
    window.alert('tudo ok!')
   }
}