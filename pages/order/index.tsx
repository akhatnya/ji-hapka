import React from 'react';
import { useBasketStore } from '../../providers/RootStoreProvider';
import BasketOrder from '../BasketOrder';

const Order = () => {
    const store = useBasketStore();
    return (
        <BasketOrder store={store} />
    )
}

export default (Order);