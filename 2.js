var heading1 = document.querySelector('#heading1');
var heading2 = document.querySelector('#heading2');
var count = 0;
var colors = ["black", "blue", "red", "green"];

heading1.onclick = function() {
    heading1.style.color = "red";
}
heading2.onclick = function() {
    count++;
    heading2.style.color = colors[count % 4];
}