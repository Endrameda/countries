import React, {FC} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useGetAllCountriesQuery} from "../../redux/api";
import './detailPage.css';

export const DetailPage: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {country} = useGetAllCountriesQuery(undefined, {
        selectFromResult: ({data}) => ({
            country: data?.find((country: { cca3: string }) => country.cca3 === params.name)
        })
    });

    const handeClickBack = () => {
        navigate(-1)
    }

    const getCurrencies = () => {
        return country && Object.values(country?.currencies).map(item => item.name)
    }

    const getLanguages = () => {
        return country && Object.values(country?.languages).map(item => `${item} `)
    }

    const bordersRender = (item: any) => (
        <Link
            className="px-7 mb-5 py-1.5 drop-shadow-xl dark:shadow-dark-blue-lmt bg-white dark:bg-dark-blue-dme rounded-sm mr-5 text-sm"
            to={`/country/${item}`}>
            {item}
        </Link>
    )

    return (
        <div className="px-2.5 pt-8">
            <button className="backButton" onClick={handeClickBack}>Back</button>

            <div className="xl:flex">
                <img
                    className="drop-shadow-2xl dark:shadow-dark-blue-lmt w-[560px] mr-36 object-contain"
                    src={country?.flags.svg}
                    alt={country?.name.common}/>
                <div className="text-dark-blue-lmt dark:text-white-smoke py-10">
                    <div className='text-3xl font-semibold mb-8'>{country?.name.common}</div>
                    <ul className="sm:columns-2 gap-20 font-light mb-24">
                        <li className="mb-2.5"><span
                            className='font-semibold'>Native Name:</span> {country?.name.official}</li>
                        <li className="mb-2.5"><span
                            className='font-semibold'>Population:</span> {country?.population.toLocaleString()}
                        </li>
                        <li className="mb-2.5"><span className='font-semibold'>Region:</span> {country?.region}</li>
                        <li className="mb-2.5"><span className='font-semibold'>Sub Region:</span> {country?.subregion}
                        </li>
                        <li className="mb-2.5"><span className='font-semibold'>Capital:</span> {country?.capital}</li>
                        <li className="mb-2.5"><span className='font-semibold'>Top Level Domain:</span> {country?.tld}
                        </li>
                        <li className="mb-2.5"><span className='font-semibold'>Currencies:</span> {getCurrencies()}</li>
                        <li className="mb-2.5"><span className='font-semibold'>Languages:</span> {getLanguages()}</li>
                    </ul>
                    {country?.borders && <div className="sm:flex text-dark-blue-lmt dark:text-white">
                        <div className="flex-shrink-0">
                            Border Countries:
                        </div>
                        <div className="mt-5 sm:mt-0 sm:ml-5 flex flex-wrap">
                            {country?.borders?.map(item => bordersRender(item))}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};
