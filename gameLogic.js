// how to make variables
// let name = document.createElement("h1");
// let lastName = document.createElement("div");

// Parent Container
const gameContainer = document.querySelector("#gameContainer");
gameContainer.className =
  "w-screen h-auto  text-center p-0 m-0 flex flex-col items-center justify-center";

// title
function callTitle() {
  let title = document.createElement("h1");
  title.textContent = "etch a sketch";

  title.className =
    "bg-orange-400 m-0 p-4 text-green-800 w-full h-100 text-5xl border-4 border-black ";

  gameContainer.append(title);
}
callTitle();

// Block grid

function blockContainer() {
  const bContainer = document.createElement("div");

  bContainer.textContent = "Grid Container";
  bContainer.classList.add(
    "bg-blue-800",
    "w-full",
    "h-screen",
    "border-2",
    "border-green-600",
    "flex",
    "flex-col",
  );

  function createBlocks(size) {
    for (let col = 0; col < size; col++) {
      const block = document.createElement("div");
      // block.textContent = "col";
      block.classList.add("flex", "flex-row", "items-center", "justify-center");

      for (let row = 0; row < size; row++) {
        const cell = document.createElement("div");
        // cell.textContent = "row";
        cell.classList.add(
          "bg-red-300",
          "border-8",
          "border-blue-800",
          "h-24",
          "w-24",
        );
        block.append(cell);
      }

      bContainer.append(block);
    }
  }

  createBlocks(3);

  gameContainer.append(bContainer);
}

blockContainer();
