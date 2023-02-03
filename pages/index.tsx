import type { NextPage } from 'next';
import React, { useState } from 'react';
import css from './index.module.scss';

//react query
import { useQuery, UseQueryResult } from 'react-query';

//components
import CaracterItem from '../components/CaracterItem/CaracterItem';

//type
import { CaractersProps } from '../types';

const Home: NextPage = () => {

  const [search, setSearch] = useState("");

  const getCatacters = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    return response.json();
  }

  const { data, isLoading, isError } = useQuery<CaractersProps[]>('caracters', getCatacters);

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
    <>
      <div className={css.header}>
        <h1>Welcome to my Game of Thrones App</h1>
      </div>
      <div className={css.container}>
        {data?.map((item, index) => (
          <CaracterItem
            key={index}
            item={item}
          />
        ))}
      </div>
    </>
  )
}

export default Home
