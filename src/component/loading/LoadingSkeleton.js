import React from 'react';

const LoadingSkeleton = (props) => {
    const  {className='', style={}} = props
    return (
        <div className={`skeleton ${className}`} style={style}>

        </div>
    );
};

export default LoadingSkeleton;