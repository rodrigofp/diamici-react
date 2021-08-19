import React from 'react';
import Button from '../Shared/Button';
import CardItemList from '../Shared/CardItemList';
import TextBox from '../Shared/TextBox';
import TextBoxWithButton from '../Shared/TextBoxWithButton';
import { connect } from 'react-redux';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.product ? props.product.id : '',
            identifier: props.product ? props.product.identifier : '',
            name: props.product ? props.product.name : '',
            colors: props.product ? [...props.product.colors] : [],
            sizes: props.product ? [...props.product.sizes] : [],
        }
    };

    onIdentifierChange = (e) => {
        const identifier = e.target.value;
        this.setState(() => ({ identifier }));
    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onAddColor = (colorToAdd) => {
        if(!colorToAdd) return;

        let index = -1;
        this.state.colors.some((color, i) => {
            if (colorToAdd.toLowerCase() === color.toLowerCase()) {
                index = i;
                return;
            }
        })
        if(index > -1)
            return 'Cor já está adicionada';

        const colors = this.state.colors;
        colors.push(colorToAdd);
        this.setState(() => ({ colors }))
    };

    onRemoveColor = (colorToRemove) => {
        if(this.state.id && this.props.inventories.some((inv) => {
            return inv.identifier === this.props.product.identifier && inv.color === colorToRemove
        })) {
            alert('Esta cor está sendo usada em um estoque, remova o estoque antes de excluir essa cor');
            return;
        }
        const colorsBefore = this.state.colors;
        const colors = colorsBefore.filter((color) => color !== colorToRemove);

        this.setState(() => ({ colors }))
    };

    onAddSize = (sizeToAdd) => {
        if(!sizeToAdd) return;

        let index = -1;
        this.state.sizes.some((size, i) => {
            if (sizeToAdd.toLowerCase() === size.toLocaleLowerCase()) {
                index = i;
                return;
            }
        })
        if(index > -1)
            return 'Tamanho já está adicionado';

        const sizes = this.state.sizes;
        sizes.push(sizeToAdd);
        this.setState(() => ({ sizes }))
    };

    onRemoveSize = (sizeToRemove) => {
        if(this.state.id && this.props.inventories.some((inv) => {
            return inv.identifier === this.props.product.identifier && inv.size === sizeToRemove
        })) {
            alert('Este tamanho está sendo usado em um estoque, remova o estoque antes de excluir esse tamanho');
            return;
        }

        const sizesBefore = this.state.sizes;
        const sizes = sizesBefore.filter((size) => size !== sizeToRemove);

        this.setState(() => ({ sizes }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        let errorMessage = '';

        if(!this.state.identifier)
            errorMessage += 'O campo código é obrigatório\n';
        if(this.state.identifier.length !== 7)
            errorMessage += 'O campo código precisa ter 7 dígitos\n';
        if(!this.state.name)
            errorMessage += 'O campo nome é obrigatório\n';
        if(this.props.products.some((p) => p.identifier.toLowerCase() === this.state.identifier.toLowerCase() 
            && p.id !== this.state.id))
            errorMessage += 'O campo código já existe\n';
        if(this.props.products.some((p) => p.name.toLowerCase() === this.state.name.toLowerCase()
            && p.id !== this.state.id))
            errorMessage += 'O campo nome já existe\n';

        if(errorMessage){
            alert(errorMessage);
        } else {
            this.props.onSubmit({
                identifier: this.state.identifier,
                name: this.state.name,
                colors: [...this.state.colors],
                sizes: [...this.state.sizes]
            });
        }
    }

    render() {
        return (
            <form className="card_body__form" onSubmit={this.onSubmit}>
                <TextBox
                    placeholder="código do produto"
                    name="identifier"
                    value={this.state.identifier}
                    onChange={this.onIdentifierChange} />
                <TextBox
                    placeholder="nome do produto"
                    name="name"
                    value={this.state.name}
                    onChange={this.onNameChange} />
                <TextBoxWithButton
                    handleClick={this.onAddColor}
                    placeholder="cor do produto"
                    name="color" />
                <CardItemList
                    listItems={this.state.colors}
                    handleRemove={this.onRemoveColor}/>
                <TextBoxWithButton
                    handleClick={this.onAddSize}
                    placeholder="tamanho do produto"
                    name="size" />
                <CardItemList
                    listItems={this.state.sizes}
                    handleRemove={this.onRemoveSize}/>
                <Button
                    extraClasses="button--default button--m">
                    SALVAR
                </Button>
            </form>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        inventories: state.inventories
    }
}

export default connect(mapStateToProps)(ProductForm);