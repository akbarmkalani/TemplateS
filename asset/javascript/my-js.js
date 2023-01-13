/* const { id } = require("generator-code/generators/app/generate-colortheme"); */

/* $(".hambrger-menu").hide(function () {
   
})
 */
$("#icon").click(function() {
    $(".hambrger-menu").fadeToggle(1000)
    
}); 
 
$(".change").click(function() {
    
    $("li:first-child").css('background-color','#0f142a');
});
/* $(" .contact-titel").hide(); */
/* 
 $(".show-contact").click(function(event) {
    event.preventDefault();
     $(".contact-titel").show();
  
 }); 
 */
 /* $(".show-contact").on(function(event) {
    event.preventDefault();
    $(".contact-titel").show();
  
}); */
/* $(".show-contact").click(
    function(event) {
       event.preventDefault();
     //   alert('Picked: '+ $(this).attr('id').slice(4)); 
       $(".contact-titel").show();
    }
 );

 $("#close").click(function () {
    $(".contact-titel").hide();
 })
 */


let showContact = document.querySelector(".show-contact");
let contact = document.querySelector(".contact");
let closeC = document.querySelector(".close");

let  userNameInt = document.getElementById("username-int");
let emailInt = document.getElementById("email-int");
let submitSend = document.getElementById("submit");
let userNameMsg = document.querySelector(".username-msg");
let emailMsg = document.querySelector(".email-msg");
let sendMsg = document.querySelector(".submit-btn")
/* let sendMsg =  Document.querySelector(".submit-btn"); */


showContact.addEventListener("click", function (event) {  
    event.preventDefault;
    contact.style.display = 'block'; 
})

closeC.addEventListener("click", function () {
    contact.style.display = 'none' 
})
submitSend.addEventListener("click", ValidateLoginForm)
function  ValidateLoginForm (event) {
     event.preventDefault();
     userNameMsg.innerText = "";
     emailMsg.innerText = "";
     sendMsg.innerText = "";

    const userValue = userNameInt.value;
    const emailValue = emailInt.value;
     let ifsendData = true 

     if(userValue.length === 0)  {
        userNameMsg.innerText = "Please Enter validet name"
        ifsendData = false;
     }

    if(emailValue.length === 0 || emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) {
        emailMsg.innerText = "Please Enter Validet Email";
       ifsendData = false;
    } 

   if(ifsendData) {
     const body = JSON.stringify ({
        username: userValue,
        email:emailValue,

     })
     const headers = {
        "Contant-Type": "application/json"
     }
      fetch('https://jsonplaceholder.ir/users', {
        method: "POST",
        body: body,
        headers: headers
      }) 
      .then(response =>{
    if(response.ok) {
             sendMsg.innerText = " Your message send successfully" 
        }
      })
   }
}