import React from 'react';
import { CLOUDINARY_URL } from "../../../utils/constants";

export const MenuItem = ({
    imageId = '',
    name = '',
    price = 0,
    description = '',
    className = {}
}) => {
    return (
        <div className={`${className.root} flex justify-between`}>
            <div className="mr-6">
                <div className="font-semibold">{name}</div>
                <div className="text-sm">₹ {price}</div>
                <div className="text-xs text-slate-400 mt-4 height leading-5">{description}</div>
            </div>
            <div className="relative">
                <img src={`${CLOUDINARY_URL}${imageId}`} className="w-48 h-20 object-cover rounded-md" />
                <button className="absolute top-14 left-6 bg-white px-4 py-2 rounded-md text-lime-600 font-bold text-xs border border-slate-300 shadow-md">ADD +</button>
            </div>
        </div>
    );
};
