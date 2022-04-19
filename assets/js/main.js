let personOne = document.getElementById('input-person-eins');
let personTwo = document.getElementById('input-person-zwei');

let output = document.getElementById('output');

function compareAge() {
    console.log('compareAge() runs');
    let diff = personOne.value - personTwo.value;
    output.innerHTML = diff;
}