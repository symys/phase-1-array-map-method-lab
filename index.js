const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newArr = [];
  function splitSentence() {
    const splittedSentences = [];
    tutorials.map((sentence) => {
      splittedSentences.push(sentence.split(" ").map((word) => {
        let processedWords = word.charAt(0).toUpperCase() + word.slice(1)
        return processedWords
      })
      )
    })

    splittedSentences.map((words) => {
     
      newArr.push(words.join(" "))

    })
  }
  splitSentence()

return newArr;

}
