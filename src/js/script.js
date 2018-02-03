
import {showButton,paragraph} from "./dom.js";

var showPara = true;
showButton.addEventListener("click",function(){
  if (showPara) {
    showButton.textContent = "Show the paragraph!";
    paragraph.style.display = "none";
    showPara = false;
  }else{
    showButton.textContent = "Hide the paragraph!";
    paragraph.style.display = "block";
    showPara = true;
  }
})
