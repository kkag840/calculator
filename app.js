// Select all buttons and the display input
let btns = document.querySelectorAll(".btn");
let inp = document.querySelector("#display");

// Function to handle button press
function btnPress() {
    // Clear display
    if (this.value == "AC") {
        inp.value = "";
    }
    // Delete last character
    else if (this.value == "DE") {
        inp.value = inp.value.slice(0, -1);
    }
    // Evaluate the expression
    else if (this.value == "=") {
        try {
            inp.value = eval(inp.value);
        } catch (e) {
            inp.value = "Error";
        }
    }
    // Append the button value to display
    else {
        inp.value += this.value;
    }
}

// Attach click event listener to each button
for (let btn of btns) {
    btn.addEventListener("click", btnPress);
}
