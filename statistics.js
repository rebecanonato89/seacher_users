const authors = JSON.parse(localStorage.getItem('chave'));
const statics = document.querySelector('.statics');

console.log("Stastics Authors: ", authors);


let amountMale = 0;
let amountFemale = 0;
let amountAge = 0;
for (var author of authors) {
    if (author.gender === "female") amountFemale++;
    else amountMale++;
    amountAge += author.dob.age;
}

const html = `
                <p> <b>Female:</b> ${amountFemale} </p>
                <p> <b>Male:</b> ${amountMale} </p>
                <p> <b>Age:</b> ${amountAge} </p>
                <p> <b>Media Age:</b> ${amountAge/authors.length} </p>
            `;
const div = document.createElement('div');
div.innerHTML = html;
statics.appendChild(div);