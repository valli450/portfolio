/* Common blocks */
const wrapBlock = document.querySelector(".container-wrap");
const windowWidth = window.screen.width;

/* Head text */
const text = "Hi! I'm Val A web developer";
const greedingText = document.querySelector(".greeding-text");
let number = 0;

function time(n){
    if(n){
        number = 0;
        greedingText.innerHTML = '';
    }
    setTimeout(() =>{
        greedingAnimation()
    }, 120)
}

function greedingAnimation(){
    if(number !== 26){
        if(number === 12){
            greedingText.innerHTML += '<br />';
        }
        greedingText.innerHTML += text[number];
        number++;
        time()
    }

}

/*  Mobile menu */
const menuBlock = document.querySelector(".header__line__nav");
const parentBlock = document.querySelector(".header__line");
const burgerIcon = document.getElementById("burger-icon");
const closeIcon = document.querySelector(".close-icon");

function openMenu(){
    menuBlock.style.right = '0';
    menuBlock.style.zIndex = '2';
    parentBlock.style.overflow = "visible";
    burgerIcon.style.transform = "rotate(-720deg)";
    if(windowWidth < 479){
        wrapBlock.style.zIndex = '1';
        wrapBlock.style.opacity = '1';
    }
    setTimeout(function(){
        burgerIcon.style.opacity = 0;
    }, 400)
}

function closeMenu(){
    menuBlock.style.right = '-20rem';
    wrapBlock.style.opacity = '0';
    closeIcon.style.transform = "rotate(-720deg)";
    burgerIcon.style.transform = "rotate(720deg)";
    setTimeout(function() {
        menuBlock.style.zIndex = '-2';
        parentBlock.style.overflow = "hidden";
        wrapBlock.style.zIndex = '-1';
        closeIcon.style.transform = "rotate(720deg)";
        burgerIcon.style.opacity = 1;

    }, 900)
}

/* Dark mode */
const sunnyBlock = document.querySelector(".sunny-block");
const darkBlock = document.querySelector(".dark-block");

function darkModeOn(){
    document.body.classList.add("dark");
    sunnyBlock.style.opacity = "1";
    darkBlock.style.opacity = "0";
}

function darkModeOff(){
    document.body.classList.remove("dark");
    sunnyBlock.style.opacity = "0";
    darkBlock.style.opacity = "1";
}

/* Show certificates */
let tempBlockName = '';

function  openCertificate(block){
    document.querySelector(`.${block}`).style.zIndex = "2";
    document.querySelector(`.${block}`).style.top = "50%";
    wrapBlock.style.zIndex = "1";
    wrapBlock.style.opacity = "1"
    tempBlockName = block;
}

function closeCertificate(){
    document.querySelector(`.${tempBlockName}`).style.top = "500%";
    wrapBlock.style.zIndex = "-1";
    wrapBlock.style.opacity = "0";
    setTimeout(function(){
        document.querySelector(`.${tempBlockName}`).style.zIndex = "-3";
        tempBlockName = "";
        hideError()
    }, 600)
}

/* Desktop gallery */
const imagesList = ['images/certificates/js.jpeg', 'images/certificates/python.jpeg', 'images/certificates/front-end-career.jpeg'];
const imageBlock = document.querySelector(".image-galery__block");
let numberImage = 0;

setInterval(() => {
    gallery()
}, 1800);

function gallery(){
    nextImage();
};

function nextImage(){
    if(numberImage < 3){
        imageBlock.innerHTML = `
            <img src="${imagesList[numberImage]}" alt="Frontend certificate" class="image-certificate" onclick="imageError()">
            <p class="image-error">Please click on the name of the certificate on the right side of the screen</p>
        `
        numberImage++;
    }else{
        numberImage = 0;
    }
};

/* Desktop gallery error */
const errorMessage = document.querySelector(".image-error");

function imageError(){
    errorMessage.style.opacity = '1';
}

function hideError(){
    errorMessage.style.opacity = '0';
}

/* Contact button */
const btn = document.querySelector(".mail");
const textToPush = 'contact me ';
const textKeeper = 'contact me ';
let textpopo = 'c';
let numberLetter = 1;

function textMoving(){
    if(windowWidth > 1199){
        if(numberLetter < 11){
            btn.innerHTML = `${textToPush.slice(numberLetter, 11)}${textpopo}`;
            textpopo += textKeeper[numberLetter];
            numberLetter++;
            setTimeout(function(){
                textMoving()
            }, 200)
            
        }else if(numberLetter === 200){
            btn.innerHTML = 'contact me';
            numberLetter = 1;
            textpopo = 'c';
        }else{
            numberLetter = 1;
            textpopo = 'c';
            textMoving()
        }

    }
}

function breakMoving(){
    numberLetter = 200;
}

/* Mobile project block */
const blockNameList = ['calculator-block', 'job-istings-block', 'PayAPI-block', 'countries-block', 'space-block', 'shortening-block'];

function mobileProject(project){
    close()
    document.querySelector(`.${project}`).style.opacity = '1';
    document.querySelector(`.${project}`).style.backgroundSize = '110%';
}

function close(){
    blockNameList.forEach(block => {
        document.querySelector(`.${block}`).style.opacity = 0;
        document.querySelector(`.${block}`).style.backgroundSize = '100%';
    })
}

