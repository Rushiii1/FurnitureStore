// var val=  document.getElementById("quantityInput").value;

// function decreaseQuantity(){  
//     var quantityInput = document.getElementById("quantityInput");
//     var currentQuantity = parseInt(quantityInput.value);
//     if (currentQuantity >0) {
//         quantityInput.value = currentQuantity - 1;
//     }
// }

// function increaseQuantity(){
//     var quantityInput = document.getElementById("quantityInput");
//     var currentQuantity = parseInt(quantityInput.value);
    
//     if (currentQuantity < 10) {
//       quantityInput.value = currentQuantity + 1;
//   }
// }

// var Decrease = document.getElementById("Decrease");
// Decrease.addEventListener("click",decreaseQuantity);

// var Increase = document.getElementById("Increase");
// Increase.addEventListener("click",increaseQuantity);

    


var  obj=[
    {
    img:"data:image/jpeg;base64,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",
    Title:"Arthur Chair",
    Code:"EAXKJF",
    Dimension:"80X104X190",
    Color:"Black",
    Price:"9999"
},
{
    img:"data:image/jpeg;base64,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",
    Title:"Space Chair",
    Code:"ADBCHU",
    Dimension:"190X80X100",
    Color:"White",
    Price:"11111"
},


];

// var Data=localStorage.getItem("cartlist");
// console.log(Data);

var targetElement = document.getElementById("Products");



function display(data){ 
    // document.getElementById("Products").innerHTML="";
    data.forEach(ele => {
  let Prod=document.createElement("div");
  Prod.setAttribute("id","Product");
        let first=document.createElement("div");
        first.setAttribute("id","First-Div");
        
      let Image=document.createElement("img");      
      Image.setAttribute("id","Prod_img");
      Image.src=ele.img;

      first.append(Image);

    //   console.log(ele.img);


      let second=document.createElement("div");
      second.setAttribute("id","Second-Div");
      
      let Prod_head=document.createElement("div");
      Prod_head.setAttribute("id","Prod_Head");
      let title=document.createElement("h5");
      title.setAttribute("id","Prod_Title");
      title.innerText=ele.Title;
      Prod_head.append(title);

        
      let amount=document.createElement("div");
      amount.setAttribute("id","Amount");
      amount.textContent="Amount :"+ele.Price+"₹";

      let Delete=document.createElement("button");
      Delete.setAttribute("id","Delete");
      Delete.innerText="X";


      let Quantity=document.createElement("div");
      Quantity.setAttribute("id","Prod_quantity");

      let increase_button=document.createElement("button");
      increase_button.setAttribute("id","Increase");

      let input=document.createElement("input");
      input.setAttribute("id","quantityInput");
      input.setAttribute("type","number");
      input.setAttribute("value","1","10");

      let decrease_button=document.createElement("button");
      decrease_button.setAttribute("id","Decrease");

        Quantity.append(increase_button,input,decrease_button);    
      second.append(Quantity,amount);

   
    

      // console.log(obj);
      console.log(ele.name);
      // console.log(ele.Color);/
    
        Prod.append(first,second);
      targetElement.append(first,second);
    });
  }




// function display(data){

  

//     data.forEach(ele => {
       

//         let img=document.getElementById("Prod_img");
//         img.src=ele.img

//         let title=document.getElementById("Prod_Title");
//         title.textContent=ele.Title;

//         let code=document.getElementById("Prod_code");
//         code.textContent=ele.Code;
        
//         let dime=document.getElementById("Prod_Dimension");
//         dime.textContent=ele.Dimension;

//         let color=document.getElementById("Prod_Color");
//         color.textContent=ele.Color;


//     });
// }


// display(obj);





if (targetElement) {
  // Your code to append elements goes here

  // display(Data);
display(obj);


} else {
  console.error("Target element not found.");
}

document.getElementById("next-button").addEventListener("click",next);



function next(){
  window.location.href="Information.html"
}




