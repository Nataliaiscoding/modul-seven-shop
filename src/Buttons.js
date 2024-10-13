
import './App.css';

function Buttons({filtredClothers}){
    return (
        <div>

        
        <div className="cont">
            <button className="change" onClick={() => filtredClothers("dress")}>Dresses</button>
            <button className="change" onClick={() => filtredClothers("skirt")}>Skirts</button>
            <button className="change" onClick={() => filtredClothers("pants")}>Pants</button>
            <button className="change" onClick={() => filtredClothers("shoes")}>Shoes</button>
            <button className="change" onClick={() => filtredClothers("shirt")}>Shirts</button>
        </div>
        </div>
    )
}

export default Buttons;