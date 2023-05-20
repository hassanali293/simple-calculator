// Get the input box element
var inputBox = document.getElementById("inputBox");

// Add event listener to all buttons
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.innerText;

    if (value === "C") {
      // Clear the input box
      inputBox.value = "";
    } else if (value === "CE") {
      // Remove the last character from the input box
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (value === "=") {
      try {
        // Evaluate the expression in the input box
        inputBox.value = eval(inputBox.value);
      } catch (error) {
        // Handle any errors that occur during evaluation
        inputBox.value = "Error";
      }
    } else if (value === "%") {
      // Calculate the percentage of the value in the input box
      inputBox.value = eval(inputBox.value) / 100;
    } else {
      // Append the clicked button's value to the input box
      inputBox.value += value;
    }
  });
}
