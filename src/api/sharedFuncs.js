//puts all words in a sentence to lower case, with dashes and no spaces for comparison

export function compareSentence( sentence ) {
return sentence.toString().replaceAll(" ", "-").replace(/,/g, "").trim().toLowerCase() 

}

//makes all words in a sentence into individual words which begin with an upper case letter for titles

export function titleSentence(sentence) {
  let words = sentence.toString().replaceAll("-", " ").split(" ")
  
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

return words.join(" "); 
}
