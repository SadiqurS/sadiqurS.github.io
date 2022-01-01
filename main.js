const typedTextSpan = document.querySelector(".typed-text");
const CursorSpan = document.querySelector(".cursor");

const textArray = ["Programmer", "Web-Developer","College-Student", "Aspiring Software-Engineer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        if(!CursorSpan.classList.contains("typing")) CursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(type, typingDelay);
    }
    else{
        CursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase (){
    if(charIndex > 0) {
        if(!CursorSpan.classList.contains("typing")) CursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex --;
        setTimeout(erase, erasingDelay);
    }
    else {
        CursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);

    }
}

document.addEventListener("DOMContentLoaded",function(){
   if(textArray.length) setTimeout(type, newTextDelay + 250);
});

window.onload = function() {
    Particles.init({
      selector: '.background'
    });
};

  var particles = Particles.init({
	selector: '.background',
  color: ['#00ADB5', '#71C9CE'],
  connectParticles: true,
  responsive: [{
  	breakpoint: 800,
    options: {
    	color: '#00C9B1',
    	maxParticles: 80,
      connectParticles: false
    }
  }]
});

particles.init({
    selector:'.background',
    maxParticles: 150,


    responsive: [
        {
            breakpoint:768,
            options: {
                maxParticles:50,
                connectParticles: true
            }
        },  {
            breakpoint:425,
            options:{
                maxParticles: 25,
                connectParticles: true
            }
        },  {
            breakpoint: 425,
            options: {
                maxParticles: 0
            }
        }
]
});






