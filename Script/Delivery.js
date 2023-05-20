const showInputButton = document.getElementById("card");
// const closeInputButton = document.getElementById("card");
const overlay = document.getElementById("overlay");


var total=localStorage.getItem("amount");


showInputButton.addEventListener("click", function() {
  overlay.style.display = "block";
});

closeInputButton.addEventListener("click", function() {
  overlay.style.display = "none";
});

let card_num=[];

document.getElementById("amount").innerText="₹"+total; 

document.getElementById("closeInputButton").addEventListener("click",proceed);



function proceed(){
    card_num=document.getElementById("number").value;
    if(card_num.length<14){
        alert("Please Enter Correct Card Number");
    }else{
        window.location.href="#";
    }

}