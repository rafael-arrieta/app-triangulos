
function renderBlock012(obj){
    console.log(obj)
    let block012=`

    $$\\cos${obj.ladoA}$$

    $$\\frac{1}{\\sqrt{x^2 + 1}}$$
    
    `
    

    MathJax.typeset()

    return block012
}