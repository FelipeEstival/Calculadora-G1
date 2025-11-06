

const numero_nota = document.getElementById('nota_usuario')

function calcular(){
    
    nota_necessaria = (18 - Number(numero_nota.value)) / 2;

    const p = document.getElementById('resultado')
    p.textContent = `A nota para passar é ${nota_necessaria} na G2`
}


