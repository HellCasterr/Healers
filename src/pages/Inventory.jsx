import React, { useState } from 'react';
import './Inventory.css';

const Inventory = () => {
    const [quantities, setQuantities] = useState({
        masks: 150,
        gloves: 150,
        gowns: 150,
        bandages: 150,
        adhesiveTape: 150,
        sterileGauze: 150,
        // Add more items as needed
    });

    const updateQuantity = (itemName, incrementValue) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemName]: prevQuantities[itemName] + incrementValue,
        }));
    };

    return (
        <div className="inventory-container">
            <h1>INVENTORY</h1>
            <div className="category-container">
                <div className="category">
                    <h3>Medical Supplies and Consumables:</h3>
                    <div className="item">
                        <h4>Personal Protective Equipment (PPE):</h4>
                        <div className="item-details">
                            <div className="item-name">Masks</div>
                            <div className="quantity">
                                <button onClick={() => updateQuantity('masks', -1)}>-</button>
                                <span>{quantities.masks}</span>
                                <button onClick={() => updateQuantity('masks', 1)}>+</button>
                            </div>
                        </div>
                        <div className="item-details">
                            <div className="item-name">Gloves</div>
                            <div className="quantity">
                                <button onClick={() => updateQuantity('gloves', -1)}>-</button>
                                <span>{quantities.gloves}</span>
                                <button onClick={() => updateQuantity('gloves', 1)}>+</button>
                            </div>
                        </div>
                        <div className="item-details">
                            <div className="item-name">Gowns</div>
                            <div className="quantity">
                                <button onClick={() => updateQuantity('gowns', -1)}>-</button>
                                <span>{quantities.gowns}</span>
                                <button onClick={() => updateQuantity('gowns', 1)}>+</button>
                            </div>
                        </div>
                        {/* Add more items here */}
                    </div>
                </div>
                {/* Add more categories here */}
            </div>
            <footer>
                <p className="footer-text">Copyright &copy; 2023 All rights reserved, Healers.</p>
            </footer>
        </div>
    );
};

export default Inventory;
