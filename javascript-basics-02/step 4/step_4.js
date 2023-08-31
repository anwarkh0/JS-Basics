let but = document.querySelector('button')
let inputs = document.querySelectorAll('input')
but.addEventListener('click' , ()=>{
    let user = prompt('y/n')
    if(user == 'y'){
        inputs.forEach(input => input.value = "")
    }else{
        return
    }

        
    });
