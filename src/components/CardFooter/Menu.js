import React from 'react';
import { Link } from 'react-router-dom';
import Shirt from '../../assets/images/shirt.png';
import Inventory from '../../assets/images/inventory.png';
import User from '../../assets/images/user.png';

const Menu = () => (
    <div className="card_footer__menu">
        <div className="card_footer__row">
            <Link
                to="/products"
                className="card_body__button button--default button--rounded">
                <img src={Shirt} />
            </Link>
            <Link
                to="/inventory"
                className="card_body__button button--default button--rounded">
                <img src={Inventory} />
            </Link>
            <Link
                to="/user"
                className="card_body__button button--default button--rounded">
                <img src={User} />
            </Link>
        </div>
    </div>
);

export default Menu;