// variables
let h1 = document.createElement("h1");
let div = document.createElement("div");

const title = (h1.textContent = "etch a sketch");
title.className = "bg-green-700";

const gameContainer = document.querySelector("#gameContainer");

gameContainer.append(h1);
