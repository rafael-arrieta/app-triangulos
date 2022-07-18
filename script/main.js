let btnResolver = document.getElementById('btn-resolver');
let divRenderError = document.getElementById('render-error');
let divRenderSolucion = document.getElementById('render-solucion');

btnResolver.addEventListener('click', ()=>{ 
    ejecutarProceso();
})  

function ejecutarProceso(){
    removeTypos()
    let datos = estructuraDatos()
    removeCeros()
    datos = angleToDegree(datos)
    let codigo = codeToRender(datos);
    renderSolution(codigo,datos);
};

function removeTypos(){
    let allInputs = document.getElementsByClassName('input-dato')
    for (let i = 0; i<allInputs.length; i++){
        allInputs[i].value=allInputs[i].value.replace(/[^0-9.]/gi, '')//expresion regular
        if (allInputs[i].value==='') allInputs[i].value=0
        allInputs[i].value=(parseFloat(allInputs[i].value)).toFixed(2)
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
        clsSegundo[i].value=(parseFloat(clsSegundo[i].value)).toFixed(1)
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
    obj.ladoA=parseInt((obj.ladoA)*100)
    obj.ladoA=((obj.ladoA)/100);
    obj.ladoB=parseInt((obj.ladoB)*100)
    obj.ladoB=((obj.ladoB)/100);
    obj.ladoC=parseInt((obj.ladoC)*100)
    obj.ladoC=((obj.ladoC)/100);
    return obj
}

function toDegree(grados,minutos,segundos){
    return parseFloat((parseFloat(grados)+(minutos/60)+(segundos/3600)).toFixed(10));
    //return parseFloat(grados)+(minutos/60)+(segundos/3600);
}
//Recibe el objto, crea un array con los datos y retorna el codigo para renderizar contenido
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
    for(let i = 0; i <= arr.length; i++){
        if(codigo.length === 3) return codigo;
        if(arr[i] > 0) codigo += i;
    };
    return false;
};
//Recibe el codigo de impresion y el objeto validado para insertar en el HTML el contenido
function renderSolution(code,obj){
    if(code===false)divRenderSolucion.innerHTML=renderBlockFalse(obj);
    if(code==='012')divRenderSolucion.innerHTML=renderBlock012(obj);
    if(code==='013')divRenderSolucion.innerHTML=renderBlock013(obj);
    if(code==='014')divRenderSolucion.innerHTML=renderBlock014(obj);
    if(code==='015')divRenderSolucion.innerHTML=renderBlock015(obj);
    if(code==='023')divRenderSolucion.innerHTML=renderBlock023(obj);
    MathJax.typesetPromise();
};

//COSENO 
function calcularCos(angulo){
    angulo = parseFloat(Math.cos(angulo*Math.PI/180));
    return angulo;
};
//ARCO COSENO
function calcularAcos(angulo){
    angulo = parseFloat(Math.acos(angulo)*180/Math.PI);
    return angulo;
};
//SENO
function calcularSin(angulo){
    angulo = parseFloat(Math.sin(angulo*Math.PI/180));
    return angulo;
};
//ARCO SENO
function calcularAsin(angulo){
    angulo = parseFloat(Math.asin(angulo)*180/Math.PI);
    return angulo;
};

//Retorna el parametro en un array
function convertirSexagesimal(dato){
    let decimal = (dato*1).toFixed(10);
    console.log(decimal);
    let grad = parseInt(decimal);
    let minutoAux = (decimal-parseInt(decimal))*60;
    let min = parseInt(minutoAux)
    let seg = ((minutoAux-parseInt(minutoAux))*60).toFixed(1);
    if(seg==60){
        min = min+1;
        seg = 0;
    }
    return [grad, min, seg]
};
//retorna 3 datos de los PX para renderizar el triangulo
function renderTriangulo(base,hip,ang){
    let seno = calcularSin(ang);
    let opuesto = (seno*hip);
    let adyacente1 = (Math.sqrt((hip*hip)-(opuesto*opuesto)));
    let adyacente2 = (base-adyacente1);
    let h = parseInt((240*opuesto)/base);
    let d1 = parseInt((240*adyacente1)/base);
    let d2 = parseInt((240*adyacente2)/base);
    return[d1, d2, h]
};
//Recibe el array formado por el resultado final de los lados y de los angulos y lo ordena de menor a mayor
function ordenarArray(arr){
    let arrAux=arr;
    arrAux[0][0]=parseInt(arrAux[0][0]*100);
    arrAux[1][0]=parseInt(arrAux[1][0]*100);
    arrAux[2][0]=parseInt(arrAux[2][0]*100);
    let aux2;
        if (arrAux[0][0]>arrAux[1][0])
            {aux2=arrAux[0];
            arrAux[0]=arrAux[1];
            arrAux[1]=aux2;}
        if (arrAux[1][0]>arrAux[2][0])
            {aux2=arrAux[1];
            arrAux[1]=arrAux[2];
            arrAux[2]=aux2;}
        if (arrAux[0][0]>arrAux[1][0])
            {aux2=arrAux[0];
            arrAux[0]=arrAux[1];
            arrAux[1]=aux2;}
    arrAux[0][0]= (arrAux[0][0]/100);
    arrAux[1][0]= (arrAux[1][0]/100);
    arrAux[2][0]= (arrAux[2][0]/100);
    return arrAux
};
//imprimir contenido
$(document).ready(function($) { 
    $(document).on('click', '.btn_print', function(event) {//el boton va con una class
        
        event.preventDefault();
        let element = document.getElementById('print-container');// aca va el DIV a renderizar
        let options = {
            margin:       [6, 12, 0, 12],
            filename:     'App-Triangulos_'+js.AutoCode()+'.pdf',
            image:        { type: 'png', quality: 1.5},//0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(options).from(element).save();
    });
});
