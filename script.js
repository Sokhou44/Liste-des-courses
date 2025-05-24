"use strict";

const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

button.addEventListener ("click", function() {

    const texte = input.value;

if (texte !=="") {
    
    const li = document.createElement("li");
    
    li.textContent = texte;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Supprimer";

    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
      ul.removeChild(li);
    });

    li.appendChild(deleteBtn);

    ul.appendChild(li);

    input.value = ""; 
}

});