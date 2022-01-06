// Step Three: useAxios custom hook
//////////////////////////////////////////////////////////////////////////////////
// This custom hook takes in a URL, and returns an array with three elements. 
// The first element is an array of data obtained from previous AJAX requests.
// The second element contains an error if something went wrong.
// The third element is a function that will add a new object of data to the array.

import { useState } from 'react';
import uuid from "uuid";
import axios from "axios";

function useAxios(url) {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);
    const addCard = async () => {
        try {
            const response = await axios.get(url);
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        }            
        catch (e) {
            setError(e);
        }
    }
    return [cards, error, addCard];
}

export default useAxios;