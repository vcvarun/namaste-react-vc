import React, { useState } from 'react';
import { Accordion, Divider, MenuItem } from '../../common';

export const RestaurantDetail = ({data}) => {
    const [showItemIndex, setShowItemIndex] = useState(0);

    const handleShowItem = index => {
        if (index === showItemIndex) {
            setShowItemIndex(null);
            return;
        }
        setShowItemIndex(index);
    };

    const itemCategory = data?.filter(card => card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    const renderAccordionBody = itemCards => {
        return itemCards?.map(item => {
            const { id, imageId, name, description, price = 0 } = item?.card?.info;
            return (
                <div key={id}>
                    <MenuItem
                        imageId={imageId}
                        name={name}
                        price={price/100}
                        description={description}
                        className={{
                            root: 'mt-4 mb-8'
                        }}
                    />
                    <Divider />
                </div>

            );
        });
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
