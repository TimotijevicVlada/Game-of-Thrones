import React from 'react';
import css from "./CaracterItem.module.scss";
import { useRouter } from 'next/router';

//types
import { CaracterItemProps } from '../../types/caracterItem';


const CaracterItem: React.FC<CaracterItemProps> = ({ item }) => {

  const router = useRouter();

  return (
    <div className={css.container} onClick={() => router.push(`/caracter/${item.id}`)}>
      <img src={item.imageUrl} alt={item.fullName} className={css.image}/>
    </div>
  )
}

export default CaracterItem;