function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
        if (hora < 6){
            //Madrugada!
            msg.innerHTML = `Agora é de madrugada, não tem foto fiquei com preguiça de pegar uma!`
        } else {
            //Bom dia!
            img.src = 'fotomanha.png'
            msg.innerHTML = `Agora são ${hora} horas da manhã!`
        }
    } else if (hora > 12 && hora < 18){
        //Boa tarde!
        img.src = 'fototarde.png'
        msg.innerHTML = `Agora são ${hora} horas da tarde!`
    } else{
        //Boa noite!
        img.src = 'fotonoite.png'
        msg.innerHTML = `Agora são ${hora} horas da noite!`
    }
}