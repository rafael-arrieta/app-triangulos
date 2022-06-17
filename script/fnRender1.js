function renderBlockFalse(){
    let blockFalse=`<div class="interno-solucion">
        <p class="render-error">faltan datos</p>
        <p class="texto-solucion1"></p>
        </div>`
        return blockFalse
}

function printTrianguloNaranja(dibujo,lados){
    let trianguloNaranja = `
    <div class="interno-5">
        <p style="
            position: absolute;
            top: ${((dibujo[2]/2)-2)}px; 
            left:${((dibujo[0]/2)+15)}px;">${(lados[1][0])}</p>
        <p style="
            position: absolute;
            top: ${parseFloat(dibujo[2])+20}px; 
            left:150px;">${lados[2][0]}</p>
        <p style="
            position: absolute;
            top: ${((dibujo[2]/2)-2)}px; 
            left:${(parseFloat(dibujo[0])+parseFloat(dibujo[1]/2)+45)}px;">${lados[0][0]}</p>
        <div class="triangulo">    
            <div style="
            border-top: ${dibujo[2]}px solid rgb(240, 245, 245);
            border-right: ${dibujo[0]}px solid rgb(255, 187, 119);">
            </div>
            <div" 
            style="
            border-top: ${dibujo[2]}px solid rgb(240, 245, 245);
            border-left: ${dibujo[1]}px solid rgb(255, 187, 119);"></div>
        </div>
            <p style="padding-bottom: 5px;"></p>
        </div>
        <div class="div-resolver" style="margin-top: 15px;">
            <button id="rep" value="Print" class="btn-resolver btn_print">to ka me!</button>
        </div>
    </div>
    `
    return trianguloNaranja
}

function renderBlock012(obj){
    if (obj.ladoA-obj.ladoB<obj.ladoC && obj.ladoA+obj.ladoB>obj.ladoC &&
        obj.ladoA-obj.ladoC<obj.ladoB && obj.ladoA+obj.ladoC>obj.ladoB &&
        obj.ladoC-obj.ladoB<obj.ladoA && obj.ladoC+obj.ladoB>obj.ladoA){
            let squaredA=(obj.ladoA*obj.ladoA).toFixed(2)
            let squaredB=(obj.ladoB*obj.ladoB).toFixed(2)
            let squaredC=(obj.ladoC*obj.ladoC).toFixed(2)
            let dosBC=(-2*obj.ladoB*obj.ladoC).toFixed(2)
            let dosAC=(-2*obj.ladoA*obj.ladoC).toFixed(2)
            let restaAux1=(squaredA-squaredB-squaredC)
            let restaAux2=(squaredB-squaredA-squaredC)
            let divisionAux1=(restaAux1/dosBC)
            let divisionAux2=(restaAux2/dosAC)
            let resultado1 = calcularAcos(divisionAux1)
            let resultado2 = calcularAcos(divisionAux2)
            let resultado3 = (180 - resultado1 - resultado2)
            let alfa = convertirSexagesimal(resultado1)
            let beta = convertirSexagesimal(resultado2)
            let gamma = convertirSexagesimal(resultado3)
            let arrLados=[[obj.ladoA,resultado1],[obj.ladoB,resultado2],[obj.ladoC,resultado3]]
            arrLados=ordenarArray(arrLados)
            let arrDibujo = renderTriangulo(arrLados[2][0],arrLados[1][0],arrLados[0][1])
            let triangulo = printTrianguloNaranja(arrDibujo,arrLados)
            let block012=`
            <div class="interno-solucion" id="print-container">
                <p class="texto-solucion1">Teorema del coseno:</p>
                <p class="texto-solucion2">
                    $$A^2 = B^2 + C^2 - 2.A.C.\\cos(\\alpha)$$
                    $$${obj.ladoA}^2 = ${obj.ladoB}^2 + ${obj.ladoC}^2  - 2 \\cdot ${obj.ladoB} \\cdot ${obj.ladoC} \\cdot \\cos(\\alpha)$$
                    $$${squaredA} = ${squaredB} + ${squaredC} ${dosBC} \\cdot \\cos(\\alpha)$$
                    $$${squaredA} - ${squaredB} - ${squaredC} =  ${dosBC}.\\cos(\\alpha)$$
                    $$ {${restaAux1} \\over ${dosBC}} =\\cos(\\alpha)$$
                    $$ \\cos^{-1}(${(divisionAux1).toFixed(5)})= \\alpha$$
                    $$ \\alpha = ${(resultado1).toFixed(5)}$$
                    $$ \\alpha = ${alfa[0]} º ${alfa[1]} ' ${alfa[2]} "$$</p>
                <p class="texto-solucion1">Teorema del coseno:</p>
                <p class="texto-solucion2">
                    $$A^2 = B^2 + C^2 - 2.A.C.\\cos(\\alpha)$$
                    $$${obj.ladoB}^2 = ${obj.ladoA}^2 + ${obj.ladoC}^2  - 2 \\cdot ${obj.ladoA} \\cdot ${obj.ladoC} \\cdot \\cos(\\beta)$$
                    $$${squaredB} = ${squaredA} + ${squaredC} ${dosAC} \\cdot \\cos(\\beta)$$
                    $$${squaredB} - ${squaredA} - ${squaredC} =  ${dosAC}.\\cos(\\beta)$$
                    $$ {${restaAux2} \\over ${dosAC}} =\\cos(\\beta)$$
                    $$ \\cos^{-1}(${(divisionAux2.toFixed(5))})= \\beta$$
                    $$ \\beta = ${(resultado2.toFixed(5))}$$
                    $$ \\beta = ${beta[0]} º ${beta[1]} ' ${beta[2]} "$$</p>
                    <p class="texto-solucion1">Ángulos internos:</p>
                    <p class="texto-solucion2">
                    $$ 180 = \\alpha + \\beta + \\gamma$$
                    $$ \\gamma = 180 - \\alpha - \\beta$$
                    $$ \\gamma = 180 - ${(resultado1).toFixed(3)} - ${(resultado2).toFixed(3)}$$
                    $$ \\gamma = ${(resultado3).toFixed(3)}$$
                    $$ \\gamma = ${gamma[0]}º${gamma[1]}'${gamma[2]} $$</p>
                ${triangulo}
            </div>
            `    
        return block012
    }else{
        let block012=`<div class="interno-solucion">
        <p class="render-error">Medida de lados incorrecta por</p>
        <p class="render-error">condición de existencia de un triángulo</p>
        <p class="texto-solucion1"></p>
        </div>`
        return block012
    }
}

function renderBlock013(obj){

    let senoAlfa = calcularSin(obj.degreeA)
    
    let divisionAux1 = (obj.ladoA/senoAlfa)
    let divisionAux2=(obj.ladoB/divisionAux1) 
    let resultado1 = calcularAsin(divisionAux2)
    let resultado2 = (180 - resultado1 - obj.degreeA)
    let senoGamma = calcularSin(resultado2);
    let resultadoC = (divisionAux1*senoGamma);
    let beta = convertirSexagesimal(resultado1)
    let gamma = convertirSexagesimal(resultado2)

    let arrLados=[[obj.ladoA,obj.degreeA],[obj.ladoB,resultado1],[resultadoC,resultado2]]
    arrLados=ordenarArray(arrLados)
    let arrDibujo = renderTriangulo(arrLados[2][0],arrLados[1][0],arrLados[0][1])
    let triangulo = printTrianguloNaranja(arrDibujo,arrLados)

    if( divisionAux2>0 && divisionAux2<1){
        let block013=`<div class="interno-solucion">
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                $$\\frac{A}{\sen(\\alpha)}=\\frac{B}{\sen(\\beta)}$$
                $$\\frac{${obj.ladoA}}{\sen(${(obj.degreeA).toFixed(3)})}=\\frac{${obj.ladoB}}{\sen(\\beta)}$$
                $$\\frac{${obj.ladoA}}{(${(senoAlfa).toFixed(3)})}=\\frac{${obj.ladoB}}{\sen(\\beta)}$$
                $$${(divisionAux1).toFixed(3)}\\cdot \sen (\\beta)=${obj.ladoB}$$
                $$\sen (\\beta) = \\frac{${obj.ladoB}}{(${(divisionAux1).toFixed(3)})}$$
                $$\\beta = \sen^{-1}(${(divisionAux2).toFixed(3)})$$
                $$\\beta = ${(resultado1).toFixed(3)}$$
                $$ \\beta = ${beta[0]} º ${beta[1]} ' ${beta[2]} "$$</p>
            <p class="texto-solucion1">Ángulos internos:</p>
            <p class="texto-solucion2">
                $$ 180 = \\alpha + \\beta + \\gamma$$
                $$ \\gamma = 180 - \\alpha - \\beta$$
                $$ \\gamma = 180 - ${(resultado1).toFixed(3)} - ${(obj.degreeA).toFixed(3)}$$
                $$ \\gamma = ${(resultado2).toFixed(3)}$$
                $$ \\gamma = ${gamma[0]}º${gamma[1]}'${gamma[2]} $$</p>
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                    $$\\frac{A}{\sen(\\alpha)}=\\frac{C}{\sen(\\gamma)}$$
                    $$\\frac{${obj.ladoA}}{\sen(${(obj.degreeA).toFixed(3)})}=\\frac{C}{\sen(${resultado2.toFixed(3)})}$$
                    $$\\frac{${obj.ladoA}}{(${(senoAlfa).toFixed(3)})}=\\frac{C}{(${senoGamma.toFixed(3)})}$$
                    $$${(divisionAux1).toFixed(3)}\\cdot (${senoGamma.toFixed(3)}) = C $$
                    $$ C = ${resultadoC.toFixed(3)} $$
                ${triangulo}
            </div>
        `
        return block013
    }else{
        let block013=`<div class="interno-solucion">
        <p class="render-error">Medida de lados incorrecta por</p>
        <p class="render-error">condición de existencia de un triángulo</p>
        <p class="texto-solucion1"> Error en:</p>
        <p class="texto-solucion2">
        $$\\beta = \sen^{-1} \\left(B \\cdot \\frac{\sen(\\alpha)}{A}\\right)$$
        $$ 0 < \\left( B \\cdot \\frac{\sen(\\alpha)}{A}\\right) < 1$$
        <p class="texto-solucion1"></p>
        <p class="texto-solucion2">
        
        </div>`
        return block013
    //

        
    }
}