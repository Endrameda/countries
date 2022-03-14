import React from 'react';
import {useGetAllCountriesQuery} from "../../redux/api";
import {CountryType} from "../../redux/types";

interface cardArgs {
    flag: string,
    name: string,
    population: number,
    region: string,
    capital: string[],
}

export const Cards = () => {
    const {data} = useGetAllCountriesQuery()

    console.log(data)

    const card = ({flag, name, population, region, capital}: cardArgs) => (
        <a className="shadow-lg rounded-md">
            <div >
                <img src={flag} alt=""/>
            </div>
            <div className="p-4">
                <div className="text-lg font-extrabold">{name}</div>

                <ul>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Capital: {capital}</li>
                </ul>
            </div>
        </a>
    )

    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-20 sm:gap-10 px-2.5">
            {data?.map((item: CountryType) => card({
                flag: item.flags.svg,
                name: item.name.common,
                population: item.population,
                region: item.region,
                capital: item.capital
            }))}
        </div>
    );
};
