import "/styles/style.css";
import { fruitsInfo } from "./fruits.js";
import { DOMSelectors } from "./DOM.js";
console.log(fruitsInfo);
  
DOMSelectors.toggleTheme.addEventListener("click", function () {
    if (document.body.classList.contains("light")){
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    else{
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
});
