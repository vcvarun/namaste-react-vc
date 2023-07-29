import './RestaurantCard.scss';

export const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    imageId
}) => {
    return (
        <div className="res-card">
            <img 
                alt={name}
                width="254"
                height="160"
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}
                />
            <div className='res-card__name'>{name}</div>
            <div className='res-card__cuisine'>{cuisines.join(', ')}</div>
            <div className='res-card__ratings'>
                <span>{avgRating}</span>
                <span>{deliveryTime} MINS</span>
                <span>{costForTwoString}</span>
            </div>
        </div>
    );
};
