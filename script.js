"use strict"

const button = document.querySelector(".btn");
const input = document.querySelector(".input");
const ul = document.querySelector("ul");

button.addEventListener ("click", function() {

    const texte = input.value;

if (texte !=="") {
    
    const li = document.createElement("li");
    
    li.textContent = texte;

    ul.appendChild(li);

    input.value = "";
}

const deleteButton = document.createElement("button");

deleteButton.textContent = "supprimer";

deleteButton.classList.add("delete-Btn");

deleteButton.onclick = function() {

    container.removeChild(li);
}

    li.appendChild(deleteButton);

    container.appendChild(li);

});