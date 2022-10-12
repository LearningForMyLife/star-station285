let burger = document.querySelector('#burger'),
    burger_bar = burger.querySelectorAll('span'),
    my_cube = document.querySelectorAll('.my-aos')

function nav_open() {
    burger.classList.toggle('open')
    burger.classList.toggle('close')
}

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

window.onscroll = function () {
    console.log(window.scrollY)
    if (window.scrollY >= 2200 && window.scrollY < 7300) {
        burger_bar.forEach(element => {
            element.classList.add('dark')
        });
    } else {
        burger_bar.forEach(element => {
            if (element.classList.contains('dark')) {
                element.classList.remove('dark')
            }
        })
    }

    my_cube.forEach(element => {
        let data_scrollY = getComputedStyle(element).getPropertyValue('--my-aos-scroll')
        if (window.scrollY > data_scrollY) {
            if (!element.classList.contains('action')) {
                console.log(element.className + data_scrollY)
                element.classList.add('action')
            }

        } else {
            if (element.classList.contains('action')) {
                element.classList.remove('action')
            }
        }
    })
}

// AOS JS
AOS.init();