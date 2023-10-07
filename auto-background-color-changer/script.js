const colorChange = function(){
    let color = '#'
    const nums = '0123456789ABCDEF'
    for(let i=1; i<=6; i++){
        color += nums[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;
const startChangeColor = function(){

     intervalId = setInterval(changeByColor, 1000)

   function changeByColor(){ document.body.style.backgroundColor = colorChange();}
}

const stopChangeColor = function(){
    clearInterval(intervalId)
}


document.querySelector('#start').addEventListener('click', startChangeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);