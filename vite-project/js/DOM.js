import { fruitsInfo } from "./fruits";

const DOMSelectors = {
    toggleTheme: document.getElementById("toggleTheme"),
    products: document.getElementById("products"),
    allFruits: document.getElementById("allFruits"),
    red: document.getElementById("red"),
    orange: document.getElementById("orange"),
    yellow: document.getElementById("yellow"),
    green: document.getElementById("green"),
    blue: document.getElementById("blue"),
    purple: document.getElementById("purple"),
    output: document.getElementById("output"),
    popularLeastMost: document.getElementById("popularLeastMost"),
    popularMostLeast: document.getElementById("popularMostLeast"),
    fullmenu: document.getElementById("fullMenu"),

};

export {DOMSelectors};

function initial() {
    fruitsInfo.forEach((item) => {
      DOMSelectors.output.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card" id="${item.name}">
              <h5 class="menu-item">${item.name}</h5>
              <img class="img" src=${item.image} alt="" class="menu-img">
              <h5 class="item-price">$${item.price}</h5>
              <button class="btn" id="addtocart">Add To Cart</button>
          </div>`
      );
    });
  }
  function red(){
    fruitsInfo
    .filter((red) => red.type.includes("red"))
    .forEach((red) => {
        DOMSelectors.output.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="menu-card" id="${red.name}">
            <h5 class="menu-item">${red.name}</h5>
            <img class="img" src="${red.image} alt="" class="menu-img">
            <h5 class="item-price">$${red.price}</h5>
            <button class="btn" id="addtocart">Add To Cart</button>
            </div>
            `
        );
    });
  }

  function orange(){
    fruitsInfo
    .filter((orange) => orange.type.includes("orange"))
    .forEach((orange) => {
        DOMSelectors.output.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="menu-card" id="${orange.name}">
            <h5 class="menu-item">${orange.name}</h5>
            <img class="img" src="${orange.image} alt="" class="menu-img">
            <h5 class="item-price">$${orange.price}</h5>
            <button class="btn" id="addtocart">Add To Cart</button>
            </div>
            `
        );
    });
  } 
  function yellow(){
    fruitsInfo
    .filter((yellow) => yellow.type.includes("yellow"))
    .forEach((yellow) => {
        DOMSelectors.output.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="menu-card" id="${yellow.name}">
            <h5 class="menu-item">${yellow.name}</h5>
            <img class="img" src="${yellow.image} alt="" class="menu-img">
            <h5 class="item-price">$${yellow.price}</h5>
            <button class="btn" id="addtocart">Add To Cart</button>
            </div>
            `
        );
    });
  }
  function green(){
    fruitsInfo
    .filter((green) => green.type.includes("green"))
    .forEach((green) => {
        DOMSelectors.output.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="menu-card" id="${green.name}">
            <h5 class="menu-item">${green.name}</h5>
            <img class="img" src="${green.image} alt="" class="menu-img">
            <h5 class="item-price">$${green.price}</h5>
            <button class="btn" id="addtocart">Add To Cart</button>
            </div>
            `
        );
    });
  }
  function blue(){
    fruitsInfo
    .filter((blue) => blue.type.includes("blue"))
    .forEach((blue) => {
        DOMSelectors.output.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="menu-card" id="${blue.name}">
            <h5 class="menu-item">${blue.name}</h5>
            <img class="img" src="${blue.image} alt="" class="menu-img">
            <h5 class="item-price">$${blue.price}</h5>
            <button class="btn" id="addtocart">Add To Cart</button>
            </div>
            `
        );
    });
  }
  function purple(){
    fruitsInfo
    .filter((purple) => purple.type.includes("purple"))
    .forEach((purple) => {
        DOMSelectors.output.insertAdjacentHTML(
            "beforeend", 
            `
            <div class="menu-card" id="${purple.name}">
            <h5 class="menu-item">${purple.name}</h5>
            <img class="img" src="${purple.image} alt="" class="menu-img">
            <h5 class="item-price">$${purple.price}</h5>
            <button class="btn" id="addtocart">Add To Cart</button>
            </div>
            `
        );
    });
  }

  function clear(){
    DOMSelectors.output.innerHTML = "";
  }

  initial();

  document.getElementById("fullMenu").addEventListener("click", function (){
    clear();
    initial();
  });

  document.getElementById("red").addEventListener("click", function (){
    clear();
    red();
  });

  document.getElementById("orange").addEventListener("click", function (){
    clear();
    orange();
  });

  document.getElementById("yellow").addEventListener("click", function (){
    clear();
    yellow();
  });

  document.getElementById("green").addEventListener("click", function (){
    clear();
    green();
  });

  document.getElementById("blue").addEventListener("click", function (){
    clear();
    blue();
  });

  document.getElementById("purple").addEventListener("click", function (){
    clear();
    purple();
  });
 


 


 


 
  