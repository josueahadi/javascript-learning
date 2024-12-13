// Get paragraph content 
const paragraph = document.querySelector('p'); 
const text = paragraph.textContent;
//console.log(text);

// Create w9rd frequency map 
const words = text.toLocaleLowerCase().match(/\b\w+\b/g);
const frequencyMap = {};
//console.log(words);
words.forEach(word => {
  frequencyMap[word] = (frequencyMap[word] || 0) + 1;
});
//console.log(frequencyMap);

// Get top 5 most frequent words
const topWords = Object.entries(frequencyMap)
.sort((a, b) => b[1] - a[1])
.slice(0, 5)
.map(entry => entry[0]);

console.log(topWords);

// Replace words with highlighted versions 
let newContent = paragraph.textContent;
topWords.forEach(word => {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  newContent = newContent.replace(regex, match => {
    const isCapitalized = match[0] === match[0].toUpperCase();
        return `<span class="highlight ${isCapitalized ? 'underline' : ''}">${match}</span>`;
  })
});

paragraph.innerHTML = newContent;

// Add styles 

const style = document.createElement('style');
style.textContent = `
  .highlight { background-color: yellow; }
  .underline { text-decoration: underline; }
`;
document.head.appendChild(style);