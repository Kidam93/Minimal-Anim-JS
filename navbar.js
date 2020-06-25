const body = document.querySelector('body')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('nav a')

function onClickMobile(){
    if(body.clientWidth < 800){
        nav.style.transitionDuration = '0.5s'
        nav.classList.toggle('visible-nav')
    }else if(body.clientWidth >= 800){
        if(nav.classList.contains('visible-nav')){
            nav.classList.remove('visible-nav')
        }
    }
}

function onResize(e){
    if(body.clientWidth < 800){
        nav.addEventListener('click', onClickMobile)
    }else if(body.clientWidth >= 800){
        if(nav.classList.contains('visible-nav')){
            nav.classList.remove('visible-nav')
        }
    }
}

window.addEventListener('resize', onResize)
nav.addEventListener('click', onClickMobile)