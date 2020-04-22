import React, { useState } from 'react';
import ArrowSvg from '../assets/Arrow';
import IndianDistricts from './IndianDistricts';

const IndianCitiesData = ({stateWise, stateDistrictWise}) => {

    const [isDistricts, toggleDistricts] = useState(false);

    const showDistricts = () => {
        toggleDistricts(!isDistricts);
    }

    return(
        <div className='indian-cities-data'>
            <div className='indian-cities-heading'>
                <h1>Indian Cities Stats:</h1>
            </div>
            <table className='cities-table data-table'>
                <tbody>
                    <tr>
                        <th className='states-col'><span>State</span><span className='show-districts' onClick={showDistricts}>{isDistricts ? 'Hide Districts' : 'Show Districts'}</span></th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Last Updated</th>
                    </tr>
                    {stateWise.map((state, index) => {
                        const filterDistrict = stateDistrictWise.filter((val) => state.state === val.state);
                        return (
                            <>
                                    <tr key={index} className={state.state === 'Total' ? 'total-row-class' : null}>
                                        <td className='bold cities-table-row states-col'><span className={`${state.state === 'Total' ? 'white-class' : null}`}>{state.state}</span></td>
                                        <td className="cities-table-row">{state.deltaconfirmed > 0 && <span className='delta-red'>{<ArrowSvg className={'arrow-svg-red'} />}{state.deltaconfirmed}</span>}<span>{state.confirmed}</span></td>
                                        <td className="cities-table-row"><span>{state.active}</span></td>
                                        <td className="cities-table-row">{state.deltarecovered > 0 && <span className='delta-green'>{<ArrowSvg className={'arrow-svg-green'} />}{state.deltarecovered}</span>}<span>{state.recovered}</span></td>
                                        <td className="cities-table-row">{state.deltadeaths > 0 && <span className='delta-red'>{<ArrowSvg className={'arrow-svg-red'} />}{state.deltadeaths}</span>}<span>{state.deaths}</span></td>
                                        <td className="cities-table-row"><span>{state.lastupdatedtime}</span></td>
                                    </tr>
                                {isDistricts && <tr>
                                    <td colSpan={6}>{filterDistrict.length > 0 && <IndianDistricts district={filterDistrict[0].districtData} /> }</td>
                                </tr>}
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default IndianCitiesData;