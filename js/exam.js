let inp = document.querySelector(".input");
let submitQuestion = document.querySelector(".submit");

submitQuestion.onclick = () => {
  console.log(inp.value);
  if(inp.value ==  inp.getAttribute("data")){
    alert("succses")
  }
}


let calcReview = document.querySelector(".calc_review");
let toggleCalc = document.querySelector(".togglecalc");


toggleCalc.onclick = () => {
  calcReview.style.left = '0'; 
}

let endCalc = document.querySelector("#end_calc");

endCalc.onclick = () => {
  calcReview.style.left = '-20rem'; 
}