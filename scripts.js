var character = document.getElementById("character");
var game = document.getElementById("game");
var scoreElement = document.createElement("div"); // Added score element
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];
var speed = 2.5; // Initial speed

// Initialize score element
scoreElement.setAttribute("id", "score");
scoreElement.style.position = "absolute";
scoreElement.style.top = "10px";
scoreElement.style.left = "10px";
game.appendChild(scoreElement);

function moveLeft() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) {
        character.style.left = left - 2 + "px";
    }
}

function moveRight() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 380) {
        character.style.left = left + 2 + "px";
    }
}

document.addEventListener("keydown", (event) => {
    if (both == 0) {
        both++;
        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", () => {
    clearInterval(interval);
    both = 0;
});

var blocks = setInterval(function () {
    var blockLast = document.getElementById("block" + (counter - 1));
    var holeLast = document.getElementById("hole" + (counter - 1));
    var blockLastTop, holeLastTop;

    if (counter > 0) {
        blockLastTop = parseFloat(window.getComputedStyle(blockLast).getPropertyValue("top"));
        holeLastTop = parseFloat(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }

    if (!blockLastTop || blockLastTop < 400 || counter == 0) {
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole");
        block.setAttribute("id", "block" + counter);
        hole.setAttribute("id", "hole" + counter);
        block.style.top = (blockLastTop || 0) + 100 + "px";
        hole.style.top = (holeLastTop || 0) + 100 + "px";
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }

    var characterTop = parseFloat(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseFloat(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;

    if (characterTop <= 0) {
        alert("Game over. Score: " + (counter - 9));
        clearInterval(blocks);
        location.reload();
    }

    for (var i = 0; i < currentBlocks.length; i++) {
        let current = currentBlocks[i];
        let iblock = document.getElementById("block" + current);
        let ihole = document.getElementById("hole" + current);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";

        if (iblockTop < -20) {
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }

        if (iblockTop - 20 < characterTop && iblockTop > characterTop) {
            drop++;
            if (iholeLeft <= characterLeft && iholeLeft + 20 >= characterLeft) {
                drop = 0;
            }
        }
    }

    if (drop == 0) {
        if (characterTop < 480) {
            character.style.top = characterTop + 2 + "px";
        }
    } else {
        character.style.top = characterTop - 0.5 + "px";
    }

    // Update and display the score
    scoreElement.innerHTML = "Score: " + (counter - 9);

    // Increase speed every 1000 milliseconds (1 second)
    if (counter % 100 === 0) {
        speed -= 0.5; // Adjust this value for the desired speed increase
        clearInterval(blocks);
        blocks = setInterval(arguments.callee, speed);
    }
}, speed);
