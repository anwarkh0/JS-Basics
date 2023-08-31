let box = document.createElement("div");
let form = document.querySelector('form');
form.appendChild(box);
// box.innerText = 'anwar'
let input = document.querySelector("input")
input.addEventListener('input', ()=>{
    box.innerText = input.value
})