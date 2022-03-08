const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const imageContainer = document.querySelector('.image-container')
const imgs = document.querySelectorAll('.imgs')

let idx = 0 //index of the images in node list
let interval =  setInterval(run, 2000)

function run(){
    idx++
    chanceImage()
}

function chanceImage(){
    if(idx > imgs.length - 1){ //if at the end go back to the beguining 
        idx = 0
    }else if(idx < 0){ //check to see if is at the beguining
        idx = imgs.length -1
    }
    imageContainer.style.transform = `translateX(${-idx * 300}px)`   
}
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}
nextBtn.addEventListener('click', () => {
    idx++
    chanceImage() 
    resetInterval()   
})
prevBtn.addEventListener('click', () => {
    idx--
    chanceImage()
    resetInterval()
})