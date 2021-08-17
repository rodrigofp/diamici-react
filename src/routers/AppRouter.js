import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import CardFooter from '../components/CardFooter/CardFooter';
import Inventory from '../components/Inventory/Inventory';
import Login from '../components/Login/Login';
import Product from '../components/Product/Product';
import ProductCreate from '../components/Product/ProductCreate';
import ProductEdit from '../components/Product/ProductEdit';
import InventoryCreate from '../components/Inventory/InventoryCreate';

const AppRouter = () => (
    <BrowserRouter>
        <div className="card__body">
            <Switch>
                <Route path="/login" component={Login} exact={true} />
                <Route path="/products" component={Product} exact={true} />
                <Route path="/product-create" component={ProductCreate} exact={true} />
                <Route path="/product-edit/:id" component={ProductEdit} exact={true} />
                <Route path="/inventories" component={Inventory} exact={true} />
                <Route path="/inventory-create" component={InventoryCreate} exact={true} />
            </Switch>
        </div>
        {location.pathname !== "/login" && <CardFooter />}
    </BrowserRouter>
);

export default AppRouter;