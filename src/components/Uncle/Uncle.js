import React from 'react';

const Uncle = (props) => {
    const {house} = props;
    return (
        <div>
            <p>House: {house}</p>
            <h2>Uncle</h2>
        </div>
    );
};

export default Uncle;