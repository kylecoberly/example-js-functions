function substituteWords(){
  const textInput = document.querySelector("#text-input").value
  document.querySelector("#text-output").textContent = textInput
}

const button = document.querySelector("#transform")
button.onclick = substituteWords // No parentheses!
