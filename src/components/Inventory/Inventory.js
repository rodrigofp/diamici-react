import React from 'react';
import Title from '../Shared/Title';
import Button from '../Shared/Button';
import Select from '../Shared/Select';
import InventoryList from './InventoryList';
import InventoryModal from './InventoryModal';
import Add from '../../assets/images/add.png';
import { Link } from 'react-router-dom';

export default class Inventory extends React.Component {
    state = {
        users: [{
            id: 1,
            value: 'Administrador 1',
        },{
            id: 2,
            value: 'Administrador 2',
        },{
            id: 3,
            value: 'Administrador 3',
        }],
        idUserSelected: undefined,
        inventorySelected: undefined,
        firstLine: 'Selecione o dono do estoque'
    };

    handleUserClick = (userSelected) => {
        const users = this.state.users;
        this.setState(() => ({
            users,
            idUserSelected: userSelected.id,
            firstLine: userSelected.value
        }));
    };

    render() {
        return (
            <div className="card_body__content">
                <Title>LISTA DE ESTOQUE</Title>
                <div className="card_body__row margin_bottom">
                    <Link to="inventory-create">
                        <Button
                            extraClasses="button--rounded button--s button--green">
                            {<img src={Add}/>}
                        </Button>
                    </Link>
                </div>
                <Select
                    handleOptionClick={this.handleUserClick}
                    options={this.state.users}
                    firstLine={this.state.firstLine}/>
                <InventoryList
                    userId={this.state.idUserSelected} />
            </div>
        );
    }
}