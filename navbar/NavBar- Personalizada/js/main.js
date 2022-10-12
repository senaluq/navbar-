const headerToggle = document.getElementById('header-toggle'),
    main = document.getElementById('main'),
    navClose = document.getElementById('nav-close')


if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}
/*== funcionalidad menu desplegado ==*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const main = document.getElementById('main')
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*== cambio del header al dar scroll ==*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // cuando el desplazamiento es mayor que 50 de altura de ventana grafica,
    // agrege la clase 'scroll-header' a la etiqueta header 
    this.scrollY >=50 ? header.classList.add('scroll-header')
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*====== SCROLL SECCIONES - OPCION ACTIVA MENU DESPLEGLABE========*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId =current.getAttribute('id'),
            sectionClass =  document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }    
    })
}
window.addEventListener('scroll', scrollActive)


