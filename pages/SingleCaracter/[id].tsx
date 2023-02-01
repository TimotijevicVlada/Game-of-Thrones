import React from 'react';
import scss from "./SingleCaracter.module.scss";

//types
import { SingleCaracterProps } from '../../types/singleCaracter';

const SingleCaracter: React.FC<SingleCaracterProps> = ({ caracter }) => {
    return (
        <div>{caracter.name}</div>
    )
}

export default SingleCaracter;