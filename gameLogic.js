// how to make variables
// let name = document.createElement("h1");
// let lastName = document.createElement("div");

// Parent Container
const gameContainer = document.querySelector("#gameContainer");
gameContainer.className =
  "w-screen h-auto bg-stone-400 text-center p-0 m-0 flex flex-col items-center justify-center";

// title
function callTitle() {
  let title = document.createElement("h1");
  title.textContent = "etch a sketch";

  title.className =
    "bg-orange-400 m-0 p-4 text-green-800 w-full h-100 text-5xl border-4 border-black ";

  gameContainer.append(title);
}
callTitle();

// grid

function createBlocks() {
  for (let b = 0; b < 4; b++) {
    const block = document.createElement("div");

    block.textContent = " I'm only a square";
    block.classList.add("bg-blue-300", "w-32", "h-32");

    gameContainer.append(block);
  }
}

createBlocks();
