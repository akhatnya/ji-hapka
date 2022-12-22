import React from 'react';
import BasketOrder from '../BasketOrder';
import { observer } from 'mobx-react-lite';

const Order = () => {
    return (
        <BasketOrder  />
    )
}

export default observer(Order);