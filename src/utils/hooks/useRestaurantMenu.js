import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../constants';

const useRestaurantMenu = () => {
    const { resId } = useParams();
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = async () => {
        const data = await fetch(`${MENU_API}${resId}`);
        const menuData = await data.json();
        setMenuItems(menuData);
    };

    return menuItems;
};

export default useRestaurantMenu