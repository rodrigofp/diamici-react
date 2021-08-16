import React from 'react';
import Button from '../Shared/Button';
import Edit from '../../assets/images/edit.png';
import Transfer from '../../assets/images/transfer.png';
import Sell from '../../assets/images/sell.png';
import Bin from '../../assets/images/bin.png';

const InventoryBack = (props) => (
    <div
        className="card__item--back"
        onClick={props.handleClick} >
        <Button
            extraClasses="button--rounded button--s button--default">
            {<img src={Edit} />}
        </Button>
        <Button
            extraClasses="button--rounded button--s button--default">
            {<img src={Transfer} />}
        </Button>
        <Button
            extraClasses="button--rounded button--s button--default">
            {<img src={Sell}/>}
        </Button>
        <Button
            extraClasses="button--rounded button--s button--red">
            {<img src={Bin}/>}
        </Button>
    </div>
);

export default InventoryBack;