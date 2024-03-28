document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll(".cell");
    let currentPlayer = "X";
    let gameActive = true;

    cells.forEach(cell => {
        cell.addEventListener("click", handleClick, { once: true });
    });

    function handleClick(event) {
        const cell = event.target;
        if (!gameActive || cell.textContent !== "") return;

        cell.textContent = currentPlayer;
        if (checkWin() || checkDraw()) {
            gameActive = false;
            // You can add more UI/UX enhancements here, such as displaying a message or highlighting the winning cells
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWin() {
        // Implement logic to check for winning conditions
    }

    function checkDraw() {
        // Implement logic to check for a draw
    }

    function checkForWinner() {
        // Implement logic to check for a winner
    }
});
