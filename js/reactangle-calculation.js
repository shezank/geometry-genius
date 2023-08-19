function reacangleCalculation(){
    const widthField = document.getElementById('width');
    const widthFieldText = widthField.value ;
    const width = parseFloat(widthFieldText);
    
    const lengthField = document.getElementById('length');
    const lengthFieldText = lengthField.value ;
    const length = parseFloat(lengthFieldText);
    if(isNaN(width) || isNaN(length)){
        alert("Plase Type a numbers")
        return
    }

    const reactangleResult = width *  length ;

    const reactangle = document.getElementById('reactangle-result');
    reactangle.innerText = reactangleResult;
    addAreaColculation('Reactangle', reactangleResult);
}