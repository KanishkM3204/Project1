import { useState } from 'react'
import './App.css'

const catFacts = [
  "Cats have five toes on their front paws, but only four on the back.",
  "A group of cats is called a clowder.",
  "Cats sleep for around 13 to 16 hours a day.",
  "A cat can jump up to six times its length.",
  "The oldest known pet cat existed 9,500 years ago.",
  "The oldest cat ever lived: Creme Puff lived to be 38 years old",
  "Cats are believed to be the only mammals who don’t taste sweetness.",
  "Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).", 
  "Cats use their whiskers to “feel” the world around them in an effort to determine which small spaces they can fit into. A cat’s whiskers are generally about the same width as its body. (This is why you should never, EVER cut their whiskers.)"
];

function App() {
  const [fact, setFact] = useState("Click the button to get a cat fact!");

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setFact(catFacts[randomIndex]);
  };

  return (
    <>
      <div className='container'>
        <h1>Random Cat Facts</h1>
        <p>{fact}</p>
        <button onClick={getRandomFact}>Tell Me a Cat Fact</button>
      </div>
    </>
  );
}

export default App
