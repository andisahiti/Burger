import React from 'react';
import Button from '../UI/Button/Button'
import classes from './Order.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
            <Button clicked={() => {
                props.deleteOrder(props.orderId, props.token, props.userId)
            }}
                btnType="Danger">Delete Order</Button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    };
};
const mapDispatchToProps = dispatch => {
    return {
        deleteOrder: (id, token, userId) => dispatch(actions.deleteOrder(id, token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(order);
