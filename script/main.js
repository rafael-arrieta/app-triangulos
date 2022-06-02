let btnResolver = document.getElementById('btn-resolver');


btnResolver.addEventListener('click', ()=>{
    
    let datos= almacenarDatos();
    
    
});

function almacenarDatos(){
    
    let datos = {
        ladoA: parseFloat(document.getElementById('inputA-lado').value),
        ladoB: parseFloat(document.getElementById('inputB-lado').value),
        ladoC: parseFloat(document.getElementById('inputC-lado').value),
        
        gradA: parseFloat(document.getElementById('inputA-grad').value),
        minA: parseFloat(document.getElementById('inputA-min').value),
        segA: parseFloat(document.getElementById('inputA-seg').value),
        degreeA:'',

        gradB: parseFloat(document.getElementById('inputB-grad').value),
        minB: parseFloat(document.getElementById('inputB-min').value),
        segB: parseFloat(document.getElementById('inputB-seg').value),
        degreeB:'',

        gradC: parseFloat(document.getElementById('inputC-grad').value),
        minC: parseFloat(document.getElementById('inputC-min').value),
        segC: parseFloat(document.getElementById('inputC-seg').value),
        degreeC:'',
    };

    datos.degreeA = aDecimal(datos.gradA,datos.minA,datos.segA);
    datos.degreeB = aDecimal(datos.gradB,datos.minB,datos.segB);
    datos.degreeC = aDecimal(datos.gradC,datos.minC,datos.segC);
    return datos;
};

function aDecimal(grados, minutos, segundos){
    return parseFloat((grados+(minutos/60)+(segundos/3600)).toFixed(3));
};

