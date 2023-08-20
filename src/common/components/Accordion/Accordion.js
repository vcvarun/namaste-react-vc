import React, { useState } from 'react';
import arrow from '../../../assets/images/down-arrow.svg';

export const Accordion = ({
    title,
    body,
    showItem,
    handleShowItem,
    className = {}
}) => {
    const rotate = showItem ? 'rotate-0' : '-rotate-90';

    return (
        <div className={className.root}>
            <section className="flex justify-between cursor-pointer" onClick={handleShowItem}>
                <div className="font-bold text-lg">{title}</div>
                <img src={arrow} width="100%" height="100%" className={`w-5 transition-all duration-200 ${rotate}`} />
            </section>
            {showItem &&
                <section>
                    <div>{body}</div>
                </section>
            }
        </div>
    );
};
