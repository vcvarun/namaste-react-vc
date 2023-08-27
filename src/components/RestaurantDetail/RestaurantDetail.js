import React, { useState } from 'react';
import { Accordion, Divider, MenuItem } from '../../common';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import CardBody from './CardBody';

export const RestaurantDetail = ({ data }) => {
    const [showItemIndex, setShowItemIndex] = useState(0);
    const dispatch = useDispatch();

    const handleShowItem = index => {
        if (index === showItemIndex) {
            setShowItemIndex(null);
            return;
        }
        setShowItemIndex(index);
    };

    const handleAddItem = item => {
        dispatch(addItem(item));
    };

    const itemCategory = data?.filter(card => card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    const renderAccordionBody = itemCards => {
        return <CardBody itemCards={itemCards} handleAddItem={handleAddItem} />
    };

    return (
        <div className="mt-6">
            {itemCategory?.map((c, index) => {
                const { title = '', itemCards = [] } = c?.card?.card ?? {};
                const accordionTitle = `${title} (${itemCards?.length})`;

                return (
                    <div key={title}>
                        <Accordion
                            title={accordionTitle}
                            body={renderAccordionBody(itemCards)}
                            showItem={showItemIndex === index}
                            handleShowItem={() => handleShowItem(index)}
                            className={{
                                root: 'mt-6 mr-2 mb-4 ml-4'
                            }}
                        />
                        <Divider className="border-b-8" />
                    </div>

                );
            })}
        </div>
    );
};
