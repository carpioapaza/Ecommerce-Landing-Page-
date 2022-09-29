//NAVBAR
const hamburger = document.querySelector('.menu__hamburger');
const close = document.querySelector('.menu__close');
const nav = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('navbar__menu-active');
  nav.classList.add('navbar__menu-transition');
});

close.addEventListener('click', () => {
  nav.classList.remove('navbar__menu-active');
  nav.classList.remove('navbar__menu-transition');
});
//NAVBAR

// MODAL GALLERY

const close__gallery = document.querySelector('.product__gallery-close');
const gallery__big = document.querySelectorAll('.gallery__big');
const gallery__modal = document.querySelector('.product__gallery-modal');
gallery__big.forEach((gallery__big__box) => {
  gallery__big__box.addEventListener('click', () => {
    gallery__modal.classList.toggle('product__gallery-modal--active');
    console.log('gallery active');
  });
});
document.addEventListener('keydown', (evt) => {
  if (evt.key == 'Escape') {
    gallery__modal.classList.remove('product__gallery-modal--active');
  }
});

close__gallery.addEventListener('click', () => {
  gallery__modal.classList.remove('product__gallery-modal--active');
});

// MODAL GALLERY

//LIGHBTOX

// const gallery__big = document.querySelector('.gallery__big');
const gallery__thumbnail = document.querySelectorAll('.gallery__thumbnail');
const gallery__prev = document.querySelectorAll('.gallery__prev');
const gallery__next = document.querySelectorAll('.gallery__next');
const gallery__big__box = document.querySelector('.gallery__big__box');
gallery__next.forEach((btnNext) => {
  btnNext.addEventListener('click', btnClickedNext);
});

gallery__prev.forEach((btnPrev) => {
  btnPrev.addEventListener('click', btnClickedPrev);
});

gallery__thumbnail.forEach((box) => {
  box.addEventListener('click', onThumbClick);
  // console.log('FOTO ACTIVADA');
  // image__box.src = box.src;
});

function onThumbClick(e) {
  gallery__thumbnail.forEach((box) => {
    box.classList.remove('gallery__thumbnail-active');
  });
  e.target.classList.add('gallery__thumbnail-active');
  gallery__big.forEach((gallery__big__box) => {
    gallery__big__box.src = e.target.src.replace('-thumbnail', '');
  });
}

function btnClickedNext() {
  let imageIndex = getCurrentImageIndex();
  imageIndex++;
  if (imageIndex > 4) {
    imageIndex = 1;
  }
  setHeroImage(imageIndex);
}

function btnClickedPrev() {
  let imageIndex = getCurrentImageIndex();
  imageIndex--;
  if (imageIndex < 1) {
    imageIndex = 4;
  }
  setHeroImage(imageIndex);
}

function getCurrentImageIndex() {
  const imageIndex = parseInt(
    gallery__big__box.src
      .split('\\')
      .pop()
      .split('/')
      .pop()
      .replace('.jpg', '')
      .replace('image-product-', '')
  );
  return imageIndex;
}

function setHeroImage(imageIndex) {
  gallery__big__box.src = `images/image-product-${imageIndex}.jpg`;
  gallery__thumbnail.forEach((box) => {
    box.classList.remove('gallery__thumbnail-active');
  });
  gallery__thumbnail[imageIndex - 1].classList.add('gallery__thumbnail-active');
}
// DARK MODE

// // Seleccionamos el botón
// const icon_light = document.querySelector('.icon-light');

// // Detectamos si el usuario tiene habilitado el modo oscuro
// const getScheme = window.matchMedia('(prefers-color-scheme: dark)')

// icon_light.addEventListener('click', () => {
//   document.documentElement.classList.toggle('dark')
// })

// function toggleDarkMode(state) {
//   document.documentElement.classList.toggle('dark', state)
// }

// toggleDarkMode(getScheme.matches)

// // Escuchamos los cambios en las configuración del
// // del sistema operativo para alternar de tema
// getScheme.addListener(evt => toggleDarkMode(evt.matches))

// icon_light.addEventListener('click', ()=>{
//     if (icon_light.textContent.includes("light_mode")) {

//          icon_light.textContent = "dark_mode"
//     }else{
//         icon_light.textContent = "light_mode"

//     }
//     console.log(icon_light)
// })

//INCREASE DECREASE

const minus = document.querySelector('.input__minus');
const plus = document.querySelector('.input__plus');
const input_number = document.querySelector(
  '.info__product-quantity .input__number'
);

let value = 0;
console.log('value', value);

plus.addEventListener('click', () => {
  Increase();
});

minus.addEventListener('click', () => {
  Decrease();
});

function Increase() {
  value++;
  input_number.value = `${value}`;

  console.log('+', value);
}

function Decrease() {
  if (value >= 1) {
    value--;
    console.log('-', value);
    input_number.value = `${value}`;
  }
}
//INCREASE DECREASE
//CURRENCY INT FORMATTER
const formatter = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
});
let test = 15;

output = formatter.format(test);
console.log(output);

//ADD TO CART
const button__add__cart = document.querySelector('.sneakers__cta--add-cart');
const cart__notification = document.querySelector('.cart__notification');

const price__now = document.querySelector('.price__now').innerText;
const price__total = document.querySelector('.price__total');
const output__number = document.querySelector('.input__number--checkout');
const checkout = document.querySelector('.sneakers__cta--checkout');

let total = 0;
let t__pay = 0;
button__add__cart.addEventListener('click', () => {
  if (value >= 1) {
    total += value;
    value = 0;
    input_number.value = `${value}`;

    // Cart
    cart__notification.classList.add('cart__notification--active');
    t__pay = total * price__now;
    output__number.innerHTML = `x ${total}`;
    price__total.innerHTML = `S/ ${t__pay}`;
    cart__notification.innerText = total;
    checkout.innerText = `Checkout S/ ${t__pay}`;
    // console.log(a);
  } else {
    alert('Tu carrito esta vacio');
  }
});

//REMOVE
const cart__trash = document.querySelector('.cart__trash');
const cart__body__info = document.querySelector('.cart__body__info');
cart__trash.addEventListener('click', () => {
  total = 0;
  // cart__body__info.style.display = 'none';
  cart__notification.classList.remove('cart__notification--active');
  cart__modal.classList.toggle('cart__modal--active');

  // cart__modal__empty.remove();
  // cart__modal.appendChild(cart__body);
});

// CART MODAL

const cart = document.querySelector('.cart__icon');
const cart__modal = document.querySelector('.cart__modal');
const cart__modal__empty = document.querySelector('.cart__body');

const cart__body = document.createElement('div');
cart__body.innerHTML = `<p 
style="text-align: center; padding: 2em 0; color: gray; font-weight: bold">Your Cart is empty!</p>`;

cart.addEventListener('click', () => {
  if (total >= 1) {
    cart__modal__empty.style.display = 'flex';
    cart__modal.classList.toggle('cart__modal--active');
    cart__body.style.display = 'none';
  } else {
    cart__modal__empty.style.display = 'none';
    cart__modal.classList.toggle('cart__modal--active');
    cart__modal.appendChild(cart__body);
    cart__body.style.display = 'block';
  }
  // if (value > 1) {
  //   alert('if');
  //   console.log('cart');
  // } else {
  //   // cart__modal__empty.classList.replace("cart__body","cart__body__empty");
  //   cart__modal__empty.remove();
  //   cart__modal.classList.toggle('cart__modal--active');
  //   // alert('h');
  //   alert('else');
  // }
});

// cart.addEventListener('mouseout',()=>{
//     cart__modal.classList.remove('cart__modal--active')

// })

// CART MODAL

//
