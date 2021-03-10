import React from 'react';
import styles from './BuildControls.module.css';
import BuilControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(el => (
            < BuilControl
                key={el.label}
                label={el.label}
                added={() => props.ingredientAdded(el.type)}
                removed={() => props.ingredientRemoved(el.type)}
                disabled={props.disabled[el.type]}
            />
        ))}
        <button 
            className={styles.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default BuildControls;