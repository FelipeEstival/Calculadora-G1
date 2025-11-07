

const numero_nota = document.getElementById('nota_usuario')

function calcular(){
    if (numero_nota.value > 10) {
        alert("NÃO É POSSÍVEL NOTA ACIMA DE 10")
    }
    else {
        nota_necessaria = (18 - Number(numero_nota.value)) / 2;

        const p = document.getElementById('resultado')
        p.textContent = `A nota necessária para passar é ${nota_necessaria}`
    }
}



