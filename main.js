// Start Animation button More & Book now
const btnMore = document.querySelector(".btn-more");
const divMore = document.querySelector(".showMore-div");
const btnBooking = document.querySelector(".btn-booking");
const divBooking = document.querySelector(".booking-menu");

function showMore(){
    divMore.classList.toggle("slideIn");
    btnMore.classList.toggle("slideIn");
    btnBooking.classList.add("disappear");   
    if(divBooking.classList.contains("slideIn")==true){
        divBooking.classList.remove("slideIn");
    }
    if(btnMore.classList.contains("slideIn")==false) {
        btnBooking.classList.remove("disappear");
        btnBooking.classList.remove("slideIn");
    }  
}
    let menuOpen = false;
    btnMore.addEventListener('click', () => {
    if(!menuOpen) {
        btnMore.classList.add('open');
        menuOpen = true;
    } else {
        btnMore.classList.remove('open');
        menuOpen = false;
    }
    });

function showBookingMenu(){
    btnBooking.classList.toggle("slideIn");
    divBooking.classList.toggle("slideIn");
}
// End Animation button More & Book now


// Start Animation show Leave a message
const clickMess = document.querySelector(".element-fixed .leave-message");
const divSupport =document.querySelector(".element-fixed .support");

function showSupport(){
    divSupport.classList.add("show");
}

function minimize(){
    divSupport.classList.remove("show");
}
// End Animation show Leave a message

// Start show input in support
function showInput(){
    const moreInput = document.querySelector(".more-input");
    moreInput.innerHTML = '<input class="input-email" required placeholder="Email"></input>'
    const inputEmail = document.querySelector(".input-email");
    const inputName = document.querySelector(".input-name");
    
    Object.assign(inputEmail.style,{
        width: "100%",
        height: "32px",
        padding: "6px",
        "border-radius": "5px",
        border:"#bababa 1px solid",
        "margin-top": "5px"
    })
    inputName.placeholder = "Name"

}
function Blank(){
    const textArea = document.querySelector(".element-fixed .support__form textarea")
    const warn = document.querySelector(".element-fixed .support__textarea .warn")
    
    textArea.style.border="solid 1px red"
    warn.innerHTML="<p>Complete this field</p>"
    Object.assign(warn.style,{
        color: "red",
        "font-style":" italic ",
        "font-weight":" bold",
        "font-size": "18px"
    })
}

// End show input in support

// start slider img
let img = document.querySelectorAll(".content__about-hotel-items .picture img");
let images1 = ['luxury-01-1.jpg', 'luxury-02-1.jpg', 'luxury-03-1.jpg', 'luxury-04-1.jpg']
let images2 = ['Food-and-drink-1.jpg', 'Food-and-drink-2.jpg', 'Food-and-drink-3.jpg', 'Food-and-drink-4.jpg']
let images3 = ['occasions-1.jpg', 'occasions-2.jpg', 'occasions-3.jpg', 'occasions-4.jpg',]
var i=0;

function prev(className){
    if(className.includes("prev-1") ){
        if (i<=0)
            i = images1.length;
        i--;
        return setImg(1);
    }
    if(className.includes("prev-2") ){
        if (i<=0)
            i = images2.length;
        i--;
        return setImg(2);
    }
    if(className.includes("prev-3") ){
        if (i<=0)
            i = images3.length;
        i--;
        return setImg(3);
    }

}
function next(className){
    if(className.includes("next-1") ){
        if (i==(images1.length-1))
            i=-1;
        i++;
        return setImg(1);
    }
    if(className.includes("next-2") ){
        if (i==(images2.length-1))
            i=-1;
        i++;
        return setImg(2);
    }
    if(className.includes("next-3") ){
        if (i==(images3.length-1))
            i=-1;
        i++;
        return setImg(3);
    }
}
function setImg(a){
    if(a==1)
        return img[0].setAttribute('src', './assets/img/room/'+images1[i]);
    if(a==2)
        return img[1].setAttribute('src', './assets/img/food/'+images2[i]);
    if(a==3)
        return img[2].setAttribute('src', './assets/img/oc/'+images3[i]);
}



// end slider img