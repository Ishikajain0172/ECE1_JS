let heading = document.getElementById("heading");
let para = document.getElementById("para");
let textInput = document.getElementById("textInput");

let changeHeadingBtn = document.getElementById("changeHeadingBtn");
let changeBgBtn = document.getElementById("changeBgBtn");
let increaseFontBtn = document.getElementById("increaseFontBtn");
let toggleParaBtn = document.getElementById("toggleParaBtn");

// Change Heading
changeHeadingBtn.addEventListener("click", function () {
    let newText = textInput.value;
    if (newText !== "") {
        heading.innerText = newText;
    } else {
        alert("Please enter some text!");
    }
});

// Change Background Color
changeBgBtn.addEventListener("click", function () {
    let colors = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lavender"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Increase Font Size
increaseFontBtn.addEventListener("click", function () {
    let currentSize = window.getComputedStyle(para, null).getPropertyValue("font-size");
    let newSize = parseFloat(currentSize) + 2;
    para.style.fontSize = newSize + "px";
});

// Show / Hide Paragraph
toggleParaBtn.addEventListener("click", function () {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});