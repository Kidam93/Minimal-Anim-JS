const contentText = document.querySelectorAll('.content-text p strong')
const the = contentText[0].textContent
const playlist = contentText[1].textContent
const code = contentText[2].textContent
let nThe = 780
let nPlaylist = 10
let nCode = 6700

function countThe(){
    while(nThe <= the){
        nThe++
        break;
    }
    if(nThe >= the){
        clearInterval(refreshThe)
    }
    contentText[0].innerHTML = nThe
}

function countPlaylist(){
    while(nPlaylist <= playlist){
        nPlaylist++
        break;
    }
    if(nPlaylist >= playlist){
        clearInterval(refreshPlaylist)
    }
    contentText[1].innerHTML = nPlaylist
}

function countCode(){
    while(nCode <= code){
        nCode++
        break;
    }
    if(nCode >= code){
        clearInterval(refreshCode)
    }
    contentText[2].innerHTML = nCode
}

refreshThe = setInterval(countThe, 50)
refreshPlaylist = setInterval(countPlaylist, 500)
refreshCode = setInterval(countCode, 1)