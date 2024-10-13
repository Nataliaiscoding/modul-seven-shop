
import { data } from "./data";
import { useState } from 'react';
import Buttons from "./Buttons";
import Clothers from "./Clothers";
import './App.css';

function Shop() {

    const [clothers, setClothers] = useState(data);

    const choesClothes = (searchTerm) => {
      const newClothes = data.filter(element => element.searchTerm === searchTerm);
      setClothers(newClothes);
    }
    return (
        <div>
            <div className='cont'>
                <h2 className='back'>Free Standard Shipping</h2>
            </div> 
        <Buttons filtredClothers={choesClothes}/>
        <Clothers items={clothers}/>
        </div>
    )
}

export default Shop;