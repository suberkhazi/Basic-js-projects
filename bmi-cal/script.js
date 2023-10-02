const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault;   //To prevent default action of form submittion.
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `<span>${height} is invalid</span>`;
   } else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `<span>${weight} is invalid</span>`;
   } else{
    const bmi = (weight / ((height*weight) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
   }
})