window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0xc217eb,
    color2: 0x9500b9,
    backgroundAlpha: 0.0,
    wingSpan: 40.00,
    separation: 100.00,
    alignment: 79.00,
    cohesion: 5.00,
    quantity: 1.00
   })
   setTimeout(() => {
   const main = document.querySelector('main')
   main.style.opacity = 1
   main.style.filter = 'blur(0px)'
       }, 1000)

})