import React from 'react';
import './Loader.css';

interface IProps {
    type: string;
}

const Loader: React.FC<IProps> = ({ type }) => {
    return (
        <div className={type === 'big' ? 'spinner' : 'spinner-small'}>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
