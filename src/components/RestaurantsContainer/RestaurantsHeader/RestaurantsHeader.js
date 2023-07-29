import { useState } from 'react';
import './RestaurantsHeader.scss';

const RestaruantsHeader = ({
    filterRating,
    totalRestaurants,
    handleSearchRestaurant
}) => {
    const [searchText, setSearchText] = useState('');

    const onTextChange = e => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        handleSearchRestaurant(searchText.trim());
    };

    return (
        <div className="res-header">
            <div className="res-header__total-count">{totalRestaurants} restaurants</div>
            <div>
                <input type="text" value={searchText} onChange={onTextChange}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="res-header__filters" onClick={filterRating}>Rating</div>
        </div>
    );
};

export default RestaruantsHeader;
