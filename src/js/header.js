const headerLinks = [...document.querySelectorAll('header a')]
const updateHrefLink = (currentPath, nextPath) => {
    if(nextPath === '/') {
        headerLinks.map(link => {
            link.href = link.dataset.hash
        })
    } else if(currentPath === '/') {
        headerLinks.map(link => {
            link.href = link.dataset.href
        })
    }
}
updateHrefLink('/', '/')
window.ALink.subscribe(updateHrefLink)
if(window.location.hash) {
    window.location.href = window.location.href 
}


/* toogle menu in mobile */
const btnMenu = document.getElementById('btn-menu')
const listMenu = document.getElementById('nav-menu')

btnMenu.addEventListener('click', () => {
    listMenu.classList.toggle('menuIsOpen')
    btnMenu.classList.toggle('btnIsOpen')
})