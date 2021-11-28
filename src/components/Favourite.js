import React from 'react';

const Favourite = ({form}) => {
    return(
        <p>Your favourite:
        <a href={form}> {form}</a>
    </p>
    );
};

export default Favourite;