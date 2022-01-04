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
  color: ['#6E3CBC', '#7267CB'],
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
                maxParticles: 15,
                connectParticles: true
            }
        }
]
});


const records_wrap = document.querySelector(".records");
const records_numbers =document.querySelectorAll(".number")


window.addEventListener("scroll", ()=>{
    countUp();
});

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}


function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
        const updateCount = () => {
            let currentNum = +numb.innerText;
            let maxNum = +numb.dataset.num;
            let speed = 5000;
            const increment = Math.ceil(maxNum / speed);
            

            if(currentNum < maxNum){
                numb.innerText = currentNum +increment;
                setTimeout(updateCount, 1);
            }
            else{
                numb.innerText = maxNum;
            }
        };

        setTimeout(updateCount,200);

    });

    
}