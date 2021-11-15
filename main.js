// Start Animation button More & Book now
const btnMore = document.querySelector(".btn-more");
const divMore = document.querySelector(".showMore-div");
const btnBooking = document.querySelector(".btn-booking");
const divBooking = document.querySelector(".booking-menu");

const showMore = ()=>{
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

const showBookingMenu = () =>{
    btnBooking.classList.toggle("slideIn");
    divBooking.classList.toggle("slideIn");
}
// End Animation button More & Book now


// Start Animation show Leave a message
const clickMess = document.querySelector(".element-fixed .leave-message");
const divSupport =document.querySelector(".element-fixed .support");

const showSupport = () =>{
    divSupport.classList.add("show");
}

const minimize=()=>{
    divSupport.classList.remove("show");
}
// End Animation show Leave a message

// Start show input in support
const showInput=()=>{
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
const Blank=()=>{
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

