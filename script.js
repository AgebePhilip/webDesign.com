

/*------------section----for menu function ------*/
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.toggle('active');
}
/*------end--of the --menu------section----*/




/*------------section----for moving ---text---*/
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  /*--- end of ---------section----for moving ---text---*/


 /*--------begins ---booking systems----*/



 var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}

/*end of -----booking section---*/

/*--------paystack----integration js*/

const form = document.getElementById("payForm");
form.addEventListener("submit",payNow);
function payNow(){
  //prevent normal form submit
  e.preventDefault();
  //set configuration
  FlutterwaveCheckOut({
public_key: "FLWPUBK_TEST-aef708afcbdb91e6b6fa82bee4315e13-X",

tx_ref:"ak_"+Math.floor((Math.random()*10000000)+1),
amount:document.getElementById("amount").value,
currency:"NGN",
customer: {
  email:document.getElementById("email").value,
phonenumber:document.getElementById("phoneNumber").value,
name:document.getElementById("fullName").value
},
callback:function(data){
  console.log(data);
}
  });
}