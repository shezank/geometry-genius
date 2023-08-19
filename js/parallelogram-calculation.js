function parallelogramCalculation(){
    const baseValue =  getInputField('Parallelogram-base');
    const hightValue = getInputField('Parallelogram-hight');
    if(isNaN(baseValue) || isNaN(hightValue)){
        alert("Nuber type kor")
        return
    }
    const parallelogramResult = baseValue * hightValue ;
    setElementText('Parallelogram-result', parallelogramResult);

    addAreaColculation('Parallelogram', parallelogramResult);

}


function  ellipseCalculation(){
    const majorValue = getInputField('ellipse-major');
    const minorValue = getInputField('ellipse-minor');
    const pieValue = 3.142 * majorValue * minorValue;
    const pie2fix = pieValue.toFixed(2);
    setElementText('Ellipse-result', pie2fix);
    addAreaColculation('Ellipse', pie2fix)
}




function getInputField(id){
    const inputField = document.getElementById(id)
    const inputFieldText = inputField.value ;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}
function setElementText(elementId, value){
    const area = document.getElementById(elementId);
    area.innerText = value;
}


function addAreaColculation(name , value){
    const setAreaCalcualtionText = document.getElementById('area-calculation');
    const count = setAreaCalcualtionText.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-2xl');
    p.classList.add('font-bold');
    p.innerHTML =  `${count + 1}. ${name} ${value} cm<sup>2</sup> <button class="btn btn-success mb-2">Convart </button> `;
    setAreaCalcualtionText.appendChild(p);
}