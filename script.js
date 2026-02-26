let sceneNumber = 1;

let image = document.getElementById("forestImage");
let caption = document.getElementById("caption");
let button = document.getElementById("nextButton");
let endMessage = document.getElementById("endMessage");

function advanceScene() {

    if (sceneNumber == 1) {
        image.src = "images/forest2.jpg";
        caption.textContent = "You move deeper in. The trees close around you. The light grows thin. Jamie encourages you to seek the One Piece.";
        sceneNumber = 2;
    }

    else if (sceneNumber == 2) {
        image.src = "images/forest3.jpg";
        caption.textContent = "You have reached the heart of the forest. It is very quiet here. Jiya sees a treasure in the center of the grove.";
        sceneNumber = 3;
    }

    else if (sceneNumber == 3) {
        endMessage.classList.remove("hidden");
        button.disabled = true;
    }
}

button.addEventListener("click", advanceScene);