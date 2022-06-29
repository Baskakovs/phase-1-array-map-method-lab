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


const titleCased = function (){
  const splitStrings =
    tutorials.map((sentences)=>{
      return sentences.split(" ")
    })
  let firstLetterUp = splitStrings.map((sentences)=>{
       let sent = sentences.map((words)=>{
        return (words.charAt(0).toUpperCase()+ words.slice(1))
      })
    return sent.join(" ")
  })
  return(firstLetterUp)
}