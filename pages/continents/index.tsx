import React from 'react';
import css from "./index.module.scss";

//assets
import Westeros from "../../assets/westeros.jpg";
import Sothoryos from "../../assets/sothoryos.jpg";
import Ulthos from "../../assets/ulthos.jpg";
import Essos from "../../assets/essos.jpg";

//react query
import { useQuery } from 'react-query';

interface DataProps {
    id: number;
    name: string;
}

const index = () => {

    const { data, isLoading, isError } = useQuery<DataProps[]>("continents", async () => {
        const res = await fetch("https://thronesapi.com/api/v2/Continents");
        return res.json();
    })

    if (isLoading) {
        return (
            <div className={css.loading}>Loading...</div>
        )
    }

    if (isError) {
        return (
            <div className={css.error}>Error occured</div>
        )
    }

    return (
        <>
            <header className={css.header}>
                <h1> Explore Continents</h1>
            </header>
            <div className={css.container}>
                {data?.map((item, index) => (
                    <div key={index} className={css.continent}>
                        <p>{item.name}</p>
                        {item.name === "Westeros" &&
                            <img src={Westeros.src} alt="Westeros" />
                        }
                        {item.name === "Sothoryos" &&
                            <img src={Sothoryos.src} alt="Sothoryos" />
                        }
                        {item.name === "Ulthos" &&
                            <img src={Ulthos.src} alt="Ulthos" />
                        }
                        {item.name === "Essos" &&
                            <img src={Essos.src} alt="Essos" />
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default index;