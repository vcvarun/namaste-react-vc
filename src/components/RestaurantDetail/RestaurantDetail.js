import React from 'react';
import { Accordion, Divider, MenuItem } from '../../common';

export const RestaurantDetail = ({data}) => {
    const itemCategory = data?.filter(card => card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    const renderAccordionBody = itemCards => {
        return itemCards?.map(item => {
            const { id, imageId, name, description, price = 0 } = item?.card?.info;
            return (
                <>
                    <MenuItem
                        key={id}
                        imageId={imageId}
                        name={name}
                        price={price/100}
                        description={description}
                        className={{
                            root: 'mt-4 mb-8'
                        }}
                    />
                    <Divider />
                </>

            );
        });
    };

    return (
        <div className="mt-6">
            {itemCategory?.map(c => {
                const { title = '', itemCards = [] } = c?.card?.card ?? {};
                const accordionTitle = `${title} (${itemCards?.length})`;

                return (
                    <>
                        <Accordion
                            title={accordionTitle}
                            key={title}
                            body={renderAccordionBody(itemCards)}
                            className={{
                                root: 'mt-6 mr-2 mb-4 ml-4'
                            }}
                        />
                        <Divider className="border-b-8" />
                    </>

                );
            })}
        </div>
    );
};
