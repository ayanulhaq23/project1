
let circle = document.querySelector('#circle');
var btn=document.querySelector('#btn')
const svgelem = document.querySelector('svg');
var onclickSmallScreen = document.querySelector(".smallScreenOnclick");

   window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
});

btn.addEventListener('click',function(){
t1.reverse();
setTimeout(function(){
    svgelem.classList.add('animate');
}, 3500)
});
onclickSmallScreen.addEventListener('click',function(){
    t1.reverse();
    setTimeout(function(){
        svgelem.classList.add('animate');
    }, 3500)
    });



// third commoit


var t1=gsap.timeline();



t1
.from('#wrapper',{
    duration:4,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration:2,
    width:0,
    ease:'Expo.easeInOut',
    // opacity:0
},'-=2.5')

.from('#blackcard',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')

.from('#linelem',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')
.from(".smallScreenOnclick",{
    duration:2,
    y:30,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#linelem .line',{
    duration:2,
    width:0,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')

.from('#blackcard p',{
    duration:1,
    y:30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')

.from('#sidelem',{
    duration:2,
    x:30,
    ease:'Expo.easeInOut',
    opacity:0
},'-=2')


