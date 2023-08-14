import { useState } from 'react';

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
        <div className="flex justify-between border-b">
            <div className="text-2xl">{totalRestaurants} restaurants</div>
            <div>
                <input className="border border-slate-500 rounded-md" type="text" value={searchText} onChange={onTextChange}/>
                <button className="ml-2 bg-blue-500 px-2 rounded-sm text-white" onClick={handleSearch}>Search</button>
            </div>
            <div tabIndex={0} className="cursor-pointer" onClick={filterRating}>Rating</div>
        </div>
    );
};

export default RestaruantsHeader;
