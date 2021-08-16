import React from 'react';
import Button from '../Shared/Button';
import { Link } from 'react-router-dom';
import Bin from '../../assets/images/bin.png';
import Edit from '../../assets/images/edit.png';

const ProductBack = (props) => (
    <div
        className="card__item--back"
        onClick={props.handleClick} >
        <Link to={`/product-edit/${props.id}`}>
            <Button
                extraClasses="button--rounded button--default">
                {<img src={Edit} />}
            </Button>
        </Link>
        <Button
            extraClasses="button--rounded button--red"
            handleClick={props.handleRemove}>
            {<img src={Bin} />}
        </Button>
    </div>
);

export default ProductBack;