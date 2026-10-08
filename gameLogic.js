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
    "bg-orange-400 m-0 p-0 w-full h-20 text-5xl border-4 border-black flex items-center justify-center text-black font-bold";
  gameContainer.append(title);
}
callTitle();

let gridLevelBtn = document.createElement("button");

gridLevelBtn.textContent = "levels";
gridLevelBtn.classList.add(
  "bg-stone-400",
  "border-4",
  "border-green-600",
  "w-auto",
  "h-10",
  "object-center",
  "m-4",
);

gridLevelBtn.addEventListener("click", () => {
  const gridSize = Number(prompt("Enter a grid size: (4-100)"));

  if (gridSize < 4 || gridSize > 100) {
    alert("Please enter a number between 4 and 100");
    return;
  }

  createBlocks(gridSize);
});

let gridContainer = document.createElement("div");

gridContainer.classList.add("w-[960px]");
gameContainer.append(gridLevelBtn);

gameContainer.append(gridContainer);

createBlocks(4);

// Create cell function
function createBlocks(size) {
  gridContainer.innerHTML = "";
  const cellSize = 960 / size;
  for (let col = 0; col < size; col++) {
    const blockContainer = document.createElement("div");

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
      cell.classList.add("bg-green-600", "border-4", "border-blue-900");
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;

      cell.textContent = "";

      cell.addEventListener("mouseenter", (e) => {
        function getRandomColor() {
          const randomNumber = Math.floor(Math.random() * 256);

          return randomNumber;
        }
        const red = getRandomColor();
        const green = getRandomColor();
        const blue = getRandomColor();
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        getRandomColor();
        e.target.style.backgroundColor = randomColor;
      });

      cell.addEventListener("mouseout", (e) => {
        e.target.classList.replace("bg-red-200", "bg-red-600");
      });

      blockContainer.append(cell);
    }
    gridContainer.append(blockContainer);
  }
}

// console.log(randomColor);
// getRandomColor();
