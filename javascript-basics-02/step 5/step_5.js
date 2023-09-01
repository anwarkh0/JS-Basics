let images = document.querySelectorAll("img");
console.log(images)
images.forEach(image =>{
    image.addEventListener("mouseover",(e)=>{
        e.target.src = `./images/${e.target.id}_2.jpg`
    })
})
