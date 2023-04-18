function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade>=0 && idade<6){
                //criança
                img.setAttribute('src', 'fotocriancaM.jpg')
            } else if(idade<21){
                //jovem
                img.setAttribute('src', 'fotoMjovem.jpg')
            } else if(idade<50){
                //adulto
                img.setAttribute('src', 'fotoadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else {
            genero = 'Feminino'
            if (idade>=0 && idade<6){
                //criança
                img.setAttribute('src', 'fotocriancaF.jpg')
            } else if(idade<21){
                //jovem
                img.setAttribute('src', 'fotoFjovem.jpg')
            } else if(idade<50){
                //adulto
                img.setAttribute('src', 'fotoadulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `O gênero informado foi ${genero} e sua idade é ${idade}!`
        res.appendChild(img)
    }
}