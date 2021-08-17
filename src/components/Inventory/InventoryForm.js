import React from 'react';
import Select from '../Shared/Select';
import Button from '../Shared/Button';
import { connect } from 'react-redux';
import TextBox from '../Shared/TextBox';

class InventoryForm extends React.Component {
    constructor(props) {
        super(props);
        const product = props.inventory ? props.products.find((p) => p.identifier === props.inventory.identifier) : undefined;
        this.state = {
            id: product ? props.inventory.id : '',
            identifier: product ? props.inventory.identifier : '',
            name: product ? props.inventory.name : '',
            color: product ? props.inventory.color : '',
            size: product ? props.inventory.size : '',
            userId: product ? props.inventory.userId : 1,
            quantity: product ? props.inventory.quantity : '',
            selectedProduct: product,
            firstLineProduct: product ? product.name : 'Escolha um produto',
            firstLineColor: product ? props.inventory.color : 'Escolha uma cor',
            firstLineSize: product ? props.inventory.size : 'Escolha um tamanho',
        };
    };

    onProductClick = (productSelected) => {
        const product = this.props.products.find((p) => p.id === productSelected.id);
        this.setState(() => ({
            selectedProduct: product,
            firstLineProduct: productSelected.value,
            identifier: product.identifier,
            name: product.name,
            color: '',
            size: '',
            firstLineColor: 'Escolha uma cor',
            firstLineSize: 'Escolha um tamanho'
        }));
    };

    mapProductToSelectOption = (product) => {
        return {
            id: product.id,
            value: product.name
        };
    };

    mapColorToSelectOption = (color, index) => {
        return {
            id: index,
            value: color
        };
    };

    onColorClick = (colorSelected) => {
        this.setState(() => ({
            firstLineColor: colorSelected.value,
            color: colorSelected.value
        }));
    };

    mapSizeToSelectOption = (size, index) => {
        return {
            id: index,
            value: size
        };
    };

    onSizeClick = (sizeSelected) => {
        this.setState(() => ({
            firstLineSize: sizeSelected.value,
            size: sizeSelected.value
        }));
    };
    onQuantityChange = (e) => {
        const quantity = e.target.value;
        if(!quantity || quantity.match(/^\d{1,}$/)){
            this.setState(() => ({ quantity }));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        let errorMessage = '';

        if(!this.state.color)
            errorMessage += 'Escolha uma cor\n';
        if(!this.state.size)
            errorMessage += 'Escolha um tamanho\n';
        if(!this.state.quantity)
            errorMessage += 'O campo de quantidade é obrigatório\n';
        if(this.props.inventories.some((inv) =>
            inv.identifier === this.state.identifier &&
            inv.color === this.state.color &&
            inv.size === this.state.size &&
            inv.id !== this.state.id))
            errorMessage += 'Você já tem esse estoque cadastrado\n';

        if(errorMessage){
            alert(errorMessage);
        } else {
            this.props.onSubmit({
                identifier: this.state.identifier,
                name: this.state.name,
                color: this.state.color,
                size: this.state.size,
                userId: this.state.userId,
                quantity: this.state.quantity
            });
        }
    };


    render() {
        return(
            <form className="card_body__form" onSubmit={this.onSubmit}>
                <Select
                    handleOptionClick={this.onProductClick}
                    options={this.props.products.map(this.mapProductToSelectOption)}
                    firstLine={this.state.firstLineProduct}/>
                {this.state.selectedProduct &&
                    <Select
                        handleOptionClick={this.onColorClick}
                        options={this.state.selectedProduct.colors.map(this.mapColorToSelectOption)}
                        firstLine={this.state.firstLineColor}
                    />}
                {this.state.selectedProduct &&
                    <Select
                        handleOptionClick={this.onSizeClick}
                        options={this.state.selectedProduct.sizes.map(this.mapSizeToSelectOption)}
                        firstLine={this.state.firstLineSize}
                    />}
                {this.state.selectedProduct &&
                    <TextBox
                        placeholder="quantidade"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.onQuantityChange}
                    />}
                {this.state.selectedProduct &&
                    <Button
                        extraClasses="button--default button--m">
                        SALVAR
                    </Button>}
            </form>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        inventories: state.inventories
    };
};

export default connect(mapStateToProps)(InventoryForm);