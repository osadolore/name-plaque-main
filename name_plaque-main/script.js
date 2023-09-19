// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const displayText = document.getElementById('displayText');
const displayPrint = document.getElementById('displayPrint');
const buyNow = document.querySelector('.buy-submit');
const finalDisplay = document.getElementById('final-display');

// Refactoring with Arrow Function
const countLeters = (buyNow) =>{
  const optName = buyNow.replaceAll(' ', '');
    const price = buyNow.length * 10
    const nameLength = buyNow.length

    userLeterPreview.textContent = buyNow;
    userPricePreview.textContent = '$' + price;
}


userInput.oninput = (e)=>{
  countLeters(e.target.value)
}
function display(){
  const userInput = document.querySelector('.field-input').value
  if(userInput == ""){
      displayText.textContent = 'Please input letters in the Box ';
  }
  else if(userInput === 'your name'){
      displayText.textContent = 'Please enter a new text ';
  }

  else{
      displayPrint.textContent = 'Yeey! Your purchase is successful...';
      finalDisplay.textContent = `Your selected name is "${userLeterPreview.textContent}" and your fee is ${userPricePreview.textContent} `
      finalImage.hidden = false
      finalImagery.hidden = false
      errorWarning.hidden = true
      displayText.hidden = true
  }

}

const input = document.querySelector('.field-input');
const errorWarning = document.getElementById('error-warning');

input.addEventListener("input", checkCodeLength)
input.setAttribute("maxlength", input.maxLength + 1)

function checkCodeLength() {
  const enteredCodeLength = input.value.length
  const maxLength = input.maxLength
  if (enteredCodeLength === maxLength) {
      errorWarning.hidden = false
      input.classList.add("error")
      errorWarning.textContent = `sorry! You have reached the letter limit of ${maxLength - 1} `
      errorWarning.style.backgroundColor = 'orange'
      input.value = input.value.slice(0, -1)
      displayText.hidden = true
  }
  else {
      errorWarning.hidden = true
      input.classList.remove("error")
  }
 
}

input.addEventListener("input", checkCodeLength)
function checkBlank() {
  if (userInput == "") {
      displayPrint.hidden = true
      finalDisplay.hidden = true
  }
  else {
      errorWarning.hidden = true
      input.classList.remove("error")
  }
 
}

// REFRESH
function myButton() {
  location.reload();
}


