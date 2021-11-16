// ------------------- START SPLIDE ------------------- //
document.addEventListener("DOMContentLoaded", () => {
    const slider_1 = new Splide("#slider1").mount();
    const slider_2 = new Splide("#slider2").mount();
    const slider_thumbnails = new Splide( '#thumbnail-slider', {
        fixedWidth  : 90,
        fixedHeight : 90,
        gap         : 30,
        rewind      : true,
        pagination  : false,
        cover       : true,
        isNavigation: true
      }).mount()
      const modal_thumbnails = new Splide( '#modal-thumbnail-slider', {
        fixedWidth  : 90,
        fixedHeight : 90,
        gap         : 30,
        rewind      : true,
        pagination  : false,
        cover       : true,
        isNavigation: true
      }).mount()

    slider_1.sync( slider_thumbnails );
    slider_1.mount();

    slider_2.sync( modal_thumbnails  )
    slider_2.mount()

    slider_thumbnails.mount();
    modal_thumbnails.mount()
  });

// ------------------- VARIABLES ------------------- //
let allImages = document.querySelectorAll('#slider1 img')
let modalProductImage = document.querySelector('#slider2 .splide__slide');
const thumbnailContainer = document.querySelectorAll('#thumbnail-slider .image')

const burger = document.querySelector('.burger')
const menu = document.querySelector('.mobile')
const menuBg = document.querySelector('.menu-bg')
const lines = document.querySelectorAll('.line-1, .line-2, .line-3')


const modalWindow = document.querySelector('.modal')
const modalThumbnails = document.querySelectorAll('#modal-thumbnail-slider .image img')
let clicked = false
const close = document.querySelector('.close')


const addToCartButton = document.querySelector('.add-to-cart-button')
let cartItem = document.querySelector('.cart-items')
let cartIconAmount = document.querySelector('.cart-icon-amount')
const cartIcon = document.querySelector('.cart-icon,cart')
const shoppingCart = document.querySelector('.shopping-cart')


// ------------------- MODAL / LIGHTBOX ------------------- //
// ------------------- FUNCTION TO SHOW MODAL PRODUCT IMAGE ------------------- //
if(window.matchMedia("(min-width: 992px)").matches) {
    for (let index = 0; index < allImages.length; index++) {
        const element = allImages[index];
            element.addEventListener('click', (evt) => {
        
            modalWindow.classList.add('show')
            modalProductImage.src = evt.target.src
            
        })
    }
}

// Close modal window
close.addEventListener('click', () => {
    modalWindow.classList.remove('show')
})


// ------------------- MOBILE MENU ------------------- //
burger.addEventListener('click', () => {
    for (let index = 0; index < lines.length; index++) {
        const element = lines[index];
        element.classList.toggle('show')    
    }

    menu.classList.toggle('show')
    menuBg.classList.toggle('show')
})


// ------------------- SHOPPING CART ------------------- //
// Open shopping cart in the navigation
cartIcon.addEventListener('click', () => {
    shoppingCart.classList.toggle('active')
})

// Jide shopping cart also when clicked somewhere else on the page
document.addEventListener('click', (event) => {
    if (event.target !== cartIcon && 
        event.target.parentElement !== cartIcon) {
            shoppingCart.classList.remove('active')
        } 
})

// Choose item amount for shopping cart
const addButton = document.querySelector('.add-item')
const removeButton = document.querySelector('.remove-item')
let itemAmount = document.querySelector('.item-amount')
let count = 0

addButton.addEventListener('click', () => {
    count ++
    itemAmount.innerHTML = count
})

removeButton.addEventListener('click', () => {
    if (count > 0) {
        count --
    } else {
        return
    }

    itemAmount.innerHTML = count
})

// Add item to shopping cart
addToCartButton.addEventListener('click', () => {

    // Show item amount next to shopping cart icon in header
    cartIconAmount.classList.add('active')
    cartIconAmount.innerHTML = itemAmount.innerHTML

    // Update shopping cart content
    const itemCount = itemAmount.innerHTML
    cartItem.innerHTML = 
    `<div class="cart-item">
        <img class="cart-image" src="./img/image-product-1-thumbnail.jpg"/>
        <span class="cart-item-span">Fall limited Edition Sneakers $125.00 x ${itemCount} 
            <span class="black">
                $${125*itemCount}.00
            </span>
        </span>
        <button class="remove-content" type="button">
            <svg width="22" height="28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
            </svg>
        </button>
    </div>
    
    <button class="checkout-button">
        Checkout
    </button>`
    
    // Remove items from shopping cart
    let trash = document.querySelectorAll('.remove-content')

    const removeItem = (evt) => {
        if(trash.length > 1) {
            evt.target.parentElement.removeChild(evt.target);
        } else {
            cartIconAmount.classList.remove('active')
            cartIconAmount.innerHTML = ""
            cartItem.innerHTML = `<span>
                                        Your cart is empty.
                                    </span>`
        }
    }

    for (let index = 0; index < trash.length; index++) {
        const element = trash[index];
        element.addEventListener('click', removeItem)
    }
    
})
