import React, {FC} from 'react';
import {useGetAllCountriesQuery} from "../../redux/api";
import {CountryType} from "../../redux/types";
import {Link} from "react-router-dom";

interface cardArgs {
    flag: string,
    name: string,
    population: number,
    region: string,
    capital: string[],
    cca3: string;
}

interface CardsProps {
    searchText: string;
    selectedFilter: { value: string, label: string } | null;
}

export const Cards: FC<CardsProps> = ({searchText, selectedFilter}) => {
    const {data} = useGetAllCountriesQuery();

    const card = ({flag, name, population, region, capital, cca3}: cardArgs) => (
        <Link to={`/country/${cca3}`} key={name}
              className="shadow-lg rounded-md bg-white dark:bg-dark-blue-dme mb-5 sm:mb-0">
            <div>
                <img className='mx-auto object-contain' src={flag} alt={name}/>
            </div>
            <div className="p-4">
                <div className="text-lg font-extrabold text-dark-blue-lmt dark:text-white mb-5">{name}</div>

                <ul className="text-dark-blue-lmt dark:text-white">
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Capital: {capital}</li>
                </ul>
            </div>
        </Link>
    )

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-20 sm:gap-10 px-2.5">
                {data
                    ?.filter((item: CountryType) => item.name.common.includes(searchText))
                    .filter(item => item.region !== selectedFilter?.value)
                    .map(item => card({
                        flag: item.flags.svg,
                        name: item.name.common,
                        population: item.population,
                        region: item.region,
                        capital: item.capital,
                        cca3: item.cca3,
                    }))}
            </div>
        </>
    );
};
