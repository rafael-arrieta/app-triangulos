let btnResolver = document.getElementById('btn-resolver');
let divRenderError = document.getElementById('render-error');

btnResolver.addEventListener('click', ()=>{
    datos = estructuraDatos()
    datos = validarString(datos)
});

function estructuraDatos(){

    let datos = {
        ladoA: document.getElementById('inputA-lado').value,
        ladoB: document.getElementById('inputB-lado').value,
        ladoC: document.getElementById('inputC-lado').value,
        
        gradA: document.getElementById('inputA-grad').value,
        minA: document.getElementById('inputA-min').value,
        segA: document.getElementById('inputA-seg').value,
        //degreeA:'',
    
        gradB: document.getElementById('inputB-grad').value,
        minB: document.getElementById('inputB-min').value,
        segB: document.getElementById('inputB-seg').value,
        //degreeB:'',
    
        gradC: document.getElementById('inputC-grad').value,
        minC: document.getElementById('inputC-min').value,
        segC: document.getElementById('inputC-seg').value,
        //degreeC:'',
    };
    
    // datos.degreeA = aDecimal(datos.gradA,datos.minA,datos.segA);
    // datos.degreeB = aDecimal(datos.gradB,datos.minB,datos.segB);
    // datos.degreeC = aDecimal(datos.gradC,datos.minC,datos.segC);
    return datos;

};

function aDecimal(grados, minutos, segundos){
    return parseFloat((grados+(minutos/60)+(segundos/3600)).toFixed(3));
};

function validarString(obj){
    for (const property in obj) {
        if (obj[property].length ===0) {
            obj[property] = 0;
        }else if(isNaN(obj[property])) {
            
            divRenderError.innerHTML=`
            hay un error o faltan datos
            `
            obj[property]=NaN;
        }else{
            obj[property] = parseFloat(obj[property]);
        }
    };
    console.log(obj)
};
