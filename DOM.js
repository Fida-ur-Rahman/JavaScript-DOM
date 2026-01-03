// Create a h2 heading element with text - "Hello JavaScript" Append "From SMIT Student"
// to this text using JS.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " Form Smit student";


// Create 3 Div With comman class - "Box" Access them & add some Unique of Them.
let box= document.querySelectorAll(".box")
box[0].innerText = "New value of 1";
box[1].innerText = "New value of 2";
box[2].innerText = "New value of 3";