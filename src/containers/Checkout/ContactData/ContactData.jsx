import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            stree: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ventsi',
                address: {
                    street: 'Test Street 1',
                    zipCode: '12345',
                    country: 'Bulgaria'
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }
        };

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <input className={styles.Input} type="text" name='name' placeholder='Your Name' />
                <input className={styles.Input} type="email" name='email' placeholder='Your Email' />
                <input className={styles.Input} type="text" name='street' placeholder='Your Street' />
                <input className={styles.Input} type="text" name='postal' placeholder='Your Postal Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;