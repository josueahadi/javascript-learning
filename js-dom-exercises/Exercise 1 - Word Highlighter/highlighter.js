function highlighter() {
  const words = document
  .querySelector("#myParagraph")
  .innerText.replace(/[,.;':?\n"]/g, " ")
  .split(" ");

  //console.log(words);

  let occurences = {};
  words.forEach(word => {
    if (occurences[word]) {
      occurences[word]++;
    } else {
      occurences[word] = 1;
    }
  });

  //console.log(occurences);
  const sorted = Object.entries(occurences)
  .sort((a, b) => b[1] - a[1])
  .slice(1,6)
  .map((key) =>key[0]);
  // .map((key) => `<span style="background-color: yellow;">${key[0]}</span>`)

  //console.log(sorted)

  // let wordFromDom = document.querySelector("#myParagraph").innerText.split(" ");
  // console.log(wordFromDom);
  for (let i=0; i<sorted.length; i++) {
    //console.log(sorted[i]);
    if (words.includes(sorted[i])) {
      console.log(sorted[i]);
    }
  }
  
}
highlighter();








/*
step1: select the element with a paragraph , get the text content and split
step2: create an empty object 
step3: iterate through the text and add each word and it occurence in an object
step4: get the entries and sort them
step5: get the 5 most often occuring words 
step5: highlight those 5 words and underline the one that starts with a capital letter 
*/

// function highlighter() {
//   const words = document
//     .querySelector("#myParagraph")
//     .innerText.replace(/[,.;':!?\n"]/g, " ")
//     .split(" ");
//   console.log(words);
//   let occurence = {};
//   words.forEach((word) => {
//     if (occurence[word]) {
//       occurence[word]++;
//     } else {
//       occurence[word] = 1;
//     }
//   });

//   const sorted = Object.entries(occurence)
//     .sort((a, b) => b[1] - a[1])
//     .slice(1, 6);

//   const newStyledWord = words.map((word) => {
//     if (sorted.includes(word)) {
//       return <span style="background-color: yellow;">${word}</span>;
//     } else {
//       return word;
//     }
//   });
//   document.getElementById("myParagraph").innerHTML = newStyledWord.join(" ");
// }
// highlighter();














// const paragraph = document.getElementById("myParagraph");
// const words = paragraph.textContent.toLowerCase().match(/\b\w+\b/g);
// const wordFrequency = words.reduce((freq, word) => (freq[word] = -~freq[word], freq), {});

// Object.keys(wordFrequency)
//   .sort((a, b) => wordFrequency[b] - wordFrequency[a])
//   .slice(0, 5)
//   .forEach(word => {
//     const span = document.createElement("span");
//     span.textContent = word;
//     span.style.backgroundColor = "yellow";
//     if (wordFrequency[word] > 1) {
//       span.style.textDecoration = "underline";
//     }
//     paragraph.innerHTML = paragraph.innerHTML.replace(
//       new RegExp(`${word}`, "gi"),
//       span.outerHTML
//     );
//   });
