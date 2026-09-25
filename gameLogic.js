// variables
// let h1 = document.createElement("h1");
let div = document.createElement("div");

// title
function callTitle() {
  let title = document.createElement("h1");
  title.textContent = "etch a sketch";

  title.className =
    "bg-orange-400 m-0 p-4 text-green-800 w-full h-100 text-5xl border-4 border-black  ";
  const gameContainer = document.querySelector("#gameContainer");
  gameContainer.className = "w-screen h-auto bg-stone-400 flex text-center";

  gameContainer.append(title);
}
callTitle();
