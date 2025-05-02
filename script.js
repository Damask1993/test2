const menu = document.querySelector('#mobile-menu');
const menuItems = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
let isMenuActive = false;

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuItems.classList.toggle('active');
    isMenuActive = menu.classList.contains('is-active');
})

document.querySelectorAll('.order').forEach(orderButton => {
    orderButton.addEventListener('click', function(event) {
        const closestMenuOrder = event.target.closest('.menu-order');
        if (closestMenuOrder) {
            closestMenuOrder.classList.toggle('order-active');
        }
    });
});


navLinks.forEach(link => {
    link.addEventListener('click', function(){
        menu.classList.remove('is-active');
        menuItems.classList.remove('active');
        isMenuActive = false;
    })
})

var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    if (isMenuActive) return;
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-180px";
    }else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});





document.querySelectorAll('.quantity').forEach(quantityContainer => {
    const valueIncrease = quantityContainer.querySelector('.increase');
    const valueDecrease = quantityContainer.querySelector('.decrease');
    const quantityInput = quantityContainer.querySelector('.quantity-input');
    const priceElement = quantityContainer.closest('.menu-desc').querySelector('.price');
    const basePrice = parseInt(priceElement.getAttribute('value')); // Assuming you store the base price in the value attribute


    valueIncrease.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < quantityInput.max) {
            quantityInput.value = currentValue + 1;
            updateTotalPrice(priceElement, basePrice, quantityInput.value);
        }
    });

    valueDecrease.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > quantityInput.min) {
            quantityInput.value = currentValue - 1;
            updateTotalPrice(priceElement, basePrice, quantityInput.value);
        }
    });       

});

function updateTotalPrice(priceElement, basePrice, quantity) {
    if (quantity == 0) {
        priceElement.innerHTML = basePrice + ' den'; // Keep the base price when quantity is 0
    } else {
        priceElement.innerHTML = (basePrice * quantity) + ' den';
    }
}



const orderBtn = document.querySelector('.order');
let orderItems = document.querySelector('.counted-items');
let quantityOfItems = document.querySelector('.quantity-input');


document.querySelectorAll('.increase, .decrease').forEach(orderBtn => {
    orderBtn.addEventListener('click', function() {
        let totalItems = 0;
        document.querySelectorAll('.quantity-input').forEach(input => {
            totalItems = totalItems + parseInt(input.value);
        });
        orderItems.value = totalItems;
    });
});



