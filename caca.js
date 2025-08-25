// ===== Config =====
const SIZE = 15;            // 15x15
const ROUND_TIME = 120;     // segundos
const DIRECTIONS = [
  [0, 1],   // → direita
  [1, 0],   // ↓ baixo
  [1, 1],   // ↘ diag
  [0, -1],  // ← esquerda
  [-1, 0],  // ↑ cima
  [-1, -1], // ↖ diag
  [1, -1],  // ↙ diag
  [-1, 1],  // ↗ diag
];

// Palavras com rótulo (exibição) e forma normalizada (grade)
const palavras = [
  "ARCANJOS","ATALAIA","UNIFORÇA","ESPORTES","MÍDIA",
  "CULTURA","HELP","UNIVERSITÁRIOS","ALTARJOVEM","ASSISTENTESFJU",
  "TEEN","EBI","UNISOCIAL","TERAPIA","CALEBE",
  "GODLLYWOOD","INTELLIMEN","OBREIROS","ALTAR"
];

const gridSize = 15;
let timer;
let tempoRestante = 120;

function criarGrade() {
  const game = document.getElementById("game");
  game.innerHTML = "";
  game.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  let grid = Array(gridSize).fill().map(() => Array(gridSize).fill(""));

  // Colocar palavras
  palavras.forEach(palavra => {
    let colocado = false;
    while (!colocado) {
      let linha = Math.floor(Math.random() * gridSize);
      let col = Math.floor(Math.random() * (gridSize - palavra.length));
      if (grid[linha].slice(col, col + palavra.length).every(c => c === "")) {
        for (let i = 0; i < palavra.length; i++) {
          grid[linha][col + i] = palavra[i];
        }
        colocado = true;
      }
    }
  });

  // Preencher espaços vazios
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === "") {
        grid[i][j] = letras[Math.floor(Math.random() * letras.length)];
      }
    });
  });

  // Renderizar
  grid.flat().forEach(letter => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.textContent = letter;
    div.addEventListener("click", () => {
      div.classList.toggle("selected");
    });
    game.appendChild(div);
  });

  mostrarPalavras();
}

function mostrarPalavras() {
  const ul = document.getElementById("words");
  ul.innerHTML = "";
  palavras.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    ul.appendChild(li);
  });
}

function iniciarTimer() {
  clearInterval(timer);
  tempoRestante = 120;
  document.getElementById("timer").textContent = tempoRestante;
  timer = setInterval(() => {
    tempoRestante--;
    document.getElementById("timer").textContent = tempoRestante;
    if (tempoRestante <= 0) {
      clearInterval(timer);
      alert("⏰ Tempo esgotado!");
      document.getElementById("game").innerHTML = "<h2>Fim do jogo!</h2>";
    }
  }, 1000);
}

document.getElementById("newGame").addEventListener("click", () => {
  criarGrade();
  iniciarTimer();
});

criarGrade();
iniciarTimer();
