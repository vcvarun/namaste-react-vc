import React from 'react'
import { Divider, MenuItem } from '../../common';

const CardBody = ({ itemCards, handleAddItem }) => {
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
                    handleAddItem={() => handleAddItem(item)}
                />
                <Divider />
            </div>

        );
    });
}

export default CardBody;
