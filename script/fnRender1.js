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
            <button id="rep" value="Print" class="btn-resolver btn_print">exportar a PDF!</button>
        </div>
    </div>
    `
    return trianguloNaranja
}

function renderBlock012(obj){
    if (obj.ladoA-obj.ladoB<obj.ladoC && obj.ladoA+obj.ladoB>obj.ladoC &&
        obj.ladoA-obj.ladoC<obj.ladoB && obj.ladoA+obj.ladoC>obj.ladoB &&
        obj.ladoC-obj.ladoB<obj.ladoA && obj.ladoC+obj.ladoB>obj.ladoA){
            let squaredA=(obj.ladoA*obj.ladoA).toFixed(2);
            let squaredB=(obj.ladoB*obj.ladoB).toFixed(2);
            let squaredC=(obj.ladoC*obj.ladoC).toFixed(2);
            let dosBC=(-2*obj.ladoB*obj.ladoC).toFixed(2);
            let dosAC=(-2*obj.ladoA*obj.ladoC).toFixed(2);
            let restaAux1=(squaredA-squaredB-squaredC);
            let restaAux2=(squaredB-squaredA-squaredC);
            let divisionAux1=(restaAux1/dosBC);
            let divisionAux2=(restaAux2/dosAC);
            let resultado1 = calcularAcos(divisionAux1);
            let resultado2 = calcularAcos(divisionAux2);
            let resultado3 = (180 - resultado1 - resultado2);
            let alfa = convertirSexagesimal(resultado1);
            let beta = convertirSexagesimal(resultado2);
            let gamma = convertirSexagesimal(resultado3);
            let arrLados=[[obj.ladoA,resultado1],[obj.ladoB,resultado2],[obj.ladoC,resultado3]];
            arrLados=ordenarArray(arrLados);
            let arrDibujo = renderTriangulo(arrLados[2][0],arrLados[1][0],arrLados[0][1]);
            let triangulo = printTrianguloNaranja(arrDibujo,arrLados);
            let block012=`
            <div class="interno-solucion" id="print-container">
                <p class="texto-solucion1">Teorema del coseno:</p>
                <p class="texto-solucion2">
                    $$A^2 = B^2 + C^2 - 2.A.C.\\cos(\\alpha)$$
                    $$${obj.ladoA}^2 = ${obj.ladoB}^2 + ${obj.ladoC}^2  - 2 \\cdot ${obj.ladoB} \\cdot ${obj.ladoC} \\cdot \\cos(\\alpha)$$
                    $$${squaredA} = ${squaredB} + ${squaredC} ${dosBC} \\cdot \\cos(\\alpha)$$
                    $$${squaredA} - ${squaredB} - ${squaredC} =  ${dosBC}.\\cos(\\alpha)$$
                    $$ {${restaAux1.toFixed(3)} \\over ${dosBC}} =\\cos(\\alpha)$$
                    $$ \\cos^{-1}(${(divisionAux1).toFixed(3)})= \\alpha$$
                    $$ \\alpha = ${(resultado1).toFixed(3)}$$
                    $$ \\alpha = ${alfa[0]}\\hspace{1px}º\\hspace{4px}${alfa[1]}\\hspace{1px}'\\hspace{4px}${alfa[2]}\\hspace{2px}''$$</p>
                <p class="texto-solucion1">Teorema del coseno:</p>
                <p class="texto-solucion2">
                    $$A^2 = B^2 + C^2 - 2.A.C.\\cos(\\alpha)$$
                    $$${obj.ladoB}^2 = ${obj.ladoA}^2 + ${obj.ladoC}^2  - 2 \\cdot ${obj.ladoA} \\cdot ${obj.ladoC} \\cdot \\cos(\\beta)$$
                    $$${squaredB} = ${squaredA} + ${squaredC} ${dosAC} \\cdot \\cos(\\beta)$$
                    $$${squaredB} - ${squaredA} - ${squaredC} =  ${dosAC}.\\cos(\\beta)$$
                    $$ {${restaAux2} \\over ${dosAC}} =\\cos(\\beta)$$
                    $$ \\cos^{-1}(${(divisionAux2.toFixed(3))})= \\beta$$
                    $$ \\beta = ${(resultado2.toFixed(3))}$$
                    $$ \\beta = ${beta[0]}\\hspace{1px}º\\hspace{4px}${beta[1]}\\hspace{1px}'\\hspace{4px}${beta[2]}\\hspace{2px}''$$</p>
                    <p class="texto-solucion1">Ángulos internos:</p>
                    <p class="texto-solucion2">
                    $$ 180 = \\alpha + \\beta + \\gamma$$
                    $$ \\gamma = 180 - \\alpha - \\beta$$
                    $$ \\gamma = 180 - ${(resultado1).toFixed(3)} - ${(resultado2).toFixed(3)}$$
                    $$ \\gamma = ${(resultado3).toFixed(3)}$$
                    $$ \\gamma = ${gamma[0]}\\hspace{1px}º\\hspace{4px}${gamma[1]}\\hspace{1px}'\\hspace{4px}${gamma[2]}\\hspace{2px}''$$</p>
                <p class="texto-solucion1"></p>
                ${triangulo}
            </div>
            `    
        return block012
    }else{
        let block012=`<div class="interno-solucion">
        <p class="render-error">Medida de lados incorrecta por</p>
        <p class="render-error">condición de existencia de un triángulo</p>

        <p class="texto-solucion2">
        $$ |B - C \\hspace{4px}| < A < B + C $$
        $$ |A - C \\hspace{4px}|< B < A + C $$
        $$ |A - B \\hspace{4px}|< C < A + B $$

        <p class="texto-solucion1"></p>
        </div>`
        return block012
    }
}

function renderBlock013(obj){

    let senoAlfa = calcularSin(obj.degreeA);
    let divisionAux1 = (obj.ladoA/senoAlfa);
    let divisionAux2=(obj.ladoB/divisionAux1);
    let resultado1 = calcularAsin(divisionAux2);
    let resultado2 = (180 - resultado1 - obj.degreeA);
    let senoGamma = calcularSin(resultado2);
    let resultadoC = (divisionAux1*senoGamma);
    let beta = convertirSexagesimal(resultado1);
    let gamma = convertirSexagesimal(resultado2);
    let arrLados=[[obj.ladoA,obj.degreeA],[obj.ladoB,resultado1],[resultadoC,resultado2]];
    arrLados=ordenarArray(arrLados);
    let arrDibujo = renderTriangulo(arrLados[2][0],arrLados[1][0],arrLados[0][1]);
    let triangulo = printTrianguloNaranja(arrDibujo,arrLados);

    if( divisionAux2>0 && divisionAux2<1){
        let block013=`<div class="interno-solucion" id="print-container">
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                $$\\frac{A}{\sen(\\alpha)}=\\frac{B}{\sen(\\beta)}$$
                $$\\frac{${obj.ladoA}}{\sen(${(obj.degreeA).toFixed(3)})}=\\frac{${obj.ladoB}}{\sen(\\beta)}$$
                $$\\frac{${obj.ladoA}}{(${(senoAlfa).toFixed(3)})}=\\frac{${obj.ladoB}}{\sen(\\beta)}$$
                $$${(divisionAux1).toFixed(3)}\\cdot \sen (\\beta)=${obj.ladoB}$$
                $$\sen (\\beta) = \\frac{${obj.ladoB}}{(${(divisionAux1).toFixed(3)})}$$
                $$\\beta = \sen^{-1}(${(divisionAux2).toFixed(3)})$$
                $$\\beta = ${(resultado1).toFixed(3)}$$
                $$ \\beta = ${beta[0]}\\hspace{1px}º\\hspace{4px}${beta[1]}\\hspace{1px}'\\hspace{4px}${beta[2]}\\hspace{2px}''$$</p>
            <p class="texto-solucion1">Ángulos internos:</p>
            <p class="texto-solucion2">
                $$ 180 = \\alpha + \\beta + \\gamma$$
                $$ \\gamma = 180 - \\alpha - \\beta$$
                $$ \\gamma = 180 - ${(resultado1).toFixed(3)} - ${(obj.degreeA).toFixed(3)}$$
                $$ \\gamma = ${(resultado2).toFixed(3)}$$
                $$ \\gamma = ${gamma[0]}\\hspace{1px}º\\hspace{4px}${gamma[1]}\\hspace{1px}'\\hspace{4px}${gamma[2]}\\hspace{2px}''$$</p>
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                    $$\\frac{A}{\sen(\\alpha)}=\\frac{C}{\sen(\\gamma)}$$
                    $$\\frac{${obj.ladoA}}{\sen(${(obj.degreeA).toFixed(3)})}=\\frac{C}{\sen(${resultado2.toFixed(3)})}$$
                    $$\\frac{${obj.ladoA}}{(${(senoAlfa).toFixed(3)})}=\\frac{C}{(${senoGamma.toFixed(3)})}$$
                    $$${(divisionAux1).toFixed(3)}\\cdot (${senoGamma.toFixed(3)}) = C $$
                    $$ C = ${resultadoC.toFixed(3)} $$</p>
                ${triangulo}
            <p class="texto-solucion1"></p>
            </div>`
        return block013
    }else{
        let block013=`<div class="interno-solucion">
        <p class="render-error">Medida de lados incorrecta por</p>
        <p class="render-error">condición de existencia de un triángulo</p>
        <p class="texto-solucion2">
        $$\\beta = \sen^{-1} \\left(B \\cdot \\frac{\sen(\\alpha)}{A}\\right)$$
        $$ 0 < \\left( B \\cdot \\frac{\sen(\\alpha)}{A}\\right) < 1$$
        </p>
        <p class="texto-solucion1"></p>
        </div>`
        return block013  
    }
}

function renderBlock014(obj){
    let senoBeta = calcularSin(obj.degreeB);
    let divisionAux1 = (obj.ladoB/senoBeta);
    let divisionAux2=(obj.ladoA/divisionAux1);
    let resultado1 = calcularAsin(divisionAux2);
    let resultado2 = (180 - resultado1 - obj.degreeB);
    let senoAlfa = calcularSin(resultado1);
    let senoGamma = calcularSin(resultado2);
    let resultadoC = (divisionAux1*senoGamma);
    let alfa = convertirSexagesimal(resultado1);
    let beta = convertirSexagesimal(obj.degreeB);
    let gamma = convertirSexagesimal(resultado2);
    let arrLados=[[obj.ladoA,resultado1],[obj.ladoB,obj.degreeB],[resultadoC,resultado2]];
    arrLados=ordenarArray(arrLados);
    let arrDibujo = renderTriangulo(arrLados[2][0],arrLados[1][0],arrLados[0][1]);
    let triangulo = printTrianguloNaranja(arrDibujo,arrLados);

    if( divisionAux2>0 && divisionAux2<1){
        let block014=`<div class="interno-solucion" id="print-container">
            <p class="texto-solucion1">Datos:</p>
            <p class="texto-solucion2">
                $$ Lado\\hspace{1px} A:\\hspace{1px} ${obj.ladoA}$$
                $$ Lado\\hspace{1px} B:\\hspace{1px} ${obj.ladoB}$$
                $$ Ángulo\\hspace{3px} \\beta:\\hspace{1px} ${beta[0]}\\hspace{1px}º\\hspace{4px}${beta[1]}\\hspace{1px}'\\hspace{4px}${beta[2]}\\hspace{2px}''$$</p>
                
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                $$\\frac{A}{\sen(\\alpha)}=\\frac{B}{\sen(\\beta)}$$
                $$\\frac{${obj.ladoA}}{\sen(\\alpha)}=\\frac{${obj.ladoB}}{\sen(${(obj.degreeB).toFixed(3)})}$$
                $$\\frac{${obj.ladoA}}{\sen(\\alpha)}=\\frac{${obj.ladoB}}{(${senoBeta.toFixed(3)})}$$
                $$${obj.ladoA}=(${divisionAux1.toFixed(3)})\\cdot \sen (\\alpha)$$
                $$\\frac{${obj.ladoA}}{(${divisionAux1.toFixed(3)})} = \sen (\\alpha)$$
                $$(${divisionAux2.toFixed(3)}) = \sen (\\alpha)$$
                $$\sen^{-1}(${divisionAux2.toFixed(3)}) = \\alpha$$
                $$\\alpha = ${(resultado1).toFixed(3)}$$
                $$ \\alpha = ${alfa[0]}\\hspace{1px}º\\hspace{4px}${alfa[1]}\\hspace{1px}'\\hspace{4px}${alfa[2]}\\hspace{2px}''$$</p>
            <p class="texto-solucion1">Ángulos internos:</p>
            <p class="texto-solucion2">
                $$ 180 = \\alpha + \\beta + \\gamma$$
                $$ \\gamma = 180 - \\alpha - \\beta$$
                $$ \\gamma = 180 - ${(resultado1).toFixed(3)} - ${(obj.degreeB).toFixed(3)}$$
                $$ \\gamma = ${(resultado2).toFixed(3)}$$
                $$ \\gamma = ${gamma[0]}\\hspace{1px}º\\hspace{4px}${gamma[1]}\\hspace{1px}'\\hspace{4px}${gamma[2]}\\hspace{2px}''$$</p>
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                $$\\frac{A}{\sen(\\alpha)}=\\frac{C}{\sen(\\gamma)}$$
                $$\\frac{${obj.ladoA}}{\sen(${(resultado1).toFixed(3)})}=\\frac{C}{\sen(${resultado2.toFixed(3)})}$$
                $$\\frac{${obj.ladoA}}{(${(senoAlfa).toFixed(3)})}=\\frac{C}{(${senoGamma.toFixed(3)})}$$
                $$${(divisionAux1).toFixed(3)}\\cdot(${senoGamma.toFixed(3)}) = C $$
                $$C=${resultadoC.toFixed(3)}$$</p>
            <p class="texto-solucion1"></p>
            ${triangulo}
        </div>
        `
        return block014
    }else{
        let block014=`<div class="interno-solucion">
        <p class="render-error">Medida de lados incorrecta por</p>
        <p class="render-error">condición de existencia de un triángulo</p>
        <p class="texto-solucion2">
        $$\\alpha = \sen^{-1} \\left(A \\cdot \\frac{\sen(\\beta)}{B}\\right)$$
        $$ 0 < \\left( A \\cdot \\frac{\sen(\\beta)}{B}\\right) < 1$$
        </p>
        <p class="texto-solucion1"></p>
        </div>`
        return block014  
    }
}

function renderBlock015(obj){
            let squaredA=(obj.ladoA*obj.ladoA).toFixed(2);
            let squaredB=(obj.ladoB*obj.ladoB).toFixed(2);
            let dosAB=(-2*obj.ladoA*obj.ladoB).toFixed(2);
            let cosenoGamma = calcularCos(obj.degreeC).toFixed(9);
            let multiplicacionAux1 = (dosAB*cosenoGamma);
            let sumaAux1 = parseFloat(squaredA)+parseFloat(squaredB)+parseFloat(multiplicacionAux1);
            let resultado1 = Math.sqrt(sumaAux1);
            let squaredC=(resultado1*resultado1).toFixed(2);
            let dosBC = (-2*resultado1*obj.ladoB).toFixed(2);
            let restaAux1=(squaredA-squaredB-squaredC);
            let divisionAux1=(restaAux1/dosBC);
            let resultado2 = calcularAcos(divisionAux1);
            let resultado3 = (180 - obj.degreeC - resultado2);
            let alfa = convertirSexagesimal(resultado2);
            let beta = convertirSexagesimal(resultado3);
            let gamma = convertirSexagesimal(obj.degreeC);
            let arrLados=[[obj.ladoA,resultado2],[obj.ladoB,resultado3],[resultado1,obj.degreeC]];
            arrLados=ordenarArray(arrLados);
            let arrDibujo = renderTriangulo(arrLados[2][0],arrLados[1][0],arrLados[0][1]);
            let triangulo = printTrianguloNaranja(arrDibujo,arrLados);
            let block015=`
            <div class="interno-solucion" id="print-container">
                <p class="texto-solucion1">Datos:</p>
                <p class="texto-solucion2">
                    $$ Lado\\hspace{1px} A:\\hspace{1px} ${obj.ladoA}$$
                    $$ Lado\\hspace{1px} B:\\hspace{1px} ${obj.ladoB}$$
                    $$ Ángulo\\hspace{3px} \\gamma:\\hspace{1px} ${gamma[0]}\\hspace{1px}º\\hspace{4px}${gamma[1]}\\hspace{1px}'\\hspace{4px}${gamma[2]}\\hspace{2px}''$$</p>
                <p class="texto-solucion1">Teorema del coseno:</p>
                <p class="texto-solucion2">
                    $$C^2 = A^2 + B^2 - 2.A.B.\\cos(\\gamma)$$
                    $$C^2 = ${obj.ladoA}^2 + ${obj.ladoB}^2  - 2 \\cdot ${obj.ladoA} \\cdot ${obj.ladoB} \\cdot \\cos(${obj.degreeC})$$
                    $$C^2 = ${squaredA} + ${squaredB} ${dosAB} \\cdot${(parseFloat(cosenoGamma)).toFixed(3)}$$
                    $$C^2 = ${squaredA} + ${squaredB} ${multiplicacionAux1.toFixed(3)}$$
                    $$C^2 = ${sumaAux1.toFixed(3)}$$
                    $$C = \\sqrt{${sumaAux1.toFixed(3)}}$$
                    $$C = ${resultado1.toFixed(3)}$$</p>
                <p class="texto-solucion1">Teorema del coseno:</p>
                <p class="texto-solucion2">
                    $$A^2 = B^2 + C^2 - 2.A.C.\\cos(\\alpha)$$
                    $$${obj.ladoA}^2 = ${obj.ladoB}^2 + ${resultado1.toFixed(3)}^2  - 2 \\cdot ${obj.ladoB} \\cdot ${resultado1.toFixed(3)} \\cdot \\cos(\\alpha)$$
                    $$${squaredA} = ${squaredB} + ${squaredC} ${dosBC} \\cdot \\cos(\\alpha)$$
                    $$${squaredA} - ${squaredB} - ${squaredC} =  ${dosBC}.\\cos(\\alpha)$$
                    $$ {${restaAux1} \\over ${dosBC}} =\\cos(\\alpha)$$
                    $$ \\cos^{-1}(${(divisionAux1).toFixed(3)})= \\alpha$$
                    $$ \\alpha = ${(resultado2).toFixed(3)}$$
                    $$ \\alpha = ${alfa[0]}\\hspace{1px}º\\hspace{4px}${alfa[1]}\\hspace{1px}'\\hspace{4px}${alfa[2]}\\hspace{2px}''$$</p>
                <p class="texto-solucion1">Ángulos internos:</p>
                        <p class="texto-solucion2">
                        $$ 180 = \\alpha + \\beta + \\gamma$$
                        $$ \\beta = 180 - \\alpha - \\beta$$
                        $$ \\beta = 180 - ${(resultado1).toFixed(3)} - ${(resultado2).toFixed(3)}$$
                        $$ \\beta = ${(resultado3).toFixed(3)}$$
                        $$ \\beta = ${beta[0]}\\hspace{1px}º\\hspace{4px}${beta[1]}\\hspace{1px}'\\hspace{4px}${beta[2]}\\hspace{2px}''$$</p>
                <p class="texto-solucion1"></p>
                ${triangulo}   
            </div>
            `    
        return block015;   
}

function renderBlock023(obj){

    let senoAlfa = calcularSin(obj.degreeA);
    let divisionAux1 = (obj.ladoA/senoAlfa);
    let divisionAux2=(obj.ladoC/divisionAux1);
    let resultado1 = calcularAsin(divisionAux2);
    let resultado2 = (180 - resultado1 - obj.degreeA);
    let senoGamma = calcularSin(resultado2);
    let resultadoB = (divisionAux1*senoGamma);
    let alfa = convertirSexagesimal(obj.degreeA);
    let gamma = convertirSexagesimal(resultado1);
    let beta = convertirSexagesimal(resultado2);
    let arrLados=[[obj.ladoA,obj.degreeA],[obj.ladoC,resultado1],[resultadoB,resultado2]];
    arrLados=ordenarArray(arrLados);
    let arrDibujo = renderTriangulo(arrLados[2][0],arrLados[1][0],arrLados[0][1]);
    let triangulo = printTrianguloNaranja(arrDibujo,arrLados);

    if( divisionAux2>0 && divisionAux2<1){
        let block013=`<div class="interno-solucion" id="print-container">
        <p class="texto-solucion1">Datos:</p>
        <p class="texto-solucion2">
            $$ Lado\\hspace{1px} A:\\hspace{1px} ${obj.ladoA}$$
            $$ Lado\\hspace{1px} C:\\hspace{1px} ${obj.ladoC}$$
            $$ Ángulo\\hspace{3px} \\alpha:\\hspace{1px} ${alfa[0]}\\hspace{1px}º\\hspace{4px}${alfa[1]}\\hspace{1px}'\\hspace{4px}${alfa[2]}\\hspace{2px}''$$</p>
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                $$\\frac{A}{\sen(\\alpha)}=\\frac{C}{\sen(\\gamma)}$$
                $$\\frac{${obj.ladoA}}{\sen(${(obj.degreeA).toFixed(3)})}=\\frac{${obj.ladoC}}{\sen(\\gamma)}$$
                $$\\frac{${obj.ladoA}}{(${(senoAlfa).toFixed(3)})}=\\frac{${obj.ladoC}}{\sen(\\gamma)}$$
                $$${(divisionAux1).toFixed(3)}\\cdot \sen (\\gamma)=${obj.ladoC}$$
                $$\sen (\\gamma) = \\frac{${obj.ladoC}}{(${(divisionAux1).toFixed(3)})}$$
                $$\\gamma = \sen^{-1}(${(divisionAux2).toFixed(3)})$$
                $$\\gamma = ${(resultado1).toFixed(3)}$$
                $$ \\gamma = ${gamma[0]}\\hspace{1px}º\\hspace{4px}${gamma[1]}\\hspace{1px}'\\hspace{4px}${gamma[2]}\\hspace{2px}''$$</p>
            <p class="texto-solucion1">Ángulos internos:</p>
            <p class="texto-solucion2">
                $$ 180 = \\alpha + \\beta + \\gamma$$
                $$ \\beta = 180 - \\alpha - \\gamma$$
                $$ \\beta = 180 - ${(resultado1).toFixed(3)} - ${(obj.degreeA).toFixed(3)}$$
                $$ \\beta = ${(resultado2).toFixed(3)}$$
                $$ \\beta = ${beta[0]}\\hspace{1px}º\\hspace{4px}${beta[1]}\\hspace{1px}'\\hspace{4px}${beta[2]}\\hspace{2px}''$$</p>
            <p class="texto-solucion1">Teorema del seno:</p>
            <p class="texto-solucion2">
                    $$\\frac{A}{\sen(\\alpha)}=\\frac{B}{\sen(\\beta)}$$
                    $$\\frac{${obj.ladoA}}{\sen(${(obj.degreeA).toFixed(3)})}=\\frac{B}{\sen(${resultado2.toFixed(3)})}$$
                    $$\\frac{${obj.ladoA}}{(${(senoAlfa).toFixed(3)})}=\\frac{B}{(${senoGamma.toFixed(3)})}$$
                    $$${(divisionAux1).toFixed(3)}\\cdot (${senoGamma.toFixed(3)}) = B $$
                    $$ B = ${resultadoB.toFixed(3)} $$</p>
                ${triangulo}
            <p class="texto-solucion1"></p>
            </div>`
        return block013
    }else{
        let block013=`<div class="interno-solucion">
        <p class="render-error">Medida de lados incorrecta por</p>
        <p class="render-error">condición de existencia de un triángulo</p>
        <p class="texto-solucion2">
        $$\\beta = \sen^{-1} \\left(B \\cdot \\frac{\sen(\\alpha)}{A}\\right)$$
        $$ 0 < \\left( B \\cdot \\frac{\sen(\\alpha)}{A}\\right) < 1$$
        </p>
        <p class="texto-solucion1"></p>
        </div>`
        return block013  
    }
}