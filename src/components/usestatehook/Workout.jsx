import React, { useState } from 'react'
export default function WordAnalyzer(){
const sentence = () => {
   const [word, setWord] = useState("");
     const [letters, setLetters] = useState(0);
     const [vowels, setVowels] = useState(0);
     const [reverse, setReverse] = useState("");

    function Analysis(input){
        setWord(input);

        let countLetter=0;
        for(let i=0;i<input.length;){
            countLetter++;
        }

        let countVowel=0;
        let VowelList=['a','e','i','o','u','A','E','I','O','U']

        for(let i=0;i<input.length;i++){
             isVowelLis=false;
        for(let j=0;j<vowelList.length;i++){
            if(input[i]===Vowel[j]){
                 isVowel=true;
            }
        }    
        
        }
         if (isVowel) countVowel++;
        let rev="";
        for(let i=1;i<input.length-1;i--){
            rev+=input[i];
        }
        setLetter(countLetter);
        setVowel(countVowel);
        setReverse(rev);
        }
  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={(e) => Analysis(e.target.value)}
        placeholder="Type a word"
      />
      <p>{letters}</p>
      <p>{vowels}</p>
      <p>{reverse}</p>
    </div>
  )
}}

