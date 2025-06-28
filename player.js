// Prevent the form from submitting (which causes the refresh)
document.querySelector(".searchbar").addEventListener("submit", (e) => {
    e.preventDefault(); // 🔒 STOP the default refresh
});

// Select search input and all player cards
const searchBox = document.querySelector(".searchbar input");
const playerCards = document.querySelectorAll(".player-card");

// Handle search as you type
searchBox.addEventListener("input", handleSearch);

// Optional: Also search when the button is clicked
document.querySelector(".searchbutton").addEventListener("click", handleSearch);

function handleSearch() {
    const query = searchBox.value.toLowerCase().trim();

    playerCards.forEach(card => {
        const playerName = card.querySelector(".player-name").textContent.toLowerCase();
        const playerPosition = card.querySelector(".player-position").textContent.toLowerCase();

        if (playerName.includes(query) || playerPosition.includes(query)) {
            card.style.display = "flex"; // Show matching cards
        } else {
            card.style.display = "none"; // Hide non-matching cards
        }
    });
}

