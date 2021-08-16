import React from 'react';
import Title from '../Shared/Title';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Add from '../../assets/images/add.png';

export default class Product extends React.Component {

    render() {
        return (
            <div className="card_body__content">
                <Title>LISTA DE PRODUTOS</Title>
                <div className="card_body__row">
                    <div className="card_body__form_row">
                        <Link
                            to="/product-create"
                            className="card_body__button button--rounded button--s button--green">
                            {<img src={Add}/>}
                        </Link>
                    </div>
                </div>
                <ProductList />
            </div>
        );
    };
}

