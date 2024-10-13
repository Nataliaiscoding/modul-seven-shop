
import './App.css';

function Clothers({items}) {
    return (
        <div className="products">
            {items.map((element => {
                const {id, name, searchTerm, price, image} = element;

                return (
                    <div key={id} className="product-card">
                            <img src={image} width="400px" height="500px" alt="Item"/>
                            <div className="product-info">
                                <h3>{name}</h3>
                                <h4>$ {price}</h4>
                            </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothers;