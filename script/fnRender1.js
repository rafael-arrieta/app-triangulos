//https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
function renderBlock012(obj){

    if (obj.ladoA-obj.ladoB<obj.ladoC && obj.ladoA+obj.ladoB>obj.ladoC)
        squaredA=(obj.ladoA*obj.ladoA).toFixed(2)
        squaredB=(obj.ladoB*obj.ladoB).toFixed(2)
        squaredC=(obj.ladoC*obj.ladoC).toFixed(2)
        dosBC=(-2*obj.ladoB*obj.ladoC).toFixed(2)
        dosAC=(-2*obj.ladoA*obj.ladoC).toFixed(2)
        restaAux1=(squaredA-squaredB-squaredC).toFixed(2)
        restaAux2=(squaredB-squaredA-squaredC).toFixed(2)
        divisionAux1=(restaAux1/dosBC).toFixed(3)
        divisionAux2=(restaAux2/dosAC).toFixed(3)
        resultado1 = calcularAcos(divisionAux1).toFixed(3)
        resultado2 = calcularAcos(divisionAux2).toFixed(3)
        resultado3 = (180 - resultado1 - resultado2).toFixed(3)
        let alfa = convertirSexagesimal(resultado1)
        let beta = convertirSexagesimal(resultado2)
        let gamma = convertirSexagesimal(resultado3)
        
        let block012=`<div class="interno-solucion">

        <p class="texto-solucion1">Teorema del coseno:</p>
        
        <p class="texto-solucion2">
        $$A^2 = B^2 + C^2 - 2.A.C.\\cos(\\alpha)$$
        $$${obj.ladoA}^2 = ${obj.ladoB}^2 + ${obj.ladoC}^2  - 2 \\cdot ${obj.ladoB} \\cdot ${obj.ladoC} \\cdot \\cos(\\alpha)$$
        $$${squaredA} = ${squaredB} + ${squaredC} ${dosBC} \\cdot \\cos(\\alpha)$$
        $$${squaredA} - ${squaredB} - ${squaredC} =  ${dosBC}.\\cos(\\alpha)$$
        $$ {${restaAux1} \\over ${dosBC}} =\\cos(\\alpha)$$
        $$ \\cos^{-1}(${divisionAux1})= \\alpha$$
        $$ \\alpha = ${resultado1}$$
        $$ \\alpha = ${alfa[0]} º ${alfa[1]} ' ${alfa[2]} "$$
        </p>

        <p class="texto-solucion1">Teorema del coseno:</p>
        <p class="texto-solucion2">
        $$A^2 = B^2 + C^2 - 2.A.C.\\cos(\\alpha)$$
        $$${obj.ladoB}^2 = ${obj.ladoA}^2 + ${obj.ladoC}^2  - 2 \\cdot ${obj.ladoA} \\cdot ${obj.ladoC} \\cdot \\cos(\\beta)$$
        $$${squaredB} = ${squaredA} + ${squaredC} ${dosAC} \\cdot \\cos(\\beta)$$
        $$${squaredB} - ${squaredA} - ${squaredC} =  ${dosAC}.\\cos(\\beta)$$
        $$ {${restaAux2} \\over ${dosAC}} =\\cos(\\beta)$$
        $$ \\cos^{-1}(${divisionAux2})= \\beta$$
        $$ \\beta = ${resultado2}$$
        $$ \\beta = ${beta[0]} º ${beta[1]} ' ${beta[2]} "$$
        </p>

        <p class="texto-solucion1">Ángulos internos:</p>
        <p class="texto-solucion2">
        $$ 180 = \\alpha + \\beta + \\gamma$$
        $$ \\gamma = 180 - \\alpha - \\beta$$
        $$ \\gamma = 180 - ${resultado1} - ${resultado2}$$
        $$ \\gamma = ${resultado3}$$
        $$ \\gamma = ${gamma[0]} º ${gamma[1]} ' ${gamma[2]} $$
        </p>
        </div>`
        
    return block012
}