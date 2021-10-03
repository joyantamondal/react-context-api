import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Special = () => {
    const ring= useContext(RingContext)
    return (
        <div>
            <p> {ring}</p>
        </div>
    );
};

export default Special;