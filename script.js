function changeGreeting() {
    var greeting = document.getElementById("greeting");
    if (greeting.innerHTML == "Hello World") {
      greeting.innerHTML = "Welcome to my website!";
    } else {
      greeting.innerHTML = "Hello World";
    }
}