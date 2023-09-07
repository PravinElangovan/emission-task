var items = document.getElementById('items')
var rangeValue = document.getElementById('range-button');
var rangeText = document.getElementById('num');
var product=100;
var emissionQty = document.getElementById('qty');
var carQty=document.getElementById('car');
console.log(items)
console.log(rangeValue)
console.log(rangeText)
console.log(emissionQty)
items.addEventListener('click',(e)=>{
    product=parseInt(e.target.id);
    console.log(product)
    emissionQty.innerText=parseInt(rangeText.innerText)+product
})

rangeValue.addEventListener('change',(e)=>{
    console.log(e.target.value);
    rangeText.innerHTML=parseInt(e.target.value);
    emissionQty.innerHTML = parseInt(e.target.value) + parseInt(product);
    
    carQty.innerHTML= parseInt(10) + parseInt(rangeText.innerText-100);
})



