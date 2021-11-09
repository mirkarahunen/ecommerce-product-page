// ------------------- VARIABLES ------------------- //
let productImage = document.querySelector('.product-image img')
const nextButton = document.querySelector('.slider-next')
const previousButton = document.querySelector('.slider-previous')
let index = 0

const thumbnailContainer = document.querySelector('.thumbnail-images')
let thumbnailImg;
let thumbnailImgDiv;
let productImageSrc;
let modalProductImage = document.querySelector('.modal-product-image img');
let allModalDivs;


const burger = document.querySelector('.burger')
const menu = document.querySelector('.mobile')
const menuBg = document.querySelector('.menu-bg')
const lines = document.querySelectorAll('.line-1, .line-2, .line-3')


const modalWindow = document.querySelector('.modal')
const modalThumbnails = document.querySelector('.modal-thumbnail-images')
const modalNextButton = document.querySelector('.modal-slider .modal-slider-next')
const modalPreviousButton = document.querySelector('.modal-slider .modal-slider-previous')
const modalImage = document.querySelector('.modal-product-image img')
let modalDiv;

// Open modal window
let clicked = false

const close = document.querySelector('.close')

const addToCartButton = document.querySelector('.add-to-cart-button')
let cartItem = document.querySelector('.cart-items')
let cartIconAmount = document.querySelector('.cart-icon-amount')
const cartIcon = document.querySelector('.cart-icon')
const shoppingCart = document.querySelector('.shopping-cart')


// ------------------- IMAGES ------------------- //
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

const thumbnails = [
    {
        image: "product-1",
        src: "./img/image-product-1-thumbnail.jpg"
    },
    {
        image: "product-2",
        src: "./img/image-product-2-thumbnail.jpg"
    },
    {
        image: "product-3",
        src: "./img/image-product-3-thumbnail.jpg"
    },
    {
        image: "product-4",
        src: "./img/image-product-4-thumbnail.jpg"
    }
]

// ------------------- SLIDESHOW ------------------- //
let currentSlide = sliderImages[0];
productImage.setAttribute('src', sliderImages[0].src)

nextButton.addEventListener('click', () => {
    index = ++index >= sliderImages.length ? 0 : index;
    currentSlide = sliderImages[index]
    productImage.setAttribute('src', sliderImages[index].src)
})

previousButton.addEventListener('click', () => {
    index = --index <= 0 ? sliderImages.length - 1 : index;
    currentSlide = sliderImages[index]
    productImage.setAttribute('src', sliderImages[index].src)
})

// ------------------- THUMBNAIL IMAGES ------------------- //
 // Create img element for each image
 for (let index = 0; index < thumbnails.length; index++) {
    let element = thumbnails[index];
    
    
    thumbnailImgDiv = document.createElement('div')
    thumbnailImg = document.createElement('img')
    thumbnailImgDiv.classList.add('single-image')

    // Set image source
    thumbnailImg.setAttribute('src', element.src)

    //Append img element to HTML
    thumbnailContainer.appendChild(thumbnailImgDiv)
    thumbnailImgDiv.appendChild(thumbnailImg)
    
}

// Calling created elements
let allThumbnailImgDivs = document.querySelectorAll('.single-image')
let allThumbnailImages = document.querySelectorAll('.single-image img')


// First image has active class
allThumbnailImgDivs[0].classList.add('active')


const showImages = (evt) => {

    index === evt.target
    //Remove active state from all elements
    allThumbnailImgDivs.forEach((elm) => {
        elm.classList.remove('active')
    })

    // Iterate over modal div elements only after they have been created
    if (allModalDivs) {
        allModalDivs.forEach((elm) => {
            elm.classList.remove('active')
        })
    } 
    

    // Add active state to the clicked image
    evt.target.parentElement.classList.add('active')

    // Show clicked thumbnail in the product image container
    productImageSrc = evt.target.src.replace('-thumbnail', '')
    productImage.setAttribute('src', productImageSrc)
    //console.log(productImageSrc);

    modalProductImage.setAttribute('src', productImageSrc)
}

// Add click event for all images
for (let index = 0; index < allThumbnailImgDivs.length; index++) {
    allThumbnailImgDivs[index].addEventListener('click', showImages);
}



// ------------------- MOBILE MENU ------------------- //
burger.addEventListener('click', () => {
    menu.classList.toggle('show')
    menuBg.classList.toggle('show')
    burger.classList.toggle('show')

    for (let index = 0; index < lines.length; index++) {
        const element = lines[index];
        element.classList.toggle('show')
        
    }
})


// ------------------- MODAL / LIGHTBOX ------------------- //

// Open modal only when screen is 992px or wider
if(window.innerWidth >= 992) {
    
    productImage.addEventListener('click', (event) => {
        modalWindow.classList.add('show')
        const clickedImage = event.target
        document.querySelector('.modal img').setAttribute('src', clickedImage.src)
        
        if(!clicked) {
            clicked = true
            // Create img element for each image
            for (let index = 0; index < thumbnails.length; index++) {
                const element = thumbnails[index];
                modalDiv = document.createElement('div')
                const img = document.createElement('img')
                modalDiv.classList.add('single-image')

                // Set image source
                img.setAttribute('src', element.src)
                
                //Append img element to HTML
                modalThumbnails.appendChild(modalDiv)
                modalDiv.appendChild(img)

                 // Add click event for all images
                img.addEventListener('click', showImages)

            } 
        }
        allModalDivs = document.querySelectorAll('.modal-thumbnail-images .single-image')
        allModalDivs[0].classList.add('active')
        clickedImage.addEventListener('click', showImages)
    })
    
}





// Modal slideshow
modalNextButton.addEventListener('click', () => {
    index = ++index >= sliderImages.length ? 0 : index;
    currentSlide = sliderImages[index]
    modalImage.setAttribute('src', sliderImages[index].src)
})

modalPreviousButton.addEventListener('click', () => {
    index = --index <= 0 ? sliderImages.length - 1 : index;
    currentSlide = sliderImages[index]
    modalImage.setAttribute('src', sliderImages[index].src)
})


// Close modal window
close.addEventListener('click', () => {
    modalWindow.classList.remove('show')
})
/*
const modalNextButtonSvg = document.querySelector('.modal-slider .modal-slider-next svg path')
const modalPreviousButtonSvg = document.querySelector('.modal-slider .modal-slider-previous svg path')
const singleImgContainer = document.querySelectorAll('.single-image')

modalWindow.addEventListener('click', (event) => {
    console.log(event.target.parentElement, singleImgContainer);
    if (event.target !== modalNextButtonSvg &&
        event.target !== modalPreviousButtonSvg &&
        event.target !== modalNextButton &&
        event.target !== modalPreviousButton &&
        event.target !== modalImage &&
        event.target !== singleImgContainer) {
            modalWindow.classList.remove('show')
        } 
})
*/

// ------------------- SHOPPING CART ------------------- //

// Open shopping cart in the navigation
cartIcon.addEventListener('click', () => {
    shoppingCart.classList.toggle('active')
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
        <svg class="remove-content" width="22" height="28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
            </defs>
            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
        </svg>
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

