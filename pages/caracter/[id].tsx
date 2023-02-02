import React from 'react';
import css from "./[id].module.scss";
import { useRouter } from 'next/router';

//react query
import { useQuery } from 'react-query';

//types
import { SingleCaracterProps } from '../../types/singleCaracter';
import { Caracter } from '../../types/caracterItem';

const SingleCaracter: React.FC<SingleCaracterProps> = ({ caracter }) => {

    const router = useRouter();

    const getCatacters = async ({ queryKey }: any) => {
        const id = queryKey[1];
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
        return response.json();
    }

    const { data, isLoading, isError } = useQuery<Caracter>(['caracters', router.query.id], getCatacters);


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
                <div className={css.nameSection}>
                    <h2>{data?.fullName}</h2>
                    <p>{data?.title}</p>
                </div>
                <div className={css.familySection}>
                    <h2>House</h2>
                    <p>{data?.family}</p>
                </div>
            </div>
            <img src={data?.imageUrl} alt={data?.fullName} />
        </div>
    )
}

export default SingleCaracter;