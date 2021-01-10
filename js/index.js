console.clear();

console.log("Hello !!!");
let x = 0;
// this is a comment
/* this is a long comment it can go on for multiple lines */
if (x > 2) {
  console.log("It was greater!");
} else {
  console.log("It was not greater");
}
function sum(x, y) {
  let answer = x + y;
  return answer;
}

let result = sum(7, 73);
console.log(result);
let result2 = sum(55, 55);
console.log(result2);

let mybutton = document.getElementById("pressmebutton");
mybutton.addEventListener("click", sayhi);
function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innerText = "Hello!!";
}
