let numeroGerado = Math.floor(Math.random() * 100)
let res = document.getElementById('res')

function calcular(){
    let palpite = prompt('Qual é o seu palpite?')

    if(palpite > numeroGerado && palpite != numeroGerado){
        res.innerHTML += (`<p>Você falou ${palpite}. Meu número é <Strong>MENOR!</Strong></p>`)
    }else if(palpite < numeroGerado && palpite != numeroGerado){
        res.innerHTML += (`<p>Você falou ${palpite}. Meu número é <Strong>MAIOR!</Strong></p>`)
    }else{
        res.innerHTML += (`<p><Strong>PARABÉNS!</Strong> Você acertou! Eu tinha sorteado o valor ${numeroGerado}!</p>`)
    }
}