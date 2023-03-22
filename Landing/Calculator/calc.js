let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target)
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }else if(e.target.innerHTML == "C"){
        string = "";
        document.querySelector("input").value = string;
    }
    else if(e.target.innerHTML == "L"){
        document.getElementById("invert").style.background = " linear-gradient(180deg, #00E0FF 0%, rgba(0, 255, 148, 0.19) 100%)";
        document.getElementById("invertScreen").style.background = " linear-gradient(180deg, #00E0FF 0%, rgba(0, 255, 148, 0.19) 100%)";
        document.getElementById("invertScreen").style.color = "blue";
        
    }
    else if(e.target.innerHTML == "%"){
        string = eval(string/100);
        document.querySelector("input").value = string;
    }
    else if(e.target.innerHTML == "D"){
        document.getElementById("invert").style.background = "linear-gradient(180deg, #0000 0%, rgba(0, 255, 148, 0.19) 100%)";
        document.getElementById("invertScreen").style.background = "linear-gradient(180deg, #0000 0%, rgba(0, 255, 148, 0.19) 100%)";
        document.getElementById("invertScreen").style.color = "yellow";
    }
     else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
