import { CLOUDINARY_URL } from "../../../utils";

export const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    imageId
}) => {
    return (
        <div className="w-60 h-full shadow-lg hover:scale-[0.95] origin-center transition-all">
            <img 
                alt={name}
                width="254"
                height="160"
                src={`${CLOUDINARY_URL}${imageId}`}
            />
            <div className="p-4">
                <div className="font-semibold text-slate-700 text-lg">{name}</div>
                <div className="text-sm">{cuisines?.join(', ')}</div>
                <div className="text-sm mt-2">
                    <span>{avgRating}</span>
                    <span>{deliveryTime} MINS</span>
                    <span>{costForTwoString}</span>
                </div>
            </div>

        </div>
    );
};

export const withPromotedLabel = RestaurantCard => {
    return props => {
        return (
            <>
                <div className="absolute bg-lime-400 text-white py-1 px-3 z-[1]">Veg</div>
                <RestaurantCard {...props} />
            </>
        )
    }
}
