const sliderImages = [
    {
        image: "product-1",
        src: "./img/image-product-1.jpg"
    },
    {
        image: "product-2",
        src: "./img/image-product-2.jpg"
    },
    {
        image: "product-3",
        src: "./img/image-product-3.jpg"
    },
    {
        image: "product-4",
        src: "./img/image-product-4.jpg"
    }
]


let productImage = document.querySelector('.product-image img')
const nextButton = document.querySelector('.slider-next')
const previousButton = document.querySelector('.slider-previous')
let currentSlide = sliderImages[0];
let currentSrc = productImage.setAttribute('src', sliderImages[0].src)
let index = 0

nextButton.addEventListener('click', () => {
    index = ++index >= sliderImages.length ? 0 : index;
    currentSlide = sliderImages[index]
    currentSrc = productImage.setAttribute('src', sliderImages[index].src)
})

previousButton.addEventListener('click', () => {
    index = --index <= 0 ? sliderImages.length - 1 : index;
    currentSlide = sliderImages[index]
    currentSrc = productImage.setAttribute('src', sliderImages[index].src)
})


const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const menu = document.querySelector('.mobile')
const menuBg = document.querySelector('.menu-bg')

burger.addEventListener('click', () => {
    menu.classList.add('show')
    menuBg.classList.add('show')
})

close.addEventListener('click', () => {
    menu.classList.remove('show')
    menuBg.classList.remove('show')
})
