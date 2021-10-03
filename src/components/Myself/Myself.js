import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const {house} = props;
    return (
        <div>
            <p>House: {house}</p>
            <h2>Myself</h2>
            <Special></Special>
        </div>
    );
};

export default Myself;