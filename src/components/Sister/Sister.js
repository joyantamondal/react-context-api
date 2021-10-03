import React from 'react';

const Sister = (props) => {
    const {house} = props;
    return (
        <div>
            <p>House: {house}</p>
            <h2>Sister</h2>
        </div>
    );
};

export default Sister;