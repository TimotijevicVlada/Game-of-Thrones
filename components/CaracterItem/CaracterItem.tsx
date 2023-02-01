import React from 'react';
import css from "./CaracterItem.module.scss";

//types
import { CaracterItemProps } from '../../types/caracterItem';


const CaracterItem: React.FC<CaracterItemProps> = ({ item }) => {
  return (
    <div className={css.container}>
      <img src={item.imageUrl} alt={item.fullName} className={css.image}/>
    </div>
  )
}

export default CaracterItem;