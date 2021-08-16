import React from 'react';
import Modal from 'react-modal';

const InventoryModal = (props) => (
    <Modal
        isOpen={!!props.selectedInventory}
        onRequestClose={props.handleCloseModal}
        contentLabel={`${props.function} inventory`}
        closeTimeoutMS={500}
        className="modal">
        {props.children}
    </Modal>
);

export default InventoryModal;