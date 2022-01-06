// Step Two: useFlip custom hook
//////////////////////////////////////////////////////////////////////
// A custom hook that flipping any type of card.
// Returns an array with two elements:
// The first element is the current flip state of the card, 
// and the second element is a function that will toggle the flip state.

import { useState } from 'react';

function useFlip(initialValue = true) {
    const [isFacingUp, setIsFacingUp] = useState(initialValue);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard];
}

export default useFlip;
