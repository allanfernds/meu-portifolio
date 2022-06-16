const btnMobile = document.getElementById('btn-mobile')


function toggleMenu() {
    const nav = document.getElementById('menu')
    nav.classList.toggle('active')

}

function test(){
    console.log('oi')
}

btnMobile.addEventListener('click', toggleMenu);

