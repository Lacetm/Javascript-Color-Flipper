var cor = document.getElementById("painel")
cores = ["red", "blue", "green", "aqua", "grey","brown", "beige", "darkorchid", "limegreen", "magenta", "lavender"]

function checarCor (){
    





}

function trocarCor(){



}

function randomCor(){
    num = Math.random()*10
    num = Math.round(num)
    console.log(num)

    selectCor = cores[num]
    console.log(selectCor)

    cor.style.backgroundColor = selectCor
}