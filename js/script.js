window.addEventListener('DOMContentLoaded', () => {
    const menuBars = document.querySelector('.bars'),
        nav = document.querySelector('.nav'),
        x = document.querySelector('.x'),
        bodyLoader = document.querySelector('.body-loader')

    // * Loader
    setTimeout(() => {
        bodyLoader.style.opacity = '0'
        setTimeout(() => {
            bodyLoader.style.display = 'none'
        }, 500)
    }, 2000)

    function open() {
        nav.classList.add('show')
        nav.classList.remove('hide')
    }

    function close() {
        nav.classList.toggle('hide')
        nav.classList.toggle('show')
    }

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && nav.classList.contains('show')) {
            close()
        }
    })

    menuBars.addEventListener('click', open);
    x.addEventListener('click', close);


})