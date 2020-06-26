// Bloc
const div = document.createElement("div")
div.style.position = 'fixed'
div.style.top = 90 + 'vh'
div.style.right = 10 + 'px'
div.style.float = 'right'
div.style.height = 35 +'px'
div.style.width = 35 + 'px'
div.style.backgroundColor = 'black'
div.style.borderRadius = 3 + 'px'
div.style.cursor = 'pointer'

// Trait
const p = document.createElement("p")
p.setAttribute("class", "left")
p.style.color = 'white'
p.innerHTML = "^"
p.style.position = 'fixed'
p.style.top = 'calc(90vh + 12.5px)'
p.style.right = 23.5 + 'px'
p.style.float = 'right'
p.style.cursor = 'pointer'

function onScroll(e){
    if(window.scrollY >= 600){
        body.appendChild(div)
        body.appendChild(p).className = "left"
    }else{
        if(body.contains(div)){
            body.removeChild(div)
            body.removeChild(p).className = "left"
        }
    }
}

function onClick(){
    console.log('clic')
    window.scrollTo(0, 0)
}

div.addEventListener('click', onClick)
p.addEventListener('click', onClick)
window.addEventListener('scroll', onScroll)