let player = {
  name: "",
  chips: 100,
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;

const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards");
const sumEl = document.getElementById("sum");
const playerNameEl = document.getElementById("player-name");
const playerChipsEl = document.getElementById("chips");

function startGame() {
  isAlive = true;
  hasBlackjack = false;
  cards = [];
  sum = 0;

  // Reset UI
  messageEl.textContent = "Want to play a round?";
  cardsEl.textContent = "Cards:";
  sumEl.textContent = "Sum:";

  // Initial 2 cards
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;

  renderGame();
}

function newCard() {
  if (isAlive && !hasBlackjack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10; // Face cards
  } else if (randomNumber === 1) {
    return 11; // Ace
  } else {
    return randomNumber; // Number cards
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;

  // Update player display
  playerNameEl.textContent = `Player: ${player.name}`;
  playerChipsEl.textContent = `$${player.chips}`;

  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "Blackjack!";
    hasBlackjack = true;
    player.chips += 10; // Example of chip increment on Blackjack
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
    player.chips -= 10; // Example of chip deduction on losing
  }
}

// Get the elements
const newGameButton = document.getElementById("start-game");
const newCardButton = document.getElementById("new-card");

// Function to start a new game
function startNewGame() {
  // Disable the new game button while the game cycle is ongoing
  newGameButton.disabled = true;

  // Logic for starting a new game (e.g., reset the game state, deal cards, etc.)
  console.log("Starting new game...");

  // Simulate the game cycle (e.g., new card drawn or some game logic)
  setTimeout(() => {
    // Enable the new game button after the cycle is complete
    newGameButton.disabled = false;
    console.log("Game is ready for a new round!");
  }, 2000); // Adjust the time to match the game cycle duration
}

// Function to draw a new card
function drawNewCard() {
  // New card drawing logic (e.g., drawing a card, updating the display, etc.)
  console.log("Drawing a new card...");

  // Disable the new game button during the card drawing phase
  newGameButton.disabled = true;

  // Simulate card drawing process
  setTimeout(() => {
    // Re-enable the "New Game" button after drawing a new card
    newGameButton.disabled = false;
    console.log("Card drawn. You can start a new game now.");
  }, 1500); // Adjust this time to match the duration for drawing the card
}

// Event listeners
newGameButton.addEventListener("click", startNewGame);
newCardButton.addEventListener("click", drawNewCard);
