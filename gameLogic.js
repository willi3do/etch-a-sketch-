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
    "bg-orange-400 m-0 p-0 w-full h-20 text-5xl  border-4 border-black flex items-center justify-center text-black font-bold";

  gameContainer.append(title);
}
callTitle();
// createBlocks(5);

 const sizeBtn = document.createElement("button");
 

  sizeBtn.textContent = "levels";
  sizeBtn.classList.add(
    "bg-stone-400",
    "border-4",
    "border-green-600",
    "w-32",
   "object-center",
   "m-4",
    
  );

  const userInput = sizeBtn.addEventListener("click", () => {
    // const sizeInput = document.createElement("input");
    const size = Number(prompt("Enter a grid size: (4x4 the smallest size, 16 x16 the max.)"));

    if ( size < 4 || size > 16) {
      alert("Please enter a number between 4 and 16");

      return;
    }
   
    console.log(size);


  });

  // console.log(userInput);

// Block grid

function blockContainer() {
  const bContainer = document.createElement("div");
 

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
        cell.classList.add("bg-green-600", "border-4", "border-blue-900", "h-32", "w-32");
        cell.textContent = "";
       

        cell.addEventListener("mouseenter", (e) => {
          e.target.classList.add("bg-red-200"
          );
        });

        cell.addEventListener("mouseout", (e) => {
          e.target.classList.replace("bg-red-200", "bg-red-600");

        });
        block.append(cell);
      }

      bContainer.append(block);
    }
  }

  createBlocks(10);

  gameContainer.append(bContainer);
}

blockContainer();
