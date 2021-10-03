import React from 'react';

const Brother = (props) => {
    const {house} = props;
    return (
        <div>
            <p>House: {house}</p>
            <h2>Brother</h2>
        </div>
    );
};

export default Brother;