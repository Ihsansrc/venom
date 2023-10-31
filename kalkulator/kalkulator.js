// const kiriContainer = document.querySelector(".kiri");

// function generateButtons() {
//   for (var i = 9; i >= 1; i--) {
//     var button = document.createElement("button");
//     button.className = "tombol";
//     button.textContent = i;
//     button.setAttribute("onclick", `display('${i}')`);
//     kiriContainer.appendChild(button);
//   }
// }

// generateButtons();

// function kosong() {
//   for (var i = 3; i >= 1; i--) {
//     var button = document.createElement("button");
//     button.className = "tombol";
//     if (i == 2) {
//       button.textContent = "0";
//       button.setAttribute("onclick", "display(0)");
//     } else {
//       button.textContent = "";
//       button.setAttribute("onclick", "display()");
//     }
//     kiriContainer.appendChild(button);
//   }
// }

// kosong();

// const result = document.getElementById("screen");
// const display = (a) => {
//   if (a === "clear") {
//     result.value = "";
//   } else if (a === "del") {
//     result.value = result.value.slice(0, -1);
//   } else if (a === "action") {
//     try {
//       // Menambahkan tanda "*" eksplisit untuk memastikan perkalian diidentifikasi dengan benar
//       const sanitizedExpression = result.value.replace(/[^-()\d/*+.]/g, ""); // Membersihkan ekspresi dari karakter yang tidak valid
//       const evalResult = eval(sanitizedExpression);
//       result.value = parseFloat(evalResult); // Mengonversi hasil eval() ke angka menggunakan parseFloat()

//       if (isNaN(result.value) || !isFinite(result.value)) {
//         throw new Error("Invalid Input");
//       }
//     } catch (error) {
//       // Menangani kesalahan dengan cara yang lebih baik
//       result.value = "Error";
//       console.error(error.message);
//     }
//   } else {
//     result.value += a;
//   }
// };

const screen = document.getElementById("screen");

function appendToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = "Error";
  }
}

const coba = document.querySelector(".coba");
function tombol() {
  for (var i = 9; i >= 1; i--) {
    const tombol = document.createElement("button");
    tombol.textContent = i;
    tombol.className = "tcoba";
    tombol.setAttribute("onclick", `appendToScreen('${i}')`);
    coba.appendChild(tombol);
  }
}

tombol();
