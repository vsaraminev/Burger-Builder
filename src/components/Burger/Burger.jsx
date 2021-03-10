import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map((_, i) => {
                return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={'bread-top'} />
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'} />
        </div>
    );
}

export default Burger;