import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Laptop pro', price: 12200},
        {id: 2, name: 'Laptop bro', price: 12200},
        {id: 3, name: 'Laptop cro', price: 12200}
    ]
    return (
        <div>
            <h2>This is my cards</h2>

            <div className="card-group">
  
                {
                    products.map(product=> <Card key={product.id} product={product}
                    ></Card>)
                }
  
            </div>
        </div>
    );
};

export default CardGroup;