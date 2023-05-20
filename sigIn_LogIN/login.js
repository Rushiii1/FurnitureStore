let logData = JSON.parse(localStorage.getItem("dataInfo")) || [];
let WrongTxt = document.getElementById('wrongText');
function loginUser() {
    event.preventDefault();
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let flag = 0;
    logData.map((ele)=>{
        if (ele.email == email && ele.pswrd == password) {
            flag=1;
        }
    })
    if (flag == 1) {
        alert("Sign in Successful");
        WrongTxt.textContent =  "";
        window.open("../HOME_PAGE/index.html");
    } else {
        alert("Wrong input");
        WrongTxt.textContent = "email/password wrong"
        WrongTxt.style.color = "red";
        WrongTxt.style.textAlign = "center"
    }

}