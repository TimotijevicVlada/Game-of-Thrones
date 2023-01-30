import type { NextPage } from 'next'
import css from './index.module.scss'
import { useQuery } from 'react-query'
import { useState } from 'react'

const Home: NextPage = () => {

  const [search, setSearch] = useState("");

  const getCatacters = async () => {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    return response.json();
  }

  const { data, isLoading, isError } = useQuery('caracters', getCatacters);

  if (isLoading) {
    return (
      <div>Loading data...</div>
    )
  }

  if (isError) {
    return (
      <div>Error has ocured</div>
    )
  }

  return (
    <div className={css.container}>
      {data.map((item: any, index: number) => (
        <div key={index}>
          {item.fullName}
        </div>
      ))}
    </div>
  )
}

export default Home
