let btnResolver = document.getElementById('btn-resolver');
let divRenderError = document.getElementById('render-error');
let divRenderSolucion = document.getElementById('render-solucion');


btnResolver.addEventListener('click', ()=>{
    datos = estructuraDatos()
    datos = validarString(datos)
    datos.degreeA = aDecimal(datos.gradA,datos.minA,datos.segA);
    datos.degreeB = aDecimal(datos.gradB,datos.minB,datos.segB);
    datos.degreeC = aDecimal(datos.gradC,datos.minC,datos.segC);
    let codigo = generarCodigoRender(datos,1)
    console.log(codigo)
    
});

function estructuraDatos(){
    let datos = {
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

    return datos;
};

function aDecimal(grados,minutos,segundos){
    if(grados-parseInt(grados)===0 && minutos-parseInt(minutos) === 0){
        if (grados>=0 && grados<180){
            if (minutos>=0 && minutos<60){
                if(segundos>=0 && segundos<60){
                    return parseFloat((parseFloat(grados)+(minutos/60)+(segundos/3600)).toFixed(3));
        }}}}
    
    return false

}

function validarString(obj){
    for (let property in obj) {
        if (obj[property].length ===0){
            obj[property] = 0;
        }else if(isNaN(obj[property])||obj[property]==Math.E){
            obj[property]='error';
            divRenderError.innerHTML=`hay un error en un campo`;
        }else{
            obj[property] = parseFloat(obj[property]);
        }
    }
    //este deberia retornar datos o terminar proceso
    //return false???
    return datos
}

function generarCodigoRender(obj){
    let codigo = '';
    let arr = [
        obj.ladoA,
        obj.ladoB,
        obj.ladoC,
        obj.degreeA,
        obj.degreeB,
        obj.degreeC
    ];
    for(let i = 0; i < arr.length; i++){
        if(codigo.length === 3) return codigo;
        if(arr[i] > 0) codigo += i;
    };
    divRenderError.innerHTML=`faltan datos`
    return false;
};

