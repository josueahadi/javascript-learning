/*

STEPS:
1. get paragraph textContent
    a. get paragraph element using getElementById / querySelector
2. split the paragraph textContent into words and occurences
    a. Create an object and store words as keys and occurences as values
    b. sort the object by value (highest occurence - lowest occurence)
3. slice the first 12 keys (words)

*/ 

// 1. get paragraph textContent

const paragraph = document.getElementById('myParagraph').innerText;

// 2. split the paragraph textContent into words and occurences
const words = paragraph.split(' ').map((word) =>word.toLowerCase().replace(/[,;.:!?]$/, ""));
const wordOccurences = {};
words.forEach(word => {
    if (wordOccurences[word]) {
        wordOccurences[word]++;
    } else {
        wordOccurences[word] = 1;
    }
});
//console.log(wordOccurences);

const sortedbyOccurence = Object.entries(wordOccurences).sort((a,b) => b[1]-a[1]).slice(0,12).map(word=>word[0]);

let styledText = [];
let fontSize = 64;

for (let i = 0; i < sortedbyOccurence.length; i++) {
  styledText.push(`<span style="font-size: ${fontSize}px;padding:5px">${sortedbyOccurence[i]}</span>`);
  fontSize = fontSize - 4;
}

const newParagraph = document.createElement("p");
newParagraph.innerHTML = styledText.join(" ");
document.body.appendChild(newParagraph);
console.log(styledText)

var colors = [ 
    '#ff0000', '#00ff00', '#0000ff', 
    '#ff3333', '#ffff00', '#ff6600' 
];

spanElements = document.querySelectorAll("p span");
console.log(spanElements.innerHTML);
for (let span of spanElements) {
    for (let i =0; i<colors.length; i++) {
        spanElements[i].style.color = `${colors[i]}`
    }
    
}

function shuffleChildren(container) {
    for (let i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
}
  
window.onload = function() {
    shuffleChildren(newParagraph);
};
console.log(newParagraph);
