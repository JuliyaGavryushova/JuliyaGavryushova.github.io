function send() {
    let textInput = document.getElementById("message").value;
    let nameInput = document.getElementById("name").value;
    document.getElementById("result").innerText = nameInput + ": " + textInput;
    document.getElementById("message").value = "";
    document.getElementById("name").value = "";
    console.log(nameInput + ": " + textInput);
}