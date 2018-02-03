import "../css/main.css";
import {showButton,paragraph} from "./dom.js";

var showPara = true;

var h = document.createElement("h1");
h.innerHTML = "Created By Js! Test!";
// console.log(h);
var body = document.getElementsByTagName("body")[0];
body.prepend(h);


showButton.addEventListener("click",function(){
  if (showPara) {
    showButton.textContent = "Dev-Server:Show the paragraph!";
    paragraph.style.display = "none";
    showPara = false;
  }else{
    showButton.textContent = "Hide the paragraph! Again! And again! Changed the context.";
    paragraph.style.display = "block";
    showPara = true;
  }
})
