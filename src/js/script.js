
import {showButton,paragraph} from "./dom.js";

var showPara = true;
showButton.addEventListener("click",function(){
  if (showPara) {
    showButton.textContent = "Show the paragraph! Dynamicly!";
    paragraph.style.display = "none";
    showPara = false;
  }else{
    showButton.textContent = "Hide the paragraph! Again! And again!";
    paragraph.style.display = "block";
    showPara = true;
  }
})
