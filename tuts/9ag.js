function display9a() {
    console.log(document.querySelector("#nAButton").innerHTML);
}

function change9b() {
    let newTxt = document.querySelector("#nBButton").innerHTML = "9b done!";
    console.log(newTxt)
}

function displayChoice(choice) {
    if (choice === "heads") {
        document.querySelector("#displayParagraph").innerHTML = "heads";
    } else {
        document.querySelector("#displayParagraph").innerHTML = "tails";
    }
    console.log(document.querySelector("#displayParagraph").innerHTML);
}



document.getElementById("nAButton").addEventListener("click", () => display9a());

document.getElementById("nBButton").addEventListener("click", () => change9b());

document.getElementById("headsButton").addEventListener("click", () => displayChoice("heads"));

document.getElementById("tailsButton").addEventListener("click", () => displayChoice("tails"));
