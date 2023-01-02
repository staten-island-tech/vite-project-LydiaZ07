import "../styles/styles.css";
import {fruitsInfo} from "./fruits.js";
import { DOMSelectors} from "./DOM.js";
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
const createProduct = function (fruitsInfo) {
    DOMSelectors.products.insertAdjacentHTML(
        "beforeend",
        `<div id="productCard">
        <p><img src=${fruitsInfo.img}></p>
        <h2>${fruitsInfo.name}</h2>
        <button id="shopBtn">Shop Now</button>
        </div>`
    );
}

fruitsInfo
.forEach((fruit) => createProduct(fruit));

const remove = function(){
    document.querySelectorAll("#productCard")
    .forEach((card) => card.remove);
};

const mapData = function (){
    fruitsInfo
    .map((fruit) => ({
        name: fruit.name,
        type: fruit.type,
        img: fruit.img,
        popular: fruit.popular,
        description: fruit.description
    }))
};

const filterProducts = {
    typeAll: function (){
        DOMSelectors.allFruits.addEventListener("click", function (){
            remove();
            mapData();
            fruitsInfo
            .forEach((fruit) => {
                console.log(fruit.name);
                createProduct(fruit);
            });
        });
    },

typeRed: function (){
    DOMSelectors.red.addEventListener("click", function(){
        remove();
        mapData();
        fruitsInfo
        .filter((fruit) => fruit.type.includes("Red"))
        .forEach((fruit) => {
            console.log(fruit.name);
            createProduct(fruit);
        });
    });
},
typeOrange: function (){
    DOMSelectors.orange.addEventListener("click", function(){
        remove();
        mapData();
        fruitsInfo
        .filter((fruit) => fruit.type.includes("Orange"))
        .forEach((fruit) => {
            console.log(fruit.name);
            createProduct(fruit);
        });
    });
},
typeYellow: function (){
    DOMSelectors.yellow.addEventListener("click", function(){
        remove();
        mapData();
        fruitsInfo
        .filter((fruit) => fruit.type.includes("Yellow"))
        .forEach((fruit) => {
            console.log(fruit.name);
            createProduct(fruit);
        });
    });
},
typeGreen: function (){
    DOMSelectors.green.addEventListener("click", function(){
        remove();
        mapData();
        fruitsInfo
        .filter((fruit) => fruit.type.includes("Green"))
        .forEach((fruit) => {
            console.log(fruit.name);
            createProduct(fruit);
        });
    });
},
typeBlue: function (){
    DOMSelectors.blue.addEventListener("click", function(){
        remove();
        mapData();
        fruitsInfo
        .filter((fruit) => fruit.type.includes("Blue"))
        .forEach((fruit) => {
            console.log(fruit.name);
            createProduct(fruit);
        });
    });
},
typePurple: function (){
    DOMSelectors.purple.addEventListener("click", function(){
        remove();
        mapData();
        fruitsInfo
        .filter((fruit) => fruit.type.includes("Purple"))
        .forEach((fruit) => {
            console.log(fruit.name);
            createProduct(fruit);
        });
    });
},
typeLeastMost: function(){
    DOMSelectors.popularLeastMost.addEventListener(
        "click", function(){
            remove();
            mapData();
            fruitsInfo
            .sort((a,b) => a.popular - b.popular)
            .forEach((fruit) => {
                console.log(fruit.name, fruit.popular);
                createProduct(fruit);
            });
        }
    );
}, 

typeMostLeast: function (){
    DOMSelectors.popularMostLeast.addEventListener("click", function(){
        remove();
        mapData();
        fruitsInfo
        .sort((a,b) => b.popular - a.popular)
        .forEach((fruit) => {
            console.log(fruit.name, fruit.popular);
            createProduct(fruit);
        });

    });
}
};

filterProducts.typeAll();
filterProducts.typeRed();
filterProducts.typeOrange();
filterProducts.typeYellow();
filterProducts.typeGreen();
filterProducts.typeBlue();
filterProducts.typePurple();
filterProducts.typeLeastMost();
filterProducts.typeMostLeast();



