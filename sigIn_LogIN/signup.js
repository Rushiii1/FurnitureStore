let signData = JSON.parse(localStorage.getItem("dataInfo")) || [];
function creatAccount() {
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let pswrd = document.getElementById("password").value;
    let chck1 = document.getElementById("checkbox1").checked;
    let chck2 = document.getElementById("checkbox2").checked;
    let chck3 = document.getElementById("checkbox3").checked;

    if (fname == "" || lname == "" || email == "" || pswrd == "" || !chck1 || !chck2 || !chck3) {
        alert("Invalid Input");
    }
    else {
        let data = {
            fname: fname,
            lname: lname,
            email: email,
            pswrd: pswrd
        }
        signData.push(data);
        localStorage.setItem("dataInfo", JSON.stringify(signData));
        alert("account created");
    }
}