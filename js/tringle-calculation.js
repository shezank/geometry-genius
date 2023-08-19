function tringleCaltulation(){
    const baseField = document.getElementById('base');
    const baseFieldText = baseField.value ;
    const base = parseFloat(baseFieldText);


    const hightField = document.getElementById('hight');
    const hightFiledText = hightField.value ;
    const hight = parseFloat(hightFiledText);

    

    const areaResult = 0.5 * base * hight;
    console.log(areaResult);


    const area = document.getElementById('area-result');
    area.innerText = areaResult;

    addAreaColculation('Tringle', areaResult)
  
}