import React from 'react';
import css from "./[id].module.scss";
import { useRouter } from 'next/router';

//react query
import { useQuery } from 'react-query';

//types
import { SingleCaracterProps } from '../../types/singleCaracter';

const SingleCaracter: React.FC<SingleCaracterProps> = ({ caracter }) => {

    const router = useRouter();

    const getCatacters = async ({ queryKey }: any) => {
        const id = queryKey[1];
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
        return response.json();
    }

    const { data, isLoading, isError } = useQuery(['caracters', router.query.id], getCatacters);

    console.log("DATA", data)

    if (isLoading) {
        return (
            <div className={css.loading}>Loading...</div>
        )
    }

    if (isError) {
        return (
            <div className={css.error}>Some error occured</div>
        )
    }

    return (
        <div className={css.container}>
            <div className={css.imageHeader}>
                {data.fullName}
            </div>
            <img src={data.imageUrl} alt={data.fullName} />
            <div className={css.imageFooter}>
                {data.title}
            </div>
        </div>
    )
}

export default SingleCaracter;