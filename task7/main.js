// const heightInput = document.getElementById("heightInput");
// const weightInput = document.getElementById("weightInput");
// const cBMIBtn = document.getElementById("cBMI");
// const result = document.getElementById("result");
// const statusSpan = document.getElementById("status");

// function calculateBMI() {
//   var h = +heightInput.value;
//   var w = +weightInput.value;

//   var r = w / (h * h);
//   r = r.toFixed(2);
//   var s = "";
//   if (r < 18.5) {
//     s = "underweight";
//     // statusSpan.style.color = "green";
//     statusSpan.classList.add("underweight");
//   } else if (r >= 18.5 && r < 24.9) {
//     s = "normal";
//     statusSpan.classList.add("normal");
//   } else if (r >= 25 && r < 29.9) {
//     s = "overweight";
//     statusSpan.classList.add("overweight");
//   } else {
//     s = "Obese";
//   }

//   result.innerText = r + " ";
//   statusSpan.innerText = s;
// }

// cBMIBtn.addEventListener("click", () => {
// });





const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const cBMIBtn = document.getElementById("cBMI");
const result = document.getElementById("result");
const statusSpan = document.getElementById("status");

function calculateBMI() {
  try {
    var h = +heightInput.value;  
    var w = +weightInput.value;  

    if (isNaN(h) || isNaN(w)) {
      throw new Error("Put correct numbers, Gali without ridicule.");
    }
    if (h <= 0 || w <= 0) {
      throw new Error("Put numbers bigger than zero, because I don't need a headache.");
    }

    var r = w / (h * h);  
    r = r.toFixed(2);  

    var s = "";  

    
    if (r < 18.5) {
      s = "underweight-anta-msh-tmam-hek";
      statusSpan.classList.add("underweight-anta-msh-tmam-hek");
      statusSpan.style.color = "red ";


    } else if (r >= 18.5 && r < 24.9) {
      s = "normal  ro7 tal3a";
      statusSpan.classList.add("normal");
      statusSpan.style.color = "green";

    } else if (r >= 25 && r < 29.9) {
      s = "overweight-oof-lesh-kl-had?";
      statusSpan.classList.add("overweight-oof-lesh-kl-had?");
      statusSpan.style.color = "red";


    } else {
      s = "Obese-sho-alqesa-ya-kbeer!";
      statusSpan.style.color = "red ";

    }

    result.innerText = r + " ";  
    statusSpan.innerText = s;  
  } catch (error) {
    result.innerText = "Error: " + error.message;
    statusSpan.innerText = "";
  } finally {
    alert("BMI calculation attempt finished.");
  }
}


