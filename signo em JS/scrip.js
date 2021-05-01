function verificar() {
    
    var diaf = Number(document.getElementById('txtdia').value) // Id = # class = .
    var mesf = Number(document.getElementById('txtmes').value)
    var res = document.querySelector('div#res')
    var signo = ``
    var img = document.createElement('img')

    if(mesf == 1)
    {
        if(diaf >=1  && diaf < 21){
            var signo = `Capricórnio <br>` 
            img.setAttribute('src','img/capricornio.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Aquario <br>` 
            img.setAttribute('src','img/aquario.jpg')
        }
      
    }
    else if(mesf == 2){

        if(diaf >=1  && diaf <= 19){
            var signo = ` Aquario <br><br>`
            img.setAttribute('src','img/aquario.jpg')
        }
        else if(diaf >= 20 && diaf <29){
            var signo = `Peixes <br>` 
            img.setAttribute('src','img/peixes.jpg')
        }
    }
    else if(mesf == 3){

        if(diaf >=1  && diaf <= 20){
            var signo = `Peixes <br><br>`
            img.setAttribute('src','img/peixes.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Áries <br>` 
            img.setAttribute('src','img/aries.jpg')
            
        }
    }
    else if(mesf == 4){

        if(diaf >=1  && diaf < 20){
            var signo = `Aries <br><br>`
            img.setAttribute('src','img/aries.jpg')
        }
        else if(diaf >= 21 && diaf <30){
            var signo = `Touro <br>` 
            img.setAttribute('src','img/touro.jpg')
        }
    }
    else if(mesf == 5){

        if(diaf >=1  && diaf < 21){
            var signo = `Touro <br><br>`
            img.setAttribute('src','img/touro.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Gemeos <br>` 
            img.setAttribute('src','img/gemeos.jpg')
        }
    }
    else if(mesf == 6){

        if(diaf >=1  && diaf <= 20){
            var signo = `Gemeos <br><br>`
            img.setAttribute('src','img/gemeos.jpg')
        }
        else if(diaf >= 21 && diaf <31){
            var signo = `Câncer <br>` 
            img.setAttribute('src','img/cancer.jpg')
        }
    }
    else if(mesf == 7){

        if(diaf >=1  && diaf < 22){
            var signo = `Câncer <br><br>`
            img.setAttribute('src','img/cancer.jpg')
        }
        else if(diaf >= 22 && diaf <31){
            var signo = `Leão <br>` 
            img.setAttribute('src','img/leao.jpg')
        }
    }
    else if(mesf == 8){

        if(diaf >=1  && diaf < 23){
            var signo = `Leão <br><br>`
            img.setAttribute('src','img/leao.jpg')
        }
        else if(diaf >= 23 && diaf <31){
            var signo = `Virgem <br>` 
            img.setAttribute('src','img/virgem.jpg')
        }
    }
    else if(mesf == 9){

        if(diaf >=1  && diaf < 23){
            var signo = `Virgem <br><br>`
            img.setAttribute('src','img/virgem.jpg')
        }
        else if(diaf >= 23 && diaf <31){
            var signo = `Libra <br>` 
            img.setAttribute('src','img/libra.jpg')
        }
    }
    else if(mesf == 10){

        if(diaf >=1  && diaf < 23){
            var signo = `Libra <br><br>`
            img.setAttribute('src','img/libra.jpg')
        }
        else if(diaf >= 23 && diaf <31){
            var signo = `Escorpião <br>` 
            img.setAttribute('src','img/escorpiao.jpg')
        }
    }
    else if(mesf == 11){

        if(diaf >=1  && diaf < 22){
            var signo = `Escorpião <br><br>`
            img.setAttribute('src','img/escorpiao.jpg')
        }
        else if(diaf >= 22 && diaf <31){
            var signo = `Sagitario <br>` 
            img.setAttribute('src','img/sagitario.jpg')
        }
    }
    else if(mesf == 12){

        if(diaf >=1  && diaf < 22){
            var signo = `Sagitario <br><br>`
            img.setAttribute('src','img/sagitario.jpg')
        }
        else if(diaf >= 22 && diaf <31){
            var signo = `Capricórnio <br>` 
            img.setAttribute('src','img/capricornio.jpg')
        }
    }
 

    if(mesf > 12 || diaf > 31){
        res.innerHTML = `O Número não corresponde`
    }
    else{
        res.innerHTML = `Seu signo é : ${signo}` 
    }
    
    res.appendChild(img)

}