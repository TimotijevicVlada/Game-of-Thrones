import type { NextPage } from 'next';
import React, { useState } from 'react';
import css from './index.module.scss';

//react query
import { useQuery } from 'react-query';

//components
import CaracterItem from '../components/CaracterItem/CaracterItem';

//type
import { CaracterQueryProps } from '../types';
import { Caracter } from '../types/caracterItem';

const Home: NextPage = () => {

  const [search, setSearch] = useState("");

  const getCatacters = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    return response.json();
  }

  const { data, isLoading, isError } = useQuery('caracters', getCatacters);

  if (isLoading) {
    return (
      <div className={css.loading}>Loading data...</div>
    )
  }

  if (isError) {
    return (
      <div className={css.error}>Error has ocured</div>
    )
  }

  return (
    <div className={css.container}>
      {data.map((item: Caracter, index: number) => (
        <CaracterItem
          key={index}
          item={item}
        />
      ))}
    </div>
  )
}

export default Home
