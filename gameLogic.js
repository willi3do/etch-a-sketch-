// how to make variables
// let name = document.createElement("h1");
// let lastName = document.createElement("div");

// Parent Container
const gameContainer = document.querySelector("#gameContainer");
gameContainer.className = "w-screen h-auto bg-stone-400 flex-col text-center";

// title
function callTitle() {
  let title = document.createElement("h1");
  title.textContent = "etch a sketch";

  title.className =
    "bg-orange-400 m-0 p-4 text-green-800 w-full h-100 text-5xl border-4 border-black  ";

  gameContainer.append(title);
}
callTitle();

// grid
// const block = document.createElement("div");
// block.className = " bg-blue-700 w-40 h-40";

// block.textContent = " I'm only a square";

// gameContainer.append(block);
