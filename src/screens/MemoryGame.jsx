import React, { useState, useEffect, useRef } from "react";
import GameOver from '../components/GameOver';
import Game from '../components/Game';


const INIT_ARRAY = Array(18).fill(null);
const INIT_ATTEMPTS = 0;
const INIT_MATCHES = 0;

export default function MemoryGame() {
  const [placements, setPlacements] = useState(INIT_ARRAY);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [attempts, setAttempts] = useState(INIT_ATTEMPTS);
  const [matches, setMatches] = useState(INIT_MATCHES);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [isGameWon, setIsGameWon] = useState(false);

  const images = [
    { id: "Dodrio", uri: require("../images/pokemones/085.png") },
    { id: "Psyduck", uri: require("../images/pokemones/054.png") },
    { id: "Ponyta", uri: require("../images/pokemones/077.png") },
    { id: "Bulbasaur", uri: require("../images/pokemones/001.png") },
    { id: "Charmander", uri: require("../images/pokemones/004.png") },
    { id: "Charizard", uri: require("../images/pokemones/006.png") },
    { id: "Squirtle", uri: require("../images/pokemones/007.png") },
    { id: "Pidgey", uri: require("../images/pokemones/016.png") },
    { id: "Pikachu", uri: require("../images/pokemones/025.png") },
  ];

  const initialiseGameFn = (arr = INIT_ARRAY) => {
    let insertedIndices = [];
    const getRandomIndex = () => Math.floor(Math.random() * arr.length);
    images.forEach((image) => {
      for (let j = 0; j < 2; j++) {
        let randomIndex = getRandomIndex();
        while (insertedIndices.includes(randomIndex)) {
          randomIndex = getRandomIndex();
        }
        insertedIndices.push(randomIndex);
        arr[randomIndex] = image;
      }
    });
    setPlacements(arr);
    clearBothFn();
    setAttempts(INIT_ATTEMPTS);
    setMatches(INIT_MATCHES);
    setMatchedIndices([]);
    setIsGameWon(false);
  };

  const clearBothFn = () => {
    setFirst(null);
    setSecond(null);
  };

  useEffect(() => {
    initialiseGameFn();
  }, []);

  useEffect(() => {
    if (matchedIndices.length && matchedIndices.length === placements.length)
      setIsGameWon(true);
  }, [matchedIndices]);

  useEffect(() => {
    if (second) {
      const doesMatch = first.value.id === second.value.id;
      if (doesMatch) setMatches((mat) => ++mat);
      setAttempts((att) => ++att);
      setTimeout(() => {
        if (doesMatch) {
          let _matchedIdx = matchedIndices.slice();
          _matchedIdx.push(first.index, second.index);
          setMatchedIndices(_matchedIdx);
        }
        clearBothFn();
      }, 500);
    }
  }, [second]);

  const showCardFn = (index) => {
    let _selectionObj = {
      index,
      value: placements[index],
    };
    if (!first) setFirst(_selectionObj);
    else if (first.index === index) return;
    else setSecond(_selectionObj);
  };

  return (
    isGameWon ? (
      <GameOver 
        initialiseGameFn={initialiseGameFn}
      />
    ) : (
      <Game 
        first={first} 
        second={second} 
        placements={placements} 
        showCardFn={showCardFn} 
        matchedIndices={matchedIndices} 
        attempts={attempts} 
        matches={matches} 
      />
    )
  );
};
