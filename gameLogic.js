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
    "bg-orange-400 m-0 p-4 text-green-800 w-full h-10 text-5xl border-4 border-black ";

  gameContainer.append(title);
}
callTitle();

// Block grid

function blockContainer() {
  const bContainer = document.createElement("div");
  const sizeBtn = document.createElement("button");

  sizeBtn.textContent = "levels";
  sizeBtn.classList.add(
    "bg-stone-400",
    "border-4",
    "border-green-600",
    "w-1/6",
    "h-auto",
  );

  bContainer.textContent = "Grid Container";
  bContainer.classList.add(
    "bg-blue-800",
    "w-full",
    "h-screen",
    "border-4",
    "border-green-600",
    "flex",
    "flex-col",
    "text-black",
    "bold",
    "text-2xl",
    "font-bold",
  );

  bContainer.appendChild(sizeBtn);

  function createBlocks(size) {
    for (let col = 0; col < size; col++) {
      const block = document.createElement("div");
      // block.textContent = "col";
      block.classList.add(
        "flex",
        "flex-row",
        "items-center",
        "justify-center",
        "text-blue-800",
      );
// Cells blocks
      for (let row = 0; row < size; row++) {
        const cell = document.createElement("div");
        cell.classList.add("cells");
        cell.textContent = "cell";
        // cell.classList.add(
        //   "bg-red-200",
        //   "border-8",
        //   "border-blue-900",
        //   "h-24",
        //   "w-24",
        // );

        cell.addEventListener("mouseenter", (e) => {
          e.target.classList.replace("bg-red-200", "bg-green-600");
        });

        cell.addEventListener("mouseout", (e) => {
          e.target.classList.replace("bg-green-600", "bg-red-200");
        });
        block.append(cell);
      }

      bContainer.append(block);
    }
  }

  createBlocks(2);

  gameContainer.append(bContainer);
}

blockContainer();
