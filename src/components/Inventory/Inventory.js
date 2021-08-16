import React from 'react';
import Title from '../Shared/Title';
import Button from '../Shared/Button';
import Select from '../Shared/Select';
import InventoryList from './InventoryList';
import InventoryModal from './InventoryModal';
import Add from '../../assets/images/add.png';

export default class Inventory extends React.Component {
    state = {
        users: [{
            id: 1,
            value: 'Administrador 1',
            isSelected: false
        },{
            id: 2,
            value: 'Administrador 2',
            isSelected: false
        },{
            id: 3,
            value: 'Administrador 3',
            isSelected: false
        }],
        inventoryList: [{
            id: 1,
            name: 'BLUSA MANGA MORCEGO',
            identifier: 'DCB001',
            color: 'AMARELO',
            size: 'P',
            quantity: 15,
            userId: 1
        }],
        idUserSelected: undefined,
        inventorySelected: undefined,
        firstLine: 'Selecione o dono do estoque'
    };

    handleUserClick = (userSelected) => {
        const users = this.state.users;
        users.forEach((user) => user.isSelected = user.id === userSelected.id);
        this.setState(() => ({
            users,
            idUserSelected: userSelected.id,
            firstLine: userSelected.value
        }));
    };

    render() {
        return (
            <div className="card_body__content">
                <Title>ESTOQUE</Title>
                <div className="card_body__row">
                    <Button
                        extraClasses="button--rounded button--s button--green">
                        {<img src={Add}/>}
                    </Button>
                </div>
                <Select
                    handleOptionClick={this.handleUserClick}
                    options={this.state.users}
                    firstLine={this.state.firstLine}
                    isSelected={this.state.isUserSelected}/>
                <InventoryList
                    inventories={this.state.inventoryList.filter((inventory) =>
                        inventory.userId === this.state.idUserSelected)} />
            </div>
        );
    }
}