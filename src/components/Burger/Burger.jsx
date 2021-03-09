import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map( ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map((_, i) => {
                return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
            });
        });

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={'bread-top'} />
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'} />
        </div>
    );
}

export default Burger;