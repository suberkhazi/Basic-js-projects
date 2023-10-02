const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// buttons.forEach(function(button) {
//     button.addEventListener('click', function(event){
//        if(event.target.id === 'grey'){
//         body.style.backgroundColor = event.target.id
//        }
//        if(event.target.id === 'yellow'){
//         body.style.backgroundColor = event.target.id
//        }
//        if(event.target.id === 'blue'){
//         body.style.backgroundColor = event.target.id
//        }
//        if(event.target.id === 'white'){
//         body.style.backgroundColor = event.target.id
//        }
//     })
//})

buttons.forEach(function(button){
    button.addEventListener('mouseover', function(event){
        console.log(event.target)
        switch(event.target.id){
        case 'grey':
            body.style.backgroundColor = event.target.id;
        case 'blue':
            body.style.backgroundColor = event.target.id;
        case 'white':
            body.style.backgroundColor = event.target.id;            
        case 'yellow':
            body.style.backgroundColor = event.target.id;            
        }

    })
})




