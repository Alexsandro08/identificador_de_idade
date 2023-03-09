function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.getElementById("res")
    if(fano.value.length == 00 || fano.value > ano) {
        window.alert('[ERRO] Preencha os dados corretamente')
    } else {
        let fsex = document.getElementsByName('sex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
    
            
            
            if(idade <= 5 && idade < 10){
                // criança
                img.setAttribute('src', 'imagens/crianca m.png')

            } else if (idade <= 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem m.png')
            }
            else if(idade < 55){
                img.setAttribute('src', 'imagens/adulto m.png')
   
            } else {
                //idoso
                img.setAttribute('src','imagens/idoso m.png')
            }
           
            
        }else if( fsex[1].checked){
             genero = 'Mulher'
          
            
        if(idade <= 5 && idade < 10){
            img.setAttribute('src', 'imagens/crianca f.png')
        }
        else if(idade <= 21){
            img.setAttribute('src', 'imagens/jovem f.png')

        } else if(idade < 55){
            img.setAttribute('src', 'imagens/adulta f.png')

        }
        else{
            img.setAttribute('src', 'imagens/idoso f.png')
        }
         
}
      

        
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero ${genero} e idade: ${idade}`
        res.appendChild(img)

    }
}


       

