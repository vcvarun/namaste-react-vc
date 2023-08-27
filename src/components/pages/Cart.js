import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardBody from '../RestaurantDetail/CardBody';
import { clearCart } from '../../store/cartSlice';

export const Cart = () => {
    const itemCards = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const onClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="px-[35rem] py-4">
            <div className="text-center m-5 text-2xl font-bold">Cart</div>
            {itemCards && <button className="ml-2 bg-blue-500 px-2 rounded-sm text-white" onClick={onClearCart}>Clear Cart</button>}
            <CardBody itemCards={itemCards} />
        </div>
    );
};
