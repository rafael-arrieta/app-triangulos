let btnResolver = document.getElementById('btn-resolver');
let divRenderError = document.getElementById('render-error');
let divRenderSolucion = document.getElementById('render-solucion');

btnResolver.addEventListener('click', ()=>{
    removeTypos()
    let datos = estructuraDatos()
    removeCeros()
    datos = angleToDegree(datos)
    let codigo = codeToRender(datos);
    divRenderSolucion = renderSolution(codigo,datos);
});

function removeTypos(){
    let allInputs = document.getElementsByClassName('input-dato')
    for (let i = 0; i<allInputs.length; i++){
        allInputs[i].value=allInputs[i].value.replace(/[^0-9.]/gi, '')//expresion regular
        if (allInputs[i].value==='') allInputs[i].value=0
        allInputs[i].value=parseFloat(allInputs[i].value)
    }
    let clsGrado = document.getElementsByClassName('clsGrado')
    for (let i = 0; i<clsGrado.length; i++){
        if (clsGrado[i].value>179) clsGrado[i].value=0;
        clsGrado[i].value= parseInt(clsGrado[i].value)
    }
    let clsMinuto = document.getElementsByClassName('clsMinuto')
    for (let i = 0; i<clsMinuto.length; i++){
        if (clsMinuto[i].value>59) clsMinuto[i].value=0;
        clsMinuto[i].value= parseInt(clsMinuto[i].value)
    }
    let clsSegundo = document.getElementsByClassName('clsSegundo')
    for (let i = 0; i<clsMinuto.length; i++){
        if (clsSegundo[i].value>59.9) clsSegundo[i].value=0;
    }
}

function estructuraDatos(){
    let obj = {
        //15 elementos // 3 de cada...
        ladoA: document.getElementById('inputA-lado').value,
        ladoB: document.getElementById('inputB-lado').value,
        ladoC: document.getElementById('inputC-lado').value,
        gradA: document.getElementById('inputA-grad').value,
        minA: document.getElementById('inputA-min').value,
        segA: document.getElementById('inputA-seg').value,
        gradB: document.getElementById('inputB-grad').value,
        minB: document.getElementById('inputB-min').value,
        segB: document.getElementById('inputB-seg').value,
        gradC: document.getElementById('inputC-grad').value,
        minC: document.getElementById('inputC-min').value,
        segC: document.getElementById('inputC-seg').value,
        degreeA:'',
        degreeB:'',
        degreeC:'',
    }
    return obj;
};

function removeCeros(){
    let allInputs = document.getElementsByClassName('input-dato')
        for (let i = 0; i<allInputs.length; i++){
            if (allInputs[i].value==0) allInputs[i].value=''
        }
}

function angleToDegree(obj){
    obj.degreeA = toDegree(obj.gradA,obj.minA,obj.segA);
    obj.degreeB = toDegree(obj.gradB,obj.minB,obj.segB);
    obj.degreeC = toDegree(obj.gradC,obj.minC,obj.segC);
    obj.ladoA=parseFloat(obj.ladoA);
    obj.ladoB=parseFloat(obj.ladoB);
    obj.ladoC=parseFloat(obj.ladoC);
    return obj
}

function toDegree(grados,minutos,segundos){
        return parseFloat((parseFloat(grados)+(minutos/60)+(segundos/3600)).toFixed(3));
    }

function codeToRender(obj){
    let codigo = '';
    let arr = [
        obj.ladoA,
        obj.ladoB,
        obj.ladoC,
        obj.degreeA,
        obj.degreeB,
        obj.degreeC,
    ];
    for(let i = 0; i < arr.length; i++){
        if(codigo.length === 3) return codigo;
        if(arr[i] > 0) codigo += i;
    };
    return false;
};

function renderSolution(code,obj){
    if(code ==='012') divRenderSolucion.innerHTML = renderBlock012(obj);
    if (code === '013') divRenderSolucion.innerHTML = renderBlock013(obj);
}

function renderBlock012(obj){
    console.log(obj)
    let block012=`
    $$\\cos${obj.ladoA}$$
    $$\\frac{1}{\\sqrt{x^2 + 1}}$$
    
    `
    

    MathJax.typesetPromise()
    return block012
}