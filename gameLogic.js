// how to make variables
// let name = document.createElement("h1");
// let lastName = document.createElement("div");

// Parent Container
const gameContainer = document.querySelector("#gameContainer");
gameContainer.classList.add(
  "bg-blue-800",
  "text-center",
  "p-0",
  "m-0",
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "w-screen",
  "h-auto",
  "border-4",
  "border-green-600",
  "text-black",
  "bold",
  "text-2xl",
  "font-bold",
);

// title
function callTitle() {
  let title = document.createElement("h1");
  title.textContent = "etch a sketch";
  title.className =
    "bg-orange-400 m-0 p-0 w-full h-20 text-5xl  border-4 border-black flex items-center justify-center text-black font-bold";
  gameContainer.append(title);
}
callTitle();

let gridLevelBtn = document.createElement("button");
gridLevelBtn.textContent = "levels";
gridLevelBtn.classList.add(
  "bg-stone-400",
  "border-4",
  "border-green-600",
  "w-32",
  "h-32",
  "object-center",
  "m-4",
);
gridLevelBtn.addEventListener("click", () => {
  const GridSize = Number(
    prompt("Enter a grid size: (4x4 is the smallest size, 16x16 is the max.)"),
  );

  if (GridSize < 4 || GridSize > 16) {
    alert("Please enter a number between 4 and 16");
    return;
  }

  createBlocks(GridSize);
});
gameContainer.append(gridLevelBtn);
createBlocks(3);

// Create cell function
function createBlocks(size) {
  for (let col = 0; col < size; col++) {
    const blockContainer = document.createElement("div");
    // block.textContent = "col";
    blockContainer.classList.add(
      "flex",
      "flex-row",
      "items-center",
      "justify-center",
      "text-blue-800",
    );

    // Cells blocks
    for (let row = 0; row < size; row++) {
      const cell = document.createElement("div");
      cell.classList.add(
        "bg-green-600",
        "border-4",
        "border-blue-900",
        "h-24",
        "w-24",
      );
      cell.textContent = "";

      cell.addEventListener("mouseenter", (e) => {
        e.target.classList.add("bg-red-200");
      });

      cell.addEventListener("mouseout", (e) => {
        e.target.classList.replace("bg-red-200", "bg-red-600");
      });

      blockContainer.append(cell);
    }
    gameContainer.append(blockContainer);
  }
}
