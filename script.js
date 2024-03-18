'use strict'
const sercel1 = document.querySelector('#sercl1')
const sercel2 = document.querySelector('#sercel2')
const sercel3 = document.querySelector('#sercel3')
const cart1 = document.querySelector('#section5cart1')
const cart2 = document.querySelector('#section5cart2')
const cart3 = document.querySelector('#section5cart3')
sercel2.addEventListener('click', () => {
    cartRemov();
    imgcart();
    cart2.classList.add('colorcat')
    document.querySelector('#section5ImgCart2').src = 'img/2-icon-active.svg'
    document.querySelector('#section5Select h4').textContent = 'Buy with ease'
    document.querySelector('#pc1').textContent = 'We have the leading payment solution brands at your service to provide you'
    document.querySelector('#pc2').textContent = 'with the most diversified gateway portfolio to fit your needs.'
    document.querySelector('#pc3').innerHTML = 'We process payments instantly — we can start on your order as soon you finish <br> checkout.'
    document.querySelector('#pc4').innerHTML = '<i class="bx bx-check"></i> Payments accepted globally.'
    document.querySelector('#pc5').innerHTML = '<i class="bx bx-check"></i> Safe and encrypted transactions.'
    document.querySelector('#pc6').innerHTML = '<i class="bx bx-check"></i> Crypto payments are available.'
    document.querySelector('#section5Select').style.marginTop = '-50px'
    document.querySelector('#btnsection5').style.marginTop = '-55px';
    sercel1.classList.add('secton5serclm')
    sercel3.classList.add('secton5serclm')
    sercel2.classList.remove('secton5serclm')
    sercel2.classList.add('serclw')
    document.querySelector('#imgsection5').src = "img/2.webp"
})
cart2.addEventListener('click', () => {
    cartRemov();
    imgcart();
    cart2.classList.add('colorcat')
    document.querySelector('#section5ImgCart2').src = 'img/2-icon-active.svg'
    document.querySelector('#section5Select h4').textContent = 'Buy with ease'
    document.querySelector('#pc1').textContent = 'We have the leading payment solution brands at your service to provide you'
    document.querySelector('#pc2').textContent = 'with the most diversified gateway portfolio to fit your needs.'
    document.querySelector('#pc3').innerHTML = 'We process payments instantly — we can start on your order as soon you finish <br> checkout.'
    document.querySelector('#pc4').innerHTML = '<i class="bx bx-check"></i> Payments accepted globally.'
    document.querySelector('#pc5').innerHTML = '<i class="bx bx-check"></i> Safe and encrypted transactions.'
    document.querySelector('#section5Select').style.marginTop = '-50px'
    document.querySelector('#btnsection5').style.marginTop = '-55px';
    sercel1.classList.add('secton5serclm')
    sercel3.classList.add('secton5serclm')
    sercel2.classList.remove('secton5serclm')
    sercel2.classList.add('serclw')
    document.querySelector('#imgsection5').src = "img/2.webp"
})
sercel3.addEventListener('click', () => {
    cartRemov();
    imgcart();
    cart3.classList.add('colorcat')
    document.querySelector('#section5ImgCart3').src = 'img/3-icon-active.svg'
    document.querySelector('#section5Select h4').textContent = 'Follow Your Rank Increase'
    document.querySelector('#pc1').innerHTML = 'You are all set! Lay back and watch your order being fulfilled.'
    document.querySelector('#pc3').textContent = `Chat directly with your booster and track your order's progress.`
    document.querySelector('#pc4').innerHTML = '<i class="bx bx-check"></i> Live tracking.'
    document.querySelector('#pc5').innerHTML = '<i class="bx bx-check"></i> Direct chat with your booster.'
    document.querySelector('#pc6').innerHTML = '<i class="bx bx-check"></i> 24/7 Premium live Help.'
    document.querySelector('#section5Select').style.marginTop = '-0px'
    document.querySelector('#btnsection5').style.marginTop = '-55px';
    sercel1.classList.add('secton5serclm')
    sercel2.classList.add('secton5serclm')
    sercel3.classList.remove('secton5serclm')
    sercel3.classList.add('serclw')
    document.querySelector('#imgsection5').src = "img/3.webp"
})
cart3.addEventListener('click', () => {
    cartRemov();
    imgcart();
    cart3.classList.add('colorcat')
    document.querySelector('#section5ImgCart3').src = 'img/3-icon-active.svg'
    document.querySelector('#section5Select h4').textContent = 'Follow Your Rank Increase'
    document.querySelector('#pc1').innerHTML = 'You are all set! Lay back and watch your order being fulfilled.'
    document.querySelector('#pc3').textContent = `Chat directly with your booster and track your order's progress.`
    document.querySelector('#pc4').innerHTML = '<i class="bx bx-check"></i> Live tracking.'
    document.querySelector('#pc5').innerHTML = '<i class="bx bx-check"></i> Direct chat with your booster.'
    document.querySelector('#section5Select').style.marginTop = '-0px'
    document.querySelector('#btnsection5').style.marginTop = '-55px';
    sercel1.classList.add('secton5serclm')
    sercel2.classList.add('secton5serclm')
    sercel3.classList.remove('secton5serclm')
    sercel3.classList.add('serclw')
    document.querySelector('#imgsection5').src = "img/3.webp"
})
sercel1.addEventListener('click', () => {
    cartRemov();
    imgcart();
    cart1.classList.add('colorcat')
    document.querySelector('#section5ImgCart1').src = 'img/1-icon-active.svg'
    document.querySelector('#section5Select h4').textContent = 'Select Your Favored Service'
    document.querySelector('#pc1').innerHTML = 'First, select your game and method of ranking up. There are various ways to'
    document.querySelector('#pc2').textContent = `reach your desired goal. Choose the one which fits most to your needs.`
    document.querySelector('#pc3').textContent = `You can always talk to us on live chat if you need help.`
    document.querySelector('#pc4').innerHTML = '<i class="bx bx-check"></i> Free additional customizations.'
    document.querySelector('#pc5').innerHTML = '<i class="bx bx-check"></i> Intuitive and straightforward purchase process.'
    document.querySelector('#pc6').innerHTML = ''
    document.querySelector('#section5Select').style.marginTop = '-0px'
    document.querySelector('#btnsection5').style.marginTop = '-90px';
    sercel2.classList.add('secton5serclm')
    sercel3.classList.add('secton5serclm')
    sercel1.classList.remove('secton5serclm')
    sercel1.classList.add('serclw')
    document.querySelector('#imgsection5').src = "img/1.webp"
})
cart1.addEventListener('click', () => {
    cartRemov();
    imgcart();
    cart1.classList.add('colorcat')
    document.querySelector('#section5ImgCart1').src = 'img/1-icon-active.svg'
    document.querySelector('#section5Select h4').textContent = 'Select Your Favored Service'
    document.querySelector('#pc1').innerHTML = 'First, select your game and method of ranking up. There are various ways to'
    document.querySelector('#pc2').textContent = `reach your desired goal. Choose the one which fits most to your needs.`
    document.querySelector('#pc3').textContent = `You can always talk to us on live chat if you need help.`
    document.querySelector('#pc4').innerHTML = '<i class="bx bx-check"></i> Free additional customizations.'
    document.querySelector('#pc5').innerHTML = '<i class="bx bx-check"></i> Intuitive and straightforward purchase process.'
    document.querySelector('#pc6').innerHTML = ''
    document.querySelector('#section5Select').style.marginTop = '-0px'
    document.querySelector('#btnsection5').style.marginTop = '-90px';
    sercel2.classList.add('secton5serclm')
    sercel3.classList.add('secton5serclm')
    sercel1.classList.remove('secton5serclm')
    sercel1.classList.add('serclw')
    document.querySelector('#imgsection5').src = "img/1.webp"
})
const cartRemov = function () {
    cart1.classList.remove('colorcat')
    cart2.classList.remove('colorcat')
    cart3.classList.remove('colorcat')
}
const imgcart = function () {
    document.querySelector('#section5ImgCart1').src = 'img/1-icon.svg'
    document.querySelector('#section5ImgCart2').src = 'img/2-icon.svg'
    document.querySelector('#section5ImgCart3').src = 'img/3-icon.svg'
}

const body = document.querySelector('#body')
const meno = document.querySelector('#navmen')
const menohdivv = document.querySelector('#menohdivv')
meno.addEventListener('click', () => {
    menohdivv.classList.remove('show')
})
window.addEventListener('click', (e) => {
    if (e.target.id !== 'navmen' && e.target.id !== 'menoh' && e.target.id !== '') {
        menohdivv.classList.add('show')
    }
})
